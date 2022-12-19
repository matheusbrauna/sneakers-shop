import Image from 'next/image'
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

import bg1 from '../../../assets/bg1.png'

export function Trending() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="flex justify-between">
          <h4 className="text-2xl font-bold leading-8">Lançamentos</h4>

          <div className="flex gap-5">
            <ArrowCircleLeft size={40} weight="fill" />
            <ArrowCircleRight size={40} weight="fill" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-10">
          <div className="grid gap-5">
            <Image
              src={bg1}
              alt=""
              width={373}
              height={373}
              className="object-cover object-center"
            />

            <div className="flex justify-between">
              <div className="grid gap-2">
                <h2 className="text-sm font-bold leading-5">
                  Nike Blazer Young 2022
                </h2>
                <span className="text-xs leading-4 text-gray-600">
                  Sapatos casuais
                </span>
              </div>

              <p className="text-sm font-bold leading-5">R$ 1.250,00</p>
            </div>
          </div>
          <div className="grid gap-5">
            <Image
              src={bg1}
              alt=""
              width={373}
              height={373}
              className="object-cover object-center"
            />

            <div className="flex justify-between">
              <div className="grid gap-2">
                <h2 className="text-sm font-bold leading-5">
                  Nike Blazer Young 2022
                </h2>
                <span className="text-xs leading-4 text-gray-600">
                  Sapatos casuais
                </span>
              </div>

              <p className="text-sm font-bold leading-5">R$ 1.250,00</p>
            </div>
          </div>
          <div className="grid gap-5">
            <Image
              src={bg1}
              alt=""
              width={373}
              height={373}
              className="object-cover object-center"
            />

            <div className="flex justify-between">
              <div className="grid gap-2">
                <h2 className="text-sm font-bold leading-5">
                  Nike Blazer Young 2022
                </h2>
                <span className="text-xs leading-4 text-gray-600">
                  Sapatos casuais
                </span>
              </div>

              <p className="text-sm font-bold leading-5">R$ 1.250,00</p>
            </div>
          </div>
          <div className="grid gap-5">
            <Image
              src={bg1}
              alt=""
              width={373}
              height={373}
              className="object-cover object-center"
            />

            <div className="flex justify-between">
              <div className="grid gap-2">
                <h2 className="text-sm font-bold leading-5">
                  Nike Blazer Young 2022
                </h2>
                <span className="text-xs leading-4 text-gray-600">
                  Sapatos casuais
                </span>
              </div>

              <p className="text-sm font-bold leading-5">R$ 1.250,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
