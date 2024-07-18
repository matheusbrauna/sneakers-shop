import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function TrendingSection() {
  return (
    <section
      id="trending"
      aria-labelledby="trending-heading"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
        <span className="font-medium text-muted-foreground">
          Nike InfinityRN 4
        </span>
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Novos Lançamentos
        </h2>
        <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Encontre os melhores equipamentos de skate de lojas de todo o mundo.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <AspectRatio ratio={4 / 3}>
          <Image
            src="/images/trending-img.jpg"
            alt="A skateboarder doing a high drop"
            fill
            className="absolute inset-0 object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="/images/trending-img-2.avif"
            alt="A skateboarder doing a high drop"
            fill
            className="absolute inset-0 object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        </AspectRatio>
      </div>
    </section>
  )
}
