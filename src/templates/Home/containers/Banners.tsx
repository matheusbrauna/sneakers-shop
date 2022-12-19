import Image from 'next/image'

import bg1 from '../../../assets/bg1.png'

export function Banners() {
  return (
    <section className="py-8">
      <div className="container grid grid-cols-2">
        <div className="grid text-center transition-opacity bg-blue-200 place-content-center hover:opacity-90">
          <h2 className="text-3xl font-bold leading-9 text-neutral-50">
            JIMMY X SHOP KOLEKSİYONU
          </h2>

          <p className="mt-3 text-sm leading-5 text-neutral-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <button className="h-12 px-4 mt-10 text-sm font-bold leading-5 uppercase bg-neutral-100 text-neutral-900 justify-self-center">
            Comece a comprar
          </button>
        </div>

        <Image
          src={bg1}
          alt=""
          width={756}
          height={596}
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
