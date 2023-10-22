'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { cn, formatPrice } from '@/lib/utils'
import { StoredFile } from '@/types'
import { RatingsStars } from '../rating-stars'

export interface ISneaker {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  slug: string
  brand: {
    id: string
    name: string
  }
  category: {
    name: string
  }
  ratings: {
    stars: number
  }[]
  coverImg: {
    url: string
  }
  images: StoredFile[]
}

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ISneaker
  variant?: 'default' | 'switchable'
  isAddedToCart?: boolean
  onSwitch?: () => Promise<void>
}

export function ProductCard({
  product,
  variant = 'default',
  isAddedToCart = false,
  onSwitch,
  className,
  ...props
}: ProductCardProps) {
  const [isPending, startTransition] = React.useTransition()

  return (
    <Card
      className={cn('h-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <Link href={`/product/${product.slug}`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {product?.coverImg?.url ? (
              <Image
                src={product.coverImg.url ?? '/images/product-placeholder.webp'}
                alt={product.name}
                className="object-cover"
                sizes="(min-width: 64rem) 20vw, (min-width: 48rem) 25vw, (min-width: 40rem) 33vw, (min-width: 29.6875rem) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{product.name}</span>
      </Link>
      <Link href={`/product/${product.slug}`} tabIndex={-1}>
        <CardContent className="grid gap-2.5 p-4">
          <span className="line-clamp-2 text-sm text-muted-foreground">
            {product.brand.name}
          </span>
          <CardTitle className="line-clamp-1 text-xl" title={product.name}>
            {product.name}
          </CardTitle>
          <div className="flex gap-1">{<RatingsStars product={product} />}</div>
          <div className="flex items-center gap-1">
            <CardDescription className="line-clamp-2 text-xs text-muted-foreground line-through">
              {formatPrice(product.price + 200)}
            </CardDescription>
            <CardDescription className="line-clamp-2 text-accent-foreground">
              {formatPrice(product.price)}
            </CardDescription>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        {variant === 'default' ? (
          <Button
            aria-label="Adicionar ao carrinho"
            size="sm"
            className="h-8 w-full rounded-sm"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Adicionar ao carrinho
          </Button>
        ) : (
          <Button
            aria-label={
              isAddedToCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'
            }
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={() => {
              startTransition(async () => {
                await onSwitch?.()
              })
            }}
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : isAddedToCart ? (
              <Icons.check className="mr-2 h-4 w-4" aria-hidden="true" />
            ) : (
              <Icons.add className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {isAddedToCart ? 'Adicionado' : 'Adicionando'}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
