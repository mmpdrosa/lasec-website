import { getCurrentUser } from '@/actions/get-current-user'
import { MainNav } from './main-nav'
import { ModeToggle } from './mode-toggle'
import { SignInButton } from './sign-in-button'
import { UserAccountNav } from './user-account-nav'

export async function SiteHeader() {
  const user = await getCurrentUser()

  return (
    <header className="supports-backdrop-blur:bg-background/60 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center py-6">
        <MainNav />

        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <nav className="flex items-center space-x-1">
            <ModeToggle />

            {user ? (
              <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              />
            ) : (
              <SignInButton />
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
