import Image from 'next/image'
import { BlackButton } from '../../../components/Buttons/BlackButton'

interface FullSneakerProps {
  sneaker?: {
    id: string
    name: string
    description: string
    price: number
    isFeatured: boolean
    slug: string
    image: {
      url: string
    }
  } | null
}

export function FullSneaker({ sneaker }: FullSneakerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
      <Image
        src={sneaker?.image.url ?? ''}
        alt={sneaker?.name ?? ''}
        quality={100}
        width={443}
        height={426}
      />

      <div className="flex-1">
        <h1 className="my-5 text-3xl font-bold uppercase text-neutral-900 md:text-4xl">
          {sneaker?.name}
        </h1>

        <p className="mt-6 mb-6 text-base leading-relaxed text-neutral-900 md:text-xl">
          {sneaker?.description}
        </p>

        <p className="text-xl font-bold text-neutral-900 md:text-2xl">
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(sneaker?.price ?? 0)}
        </p>

        <p className="mt-2 text-base font-bold line-through opacity-50 text-neutral-900">
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(sneaker?.price ?? 0)}
        </p>

        <div className="flex gap-6 mt-6">
          <BlackButton href="/">Comprar agora</BlackButton>
        </div>
      </div>
    </div>
  )
}
