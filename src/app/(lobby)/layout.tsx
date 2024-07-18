import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import { getCachedUser } from '@/lib/queries/user'
import { ReactNode } from 'react'

export default async function LobbyLayout({
  children,
}: {
  children: ReactNode
}) {
  const user = await getCachedUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      {children}
      <SiteFooter />
    </div>
  )
}
