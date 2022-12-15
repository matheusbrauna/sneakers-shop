import { api } from '../../../services/api'

interface DataCategories {
  category: {
    data: {
      attributes: {
        title: string
        description: string
      }
    }
  }
}

interface DataImages {
  images: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

interface DataSneaker {
  title: string
  description: string
  price: number
  isNew: boolean
  type: 'normal' | 'trending' | 'featured'
}

interface SneakersData {
  data: {
    id: string
    attributes: DataSneaker & DataImages & DataCategories
  }[]
}

export async function getSneakers() {
  const { data } = await api.get<SneakersData>('/sneakers?populate=*')

  const sneakers = data.data.map((sneaker) => ({
    id: sneaker.id,
    title: sneaker.attributes.title,
    description: sneaker.attributes.description,
    price: sneaker.attributes.price,
    isNew: sneaker.attributes.isNew,
    type: sneaker.attributes.type,
    imgUrl: sneaker.attributes.images.data.attributes.url,
    category: {
      title: sneaker.attributes.category.data.attributes.title,
      description: sneaker.attributes.category.data.attributes.description,
    },
  }))

  return sneakers
}
