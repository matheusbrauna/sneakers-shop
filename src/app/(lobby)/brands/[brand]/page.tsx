import { type Metadata } from 'next'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { Product, ProductCard } from '@/components/cards/product-card'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Buy products from our stores',
}

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
  {
    id: 'e',
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
  {
    id: 'f',
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
  {
    id: 'g',
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
  {
    id: 'h',
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
  {
    id: 'i',
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
  {
    id: 'j',
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
  {
    id: 'k',
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
  {
    id: 'l',
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

export default function BrandsPage({ params }: { params: { brand: string } }) {
  return (
    <Shell>
      <PageHeader
        id="products-page-header"
        aria-labelledby="products-page-header-heading"
      >
        <PageHeaderHeading size="sm" className="capitalize">
          {params.brand}
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Compre os produtos da marca{' '}
          <strong className="capitalize">{params.brand}</strong> em nossa loja
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Shell>
  )
}
