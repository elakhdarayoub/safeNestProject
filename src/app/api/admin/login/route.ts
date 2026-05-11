import { compare } from 'bcryptjs'
import { createSession } from '@/lib/session'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (!password || typeof password !== 'string') {
    return Response.json({ error: 'Password is required' }, { status: 400 })
  }

  const hash = process.env.ADMIN_PASSWORD_HASH
  if (!hash) {
    return Response.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const valid = await compare(password, hash)
  if (!valid) {
    return Response.json({ error: 'Invalid password' }, { status: 401 })
  }

  await createSession()
  return Response.json({ success: true })
}
