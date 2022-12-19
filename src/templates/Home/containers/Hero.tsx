import { WhiteButton } from '../../../components/Buttons/WhiteButton'

export function Hero() {
  return (
    <section className="pt-[6.25rem] grid bg-fixed bg-no-repeat bg-center bg-cover h-[48.75rem] bg-hero-img place-content-center gap-14">
      <h2 className="text-4xl font-bold leading-9 text-center uppercase text-neutral-50">
        Os melhores sneakers estão aqui!
      </h2>

      <WhiteButton href="/products">Comece a comprar</WhiteButton>
    </section>
  )
}
