import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'

import { prisma } from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      // tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  callbacks: {
    signIn({ user }) {
      if (!user.email?.endsWith('@ufu.br')) {
        return ''
      }

      return true
    },
  },
  debug: process.env.NODE_ENV === 'development',
}
