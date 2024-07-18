import { cn } from '@/lib/utils'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh_-_64px)] pt-32">
      <div className="container">
        <div className="flex items-center justify-center">
          <div
            className={cn(
              'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Conheça as novidades</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="my-4 text-balance text-center text-8xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Bem-vindo à Sneakers Shop
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-center text-xl tracking-tight text-muted-foreground">
          Encontre os melhores tênis de marcas independentes e lojas de todo o
          mundo, encontre os melhores tênis de marcas independentes e lojas de
          todo o mundo encontre os melhores tênis de marcas independentes e
          lojas de todo o mundo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/produtos" className={cn(buttonVariants())}>
            Comprar agora
            <span className="sr-only">Comprar agora</span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 flex w-max -translate-x-1/2 flex-col items-center gap-1">
        <span className="text-xs text-muted-foreground">Role para baixo</span>
        <ArrowDown className="size-4 animate-bounce text-muted-foreground" />
      </div>
    </section>
  )
}
