import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Balancer } from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'

export default function IndexPage() {
  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Bem-vindo à Sneakers Shop
        </h1>
        <Balancer className="text-muted-foreground max-w-[46rem] text-lg sm:text-xl">
          Encontre os melhores tênis de skate de marcas independentes e lojas de
          todo o mundo.
        </Balancer>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/produtos" className={cn(buttonVariants())}>
            Comprar agora
            <span className="sr-only">Comprar agora</span>
          </Link>
        </div>
      </section>
    </Shell>
  )
}
