import { Star, StarHalf } from 'lucide-react'
import colors from 'tailwindcss/colors'
import { ISneaker } from './cards/product-card'

interface RatingsStarsProps {
  product: ISneaker
}

export function RatingsStars({ product }: RatingsStarsProps) {
  const maxStars = 5

  const ratings = product.ratings || []
  const averageRating =
    ratings.length > 0
      ? ratings.reduce((total, rating) => total + rating.stars, 0) /
        ratings.length
      : 0

  const fullStars = Math.floor(averageRating)
  const halfStar = averageRating - fullStars === 0.5
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0)

  const renderStars = () => {
    const stars = []

    if (averageRating <= 0) {
      for (let i = 0; i < maxStars; i++) {
        stars.push(<Star key={i} size={16} className="text-yellow-500" />)
      }
    } else {
      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <Star
            key={i}
            size={16}
            className="text-yellow-500"
            fill={colors.yellow[500]}
          />,
        ) // Estrelas preenchidas
      }

      if (halfStar) {
        stars.push(
          <div className="relative">
            <StarHalf
              key="half"
              size={16}
              className="text-yellow-500"
              fill={colors.yellow[500]}
            />
            <Star size={16} className="absolute left-0 top-0 text-yellow-500" />
          </div>,
        ) // Estrela pela metade
      }

      for (let i = 0; i < emptyStars; i++) {
        stars.push(
          <Star
            key={i + fullStars + 1}
            size={16}
            className="text-yellow-500"
          />,
        ) // Estrelas vazias
      }
    }

    return stars
  }

  return renderStars()
}
