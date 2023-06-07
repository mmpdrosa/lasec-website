import { prisma } from '@/lib/prisma'
import { User, columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<User[]> {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, userType: true, role: true },
  })

  return users
}

export default async function UsersPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
