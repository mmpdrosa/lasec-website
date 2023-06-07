'use client'

import { ColumnDef } from '@tanstack/react-table'

export type User = {
  id: string
  name: string | null
  email: string | null
  userType: string | 'external' | 'internal'
  role: string | null
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'userType',
    header: 'Tipo de Usuário',
    cell: ({ row }) => {
      const userType = row.getValue('userType')

      const translated = userType === 'external' ? 'Externo' : 'Interno'

      return <div>{translated}</div>
    },
  },
  {
    accessorKey: 'role',
    header: 'Função',
  },
]
