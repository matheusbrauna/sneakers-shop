import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Balancer } from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'
import { Product, ProductCard } from '@/components/cards/product-card'

const products: Product[] = [
  {
    id: 'a',
    name: 'University Blue',
    description:
      'O que há para não amar no University Blue em um AJ1? Aquele lindo tom de azul aparece na biqueira, tornozelos e calcanhar, dando ao color block clássico uma mudança sutil.',
    images: [
      {
        name: 'Imagem',
        url: '/images/university-blue.avif',
      },
    ],
    category: 'Homem',
    price: 1299.99,
    brand: 'Nike',
    rating: 5,
    inventory: 7,
  },
  {
    id: 'b',
    name: 'Praline',
    description:
      'Adoce o seu visual com esta confecção sedosa. Reimaginando o primeiro tênis de sucesso de MJ, o AJ1 "Praline" combina couro premium com um toque de deleite. Basta tocar naqueles cadarços luxuosos e suaves como caramelo para deixar você querendo mais. Vá em frente, mime-se.',
    images: [
      {
        name: 'Imagem',
        url: '/images/praline.avif',
      },
    ],
    category: 'Mulher',
    price: 1599.99,
    brand: 'Nike',
    rating: 4,
    inventory: 7,
  },
  {
    id: 'c',
    name: 'Pearl White',
    description:
      'Este Dunk Low funde o espírito criativo do skate com a energia do jiu-jitsu brasileiro. Detalhes intencionais são abundantes, como a parte superior em lona Pearl White com padrões complexos, que lembra um kimono de jiu-jitsu tradicional. Uma variedade de cadarços em cores de classificação de cintos levam você à comunidade do Jiu-Jitsu. E o toque final? Acentos em preto e branco que remetem a Albino & Preto - e à sua ascensão de iniciante a mestre.',
    images: [
      {
        name: 'Imagem',
        url: '/images/pearl-white.avif',
      },
    ],
    category: 'Homem',
    price: 1199.99,
    brand: 'Nike',
    rating: 5,
    inventory: 7,
  },
  {
    id: 'd',
    name: 'Photon Dust',
    description:
      'Faça uma viagem pela pista cruzada com o tênis de basquete dos anos 90 que dominou a quadra e a tela grande. Originalmente um dos tênis de basquete mais leves lançados, seu couro perfurado o mantém arejado, enquanto o colarinho macio e a língua elevada agitam seu estilo retrô.',
    images: [
      {
        name: 'Imagem',
        url: '/images/photon-dust.avif',
      },
    ],
    category: 'Homem',
    price: 1199.99,
    brand: 'Nike',
    rating: 5,
    inventory: 7,
  },
]

export default function IndexPage() {
  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Bem-vindo à Sneakers Shop
        </h1>
        <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          Encontre os melhores tênis de skate de marcas independentes e lojas de
          todo o mundo.
        </Balancer>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/produtos" className={cn(buttonVariants())}>
            Comprar agora
            <span className="sr-only">Comprar agora</span>
          </Link>
        </div>
      </section>

      <section
        id="feature"
        aria-labelledby="feature-heading"
        className="space-y-6 py-6 md:pt-10 lg:pt-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Novos Lançamentos
          </h2>
          <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Encontre os melhores equipamentos de skate de lojas de todo o mundo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Shell>
  )
}
