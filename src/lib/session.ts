import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

// Used by API routes that need to verify auth from the incoming request cookie
export async function verifySession(request: Request): Promise<boolean> {
  const cookieHeader = request.headers.get('cookie') ?? ''
  const match = cookieHeader.match(/admin_session=([^;]+)/)
  const token = match?.[1]
  if (!token) return false
  try {
    await jwtVerify(token, secretKey())
    return true
  } catch {
    return false
  }
}

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000

function secretKey() {
  const s = process.env.SESSION_SECRET
  if (!s) throw new Error('SESSION_SECRET is not set')
  return new TextEncoder().encode(s)
}

export async function createSession() {
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS)
  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(secretKey())

  const store = await cookies()
  store.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const store = await cookies()
  store.delete('admin_session')
}
