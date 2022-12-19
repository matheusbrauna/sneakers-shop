import bg1 from '../../../assets/bg1.png'
import { HomeSneakerCard } from '../components/HomeSneakerCard'

export function SubCategories() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex justify-center gap-10">
          <button className="h-12 px-5 text-2xl font-bold leading-8 text-white bg-black">
            Homens
          </button>

          <button className="h-12 px-5 text-2xl font-bold leading-8 text-black">
            Mulheres
          </button>

          <button className="h-12 px-5 text-2xl font-bold leading-8 text-black">
            Crianças
          </button>
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
