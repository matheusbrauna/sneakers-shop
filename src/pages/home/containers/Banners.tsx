import Image from 'next/image'
import Link from 'next/link'

import bg1 from '../../../assets/danilo-capece-NoVnXXmDNi0-unsplash.jpg'
import { Button } from '../../../components/Button'

export function Banners() {
  return (
    <section className="py-8">
      <div className="container flex flex-col sm:grid sm:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-16 text-center transition-opacity bg-neutral-900">
          <h2 className="text-2xl font-bold leading-9 uppercase sm:text-3xl text-neutral-50">
            Jordan 1 Low
          </h2>

          <p className="mt-3 text-xs leading-5 md:text-sm text-neutral-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <Link href="/trending" className="mt-10">
            <Button>Comece a comprar</Button>
          </Link>
        </div>

        <Image
          src={bg1}
          alt="Tênis Nike Jordan 1 Low"
          width={756}
          height={596}
          className="object-cover object-center"
          quality={100}
        />
      </div>
    </section>
  )
}
