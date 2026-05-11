import { supabase } from '@/lib/supabase'
import { articleSchema } from '@/lib/validations'
import { verifySession } from '@/lib/session'
import type { ApiResponse } from '@/lib/api-response'

type Params = { params: Promise<{ slug: string }> }

export async function GET(_request: Request, { params }: Params): Promise<Response> {
  const { slug } = await params

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return Response.json(
      { success: false, error: 'Article not found' } satisfies ApiResponse,
      { status: 404 }
    )
  }

  return Response.json({ success: true, data } satisfies ApiResponse<typeof data>)
}

export async function PUT(request: Request, { params }: Params): Promise<Response> {
  const auth = await verifySession(request)
  if (!auth) {
    return Response.json(
      { success: false, error: 'Unauthorized' } satisfies ApiResponse,
      { status: 401 }
    )
  }

  const { slug } = await params
  const body = await request.json()

  const result = articleSchema.safeParse(body)
  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? 'Invalid data'
    return Response.json(
      { success: false, error: firstError } satisfies ApiResponse,
      { status: 400 }
    )
  }

  const d = result.data
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  const initials = d.authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const { data, error } = await supabase
    .from('articles')
    .update({
      title: d.title,
      category: d.category,
      last_modified: dateStr,
      excerpt: d.excerpt,
      content: d.content,
      author_name: d.authorName,
      author_initials: initials,
      cover_image: d.coverImage || null,
      updated_at: new Date().toISOString(),
    })
    .eq('slug', slug)
    .select()
    .single()

  if (error) {
    return Response.json(
      { success: false, error: 'Failed to update article' } satisfies ApiResponse,
      { status: 500 }
    )
  }

  return Response.json({ success: true, data } satisfies ApiResponse<typeof data>)
}

export async function DELETE(request: Request, { params }: Params): Promise<Response> {
  const auth = await verifySession(request)
  if (!auth) {
    return Response.json(
      { success: false, error: 'Unauthorized' } satisfies ApiResponse,
      { status: 401 }
    )
  }

  const { slug } = await params

  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('slug', slug)

  if (error) {
    return Response.json(
      { success: false, error: 'Failed to delete article' } satisfies ApiResponse,
      { status: 500 }
    )
  }

  return Response.json({ success: true } satisfies ApiResponse)
}

// PATCH is used for toggling published state
export async function PATCH(request: Request, { params }: Params): Promise<Response> {
  const auth = await verifySession(request)
  if (!auth) {
    return Response.json(
      { success: false, error: 'Unauthorized' } satisfies ApiResponse,
      { status: 401 }
    )
  }

  const { slug } = await params
  const body = await request.json() as { published: boolean }

  const { data, error } = await supabase
    .from('articles')
    .update({ published: body.published, updated_at: new Date().toISOString() })
    .eq('slug', slug)
    .select()
    .single()

  if (error) {
    return Response.json(
      { success: false, error: 'Failed to update article' } satisfies ApiResponse,
      { status: 500 }
    )
  }

  return Response.json({ success: true, data } satisfies ApiResponse<typeof data>)
}
