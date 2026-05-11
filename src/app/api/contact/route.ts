import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations'
import { contactEmailHtml } from '@/lib/email-templates'
import { supabase } from '@/lib/supabase'
import type { ApiResponse } from '@/lib/api-response'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request): Promise<Response> {
  const body = await request.json()

  if (body.honeypot) {
    return Response.json({ success: true } satisfies ApiResponse)
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? 'Invalid form data'
    return Response.json(
      { success: false, error: firstError } satisfies ApiResponse,
      { status: 400 }
    )
  }

  const data = result.data

  const { error: dbError } = await supabase.from('form_submissions').insert({
    type: 'contact',
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone || null,
    company: data.company || null,
    message: data.message,
  })

  if (dbError) {
    console.error('Supabase insert error:', dbError)
    return Response.json(
      { success: false, error: 'Failed to save submission' } satisfies ApiResponse,
      { status: 500 }
    )
  }

  const { error: emailError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_EMAIL!,
    subject: `New Contact Inquiry — ${data.firstName} ${data.lastName}`,
    html: contactEmailHtml(data),
  })

  if (emailError) {
    console.error('Resend error:', emailError)
  }

  return Response.json({ success: true } satisfies ApiResponse)
}
