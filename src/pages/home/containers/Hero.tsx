import Link from 'next/link'
import { Button } from '../../../components/Button'

export function Hero() {
  return (
    <section className="bg-fixed bg-center bg-no-repeat bg-cover bg-hero-img">
      <div className="container flex flex-col items-center justify-center gap-6 paddingToHeader">
        <h2 className="text-xl font-bold leading-9 text-center uppercase sm:text-4xl text-neutral-50">
          Os melhores sneakers estão aqui!
        </h2>

        <Link href="/products" className="">
          <Button>Comece a comprar</Button>
        </Link>
      </div>
    </section>
  )
}
