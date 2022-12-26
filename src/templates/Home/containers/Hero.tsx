import Link from 'next/link'
import { Button } from '../../../components/Buttons/Button'

export function Hero() {
  return (
    <section className="pt-[6.25rem] grid bg-no-repeat bg-center bg-cover h-[48.75rem] bg-hero-img place-content-center gap-14">
      <h2 className="text-4xl font-bold leading-9 text-center uppercase text-neutral-50">
        Os melhores sneakers estão aqui!
      </h2>

      <Link href="/products" className="justify-self-center">
        <Button>Comece a comprar</Button>
      </Link>
    </section>
  )
}
