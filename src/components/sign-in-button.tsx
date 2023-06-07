'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export function SignInButton() {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="secondary"
        size="sm"
        onClick={(event) => {
          event.preventDefault()
          signIn('azure-ad', { redirect: false })
        }}
      >
        Sign In
      </Button>
    </div>
  )
}
