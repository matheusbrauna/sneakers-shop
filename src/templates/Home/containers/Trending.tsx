import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

import bg1 from '../../../assets/bg1.png'
import { HomeSneakerCard } from '../components/HomeSneakerCard'

export function Trending() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex justify-between">
          <h4 className="text-2xl font-bold leading-8 text-neutral-900">
            Lançamentos
          </h4>

          <div className="flex gap-5">
            <ArrowCircleLeft size={40} weight="fill" />
            <ArrowCircleRight size={40} weight="fill" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-10">
          <HomeSneakerCard
            src={bg1}
            alt=""
            title="Nike Blazer Young 2022"
            category="Sapatos casuais"
            price="R$ 1.250,00"
          />

          <HomeSneakerCard
            src={bg1}
            alt=""
            title="Nike Blazer Young 2022"
            category="Sapatos casuais"
            price="R$ 1.250,00"
          />

          <HomeSneakerCard
            src={bg1}
            alt=""
            title="Nike Blazer Young 2022"
            category="Sapatos casuais"
            price="R$ 1.250,00"
          />

          <HomeSneakerCard
            src={bg1}
            alt=""
            title="Nike Blazer Young 2022"
            category="Sapatos casuais"
            price="R$ 1.250,00"
          />
        </div>
      </div>
    </section>
  )
}
