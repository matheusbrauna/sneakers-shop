import Link from 'next/link'

import { dashboardConfig, siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.navMenu} />
        <MobileNav
          mainNavItems={siteConfig.navMenu}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/signin"
              className={buttonVariants({
                size: 'sm',
              })}
            >
              Login
              <span className="sr-only">Login</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
