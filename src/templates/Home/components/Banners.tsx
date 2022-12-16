import Image from 'next/image'

import bg1 from '../../../assets/bg1.png'

export function Banners() {
  return (
    <div className="py-16">
      <div className="container grid grid-cols-2">
        <div className="grid text-center bg-blue-200 place-content-center">
          <h2 className="text-3xl font-bold leading-9 text-white">
            JIMMY X SHOP KOLEKSİYONU
          </h2>

          <p className="mt-3 text-sm leading-5 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <button className="h-12 px-4 py-2 mt-10 text-sm font-bold leading-5 text-black uppercase bg-white justify-self-center w-max">
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
    </div>
  )
}
