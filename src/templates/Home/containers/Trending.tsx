import { Swiper, SwiperSlide } from 'swiper/react'

import { HomeSneakerCard } from '../components/HomeSneakerCard'

import { useGetSneakersQuery } from '../../../graphql/generated'

import 'swiper/css'
import { Autoplay } from 'swiper'

export function Trending() {
  const [{ data }] = useGetSneakersQuery()

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold leading-8 text-neutral-900">
            Destaques
          </h3>
        </div>

        <Swiper
          className="mt-10"
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {data?.sneakers.map((sneaker) => (
            <SwiperSlide key={sneaker.id}>
              <HomeSneakerCard sneaker={sneaker} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
