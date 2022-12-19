import bg1 from '../../../assets/bg1.png'
import bg2 from '../../../assets/bg2.png'
import { CategoryCard } from '../components/CategoryCard'

export function Categories() {
  return (
    <section className="grid gap-8 py-8 place-items-center">
      <h3 className="text-2xl font-bold leading-8 text-center text-neutral-900">
        O estilo que você procura em todos os calçados esportivos está apenas
        aqui.
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <CategoryCard href="/featured" src={bg1} alt="">
          Lançamentos
        </CategoryCard>
        <CategoryCard href="/trending" src={bg2} alt="">
          Em alta
        </CategoryCard>
      </div>
    </section>
  )
}
