import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })

    const isAuth = !!token
    const isAdminPage = req.nextUrl.pathname === '/users'

    if (isAdminPage) {
      if (isAuth) {
        return null
      }

      return NextResponse.redirect(new URL('/', req.url))
    }

    if (!isAuth) {
      return null
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  },
)

export const config = {
  matcher: ['/users/:path*'],
}
