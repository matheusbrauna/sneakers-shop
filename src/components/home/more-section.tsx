import { fetchHygraphQuery } from '@/lib/utils'
import { CategoryCard, type ICategory } from '../cards/category-card'

const getCategories = async (): Promise<{ categories: ICategory[] }> => {
  const query = `#graphql
    query GetCategories {
      categories {
        id
        name
        title
        coverImg {
          url
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}

export async function MoreSection() {
  const { categories } = await getCategories()

  return (
    <section id="more" aria-labelledby="more" className="py-24 lg:py-32">
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Novos Lançamentos
          </h2>
          <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Encontre os melhores equipamentos de skate de lojas de todo o mundo.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
