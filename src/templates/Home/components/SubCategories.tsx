import Image from 'next/image'

import tafBg from '../../../assets/tafbg.png'

import bg1 from '../../../assets/bg1.png'

export function SubCategories() {
  return (
    <div className="py-16">
      <div className="relative w-full">
        <Image src={tafBg} width={999999999} height={736} alt="" />
      </div>

      <div>
        <div className="container">
          <div className="flex justify-center mt-10">
            <div className="flex gap-10">
              <button className="h-12 px-5 text-2xl font-bold leading-8 text-white bg-black">
                Homens
              </button>

              <button className="h-12 px-5 text-2xl font-bold leading-8 text-black">
                Mulheres
              </button>
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
    </div>
  )
}
