'use client'

import * as React from 'react'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Início</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Icons.logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Sneakers Shop
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A loja de sneakers mais completa e estilosa da internet.
                        Encontre os melhores tênis aqui!
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/products"
                    >
                      <div className="text-sm font-medium leading-none">
                        Todos os produtos
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore a diversidade da moda em um só lugar! Descubra
                        uma ampla seleção de sneakers que se encaixam
                        perfeitamente em qualquer estilo e ocasião.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/docs/installation"
                    >
                      <div className="text-sm font-medium leading-none">
                        Lançamentos
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Esteja sempre um passo à frente da tendência com nossa
                        coleção de lançamentos. Encontre os sneakers mais
                        recentes e exclusivos que vão fazer você se destacar.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/docs/primitives/typography"
                    >
                      <div className="text-sm font-medium leading-none">
                        Em Destaque
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        A escolha dos fashionistas! Nossa seleção de sneakers em
                        destaque apresenta os modelos mais icônicos e populares
                        que nunca saem de moda. Escolha o seu par de destaque
                        hoje mesmo!
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Marcas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {siteConfig.navMenu.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href={component.href}
                      >
                        <div className="text-sm font-medium leading-none">
                          {component.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {component.description}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/categories/homem"
                className={navigationMenuTriggerStyle()}
              >
                Homem
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/categories/mulher"
                className={navigationMenuTriggerStyle()}
              >
                Mulher
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/categories/infantil"
                className={navigationMenuTriggerStyle()}
              >
                Infantil
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </div>
  )
}
