import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="flex flex-1 justify-between gap-10"
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? '_blank' : undefined}
                        rel={link?.external ? 'noreferrer' : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center justify-between space-x-4"
        >
          <div className="text-left text-sm leading-loose text-muted-foreground">
            <Link href="/" className="flex w-fit items-center space-x-2">
              <Icons.logo className="h-6 w-6" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <div className="text-sm leading-loose text-muted-foreground">
            <span>
              Criado com 💙 por{' '}
              <Link
                href={siteConfig.links.portfolio}
                className="font-bold hover:underline"
              >
                Matheus Braúna
              </Link>
            </span>
          </div>
        </section>
      </Shell>
    </footer>
  )
}
