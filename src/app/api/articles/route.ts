import { supabase } from '@/lib/supabase'
import { articleSchema } from '@/lib/validations'
import { verifySession } from '@/lib/session'
import type { ApiResponse } from '@/lib/api-response'

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 200)
}

export async function GET(request: Request): Promise<Response> {
  const auth = await verifySession(request)
  if (!auth) {
    return Response.json(
      { success: false, error: 'Unauthorized' } satisfies ApiResponse,
      { status: 401 }
    )
  }

  const { data, error } = await supabase
    .from('articles')
    .select('id, slug, title, category, date, last_modified, read_time, excerpt, author_name, author_role, author_initials, published, cover_image, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    return Response.json(
      { success: false, error: 'Failed to fetch articles' } satisfies ApiResponse,
      { status: 500 }
    )
  }

  return Response.json({ success: true, data } satisfies ApiResponse<typeof data>)
}

export async function POST(request: Request): Promise<Response> {
  const auth = await verifySession(request)
  if (!auth) {
    return Response.json(
      { success: false, error: 'Unauthorized' } satisfies ApiResponse,
      { status: 401 }
    )
  }

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
  const slug = slugify(d.title)

  const initials = d.authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const { data, error } = await supabase
    .from('articles')
    .insert({
      slug,
      title: d.title,
      category: d.category,
      date: dateStr,
      last_modified: dateStr,
      read_time: '5 min read',
      excerpt: d.excerpt,
      content: d.content,
      author_name: d.authorName,
      author_role: 'SafeNest Team',
      author_initials: initials,
      published: true,
      cover_image: d.coverImage || null,
    })
    .select()
    .single()

  if (error) {
    const message = error.code === '23505'
      ? 'An article with this title already exists'
      : 'Failed to create article'
    return Response.json(
      { success: false, error: message } satisfies ApiResponse,
      { status: error.code === '23505' ? 409 : 500 }
    )
  }

  return Response.json({ success: true, data } satisfies ApiResponse<typeof data>, { status: 201 })
}
