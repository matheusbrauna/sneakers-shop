import Image from 'next/image'

import bg1 from '../../../assets/bg1.png'
import bg2 from '../../../assets/bg2.png'

export function Categories() {
  return (
    <div className="grid gap-16 py-16 place-items-center">
      <h3 className="text-2xl font-bold leading-8 text-center text-black">
        O estilo que você procura em todos os calçados esportivos está apenas
        aqui.
      </h3>

      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <Image
            src={bg1}
            alt=""
            width={590}
            height={650}
            className="object-cover object-center"
          />

          <h4 className="absolute text-2xl text-white uppercase whitespace-nowrap top-2/4 left-2/4 -translate-x-2/4">
            Lançamentos
          </h4>
        </div>

        <div className="relative">
          <Image
            src={bg2}
            alt=""
            width={590}
            height={650}
            className="object-cover object-center"
          />

          <h4 className="absolute text-2xl text-white uppercase whitespace-nowrap top-2/4 left-2/4 -translate-x-2/4">
            Em alta
          </h4>
        </div>
      </div>
    </div>
  )
}
