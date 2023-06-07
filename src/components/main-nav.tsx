'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">lasec</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/pagina1"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/pagina1' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Página 1
        </Link>
        <Link
          href="/pagina2"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/pagina2')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Página 2
        </Link>
        <Link
          href="/pagina3"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/pagina3')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Página 3
        </Link>
      </nav>
    </div>
  )
}
