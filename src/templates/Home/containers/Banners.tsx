import Image from 'next/image'

import bg1 from '../../../assets/danilo-capece-NoVnXXmDNi0-unsplash.jpg'
import { WhiteButton } from '../../../components/Buttons/WhiteButton'

export function Banners() {
  return (
    <section className="py-8">
      <div className="container grid grid-cols-2">
        <div className="grid text-center transition-opacity bg-neutral-900 place-content-center">
          <h2 className="text-3xl font-bold leading-9 uppercase text-neutral-50">
            Jordan 1 Low
          </h2>

          <p className="mt-3 text-sm leading-5 text-neutral-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <WhiteButton href="/trending" scopedStyle="mt-10">
            Comece a comprar
          </WhiteButton>
        </div>

        <Image
          src={bg1}
          alt=""
          width={756}
          height={596}
          className="object-cover object-center"
          quality={100}
        />
      </div>
    </section>
  )
}
