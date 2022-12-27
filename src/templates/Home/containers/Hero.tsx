import Link from 'next/link'
import { Button } from '../../../components/Buttons/Button'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-fixed bg-center bg-cover paddingToHeader bg-hero-img">
      <h2 className="text-xl font-bold leading-9 text-center uppercase sm:text-4xl text-neutral-50">
        Os melhores sneakers estão aqui!
      </h2>

      <Link href="/products" className="">
        <Button>Comece a comprar</Button>
      </Link>
    </section>
  )
}
