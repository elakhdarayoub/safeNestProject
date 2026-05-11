import { supabase } from '@/lib/supabase'
import type { ApiResponse } from '@/lib/api-response'

// Public read-only endpoint — no auth required
// Used by the insights page and article detail page server components
export async function GET(): Promise<Response> {
  const { data, error } = await supabase
    .from('articles')
    .select('id, slug, title, category, date, last_modified, read_time, excerpt, author_name, author_role, author_initials, cover_image')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    return Response.json(
      { success: false, error: 'Failed to fetch articles' } satisfies ApiResponse,
      { status: 500 }
    )
  }

  return Response.json(
    { success: true, data } satisfies ApiResponse<typeof data>,
    { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } }
  )
}
