'use client'

import { useState } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { siteConfig } from '@/config/site'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from '../icons'
import { SheetTrigger, SheetContent, Sheet } from '../ui/sheet'
import { Button } from '../ui/button'

export function MobileNav() {
  const segment = useSelectedLayoutSegment()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" />
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="divide-y pl-1 pr-7">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="text-sm capitalize">
                  Início
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <MobileLink
                      href="/products"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Todos os produtos
                    </MobileLink>

                    <MobileLink
                      href="/feature"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Lançamentos
                    </MobileLink>

                    <MobileLink
                      href="/trending"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Em destaque
                    </MobileLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="text-sm capitalize">
                  Marcas
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <MobileLink
                      href="/brands/nike"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Nike
                    </MobileLink>

                    <MobileLink
                      href="/brands/adidas"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Adidas
                    </MobileLink>

                    <MobileLink
                      href="/brands/puma"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Puma
                    </MobileLink>

                    <MobileLink
                      href="/brands/converse"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Converse
                    </MobileLink>

                    <MobileLink
                      href="/brands/vans"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      Vans
                    </MobileLink>

                    <MobileLink
                      href="/brands/new-balance"
                      segment={String(segment)}
                      setIsOpen={setIsOpen}
                    >
                      New Balance
                    </MobileLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/genres/homem"
              className="block py-4 font-medium transition-all hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Homem
            </Link>
            <Link
              href="/genres/mulher"
              className="block py-4 font-medium transition-all hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Mulher
            </Link>
            <Link
              href="/genres/infantil"
              className="block py-4 font-medium transition-all hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Infantil
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  segment: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        href.includes(segment) && 'text-foreground',
        disabled && 'pointer-events-none opacity-60',
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
