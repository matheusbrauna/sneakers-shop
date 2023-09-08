import { SiteHeader } from '@/components/site-header'
import { currentUser } from '@clerk/nextjs'
import { ReactNode } from 'react'

export default async function LobbyLayout({
  children,
}: {
  children: ReactNode
}) {
  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
    </div>
  )
}
