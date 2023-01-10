import { GetStaticProps } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { HomeSneakerCard } from '../components/HomeSneakerCard'
import { Spinner } from '../../../components/Spinner'
import { useGetSneakers } from '../../../hooks/useGetSneakers'
import { client, ssrCache } from '../../../services/urql'
import { GetSneakersDocument } from '../../../graphql/generated'
import 'swiper/css'

export function Trending() {
  const { sneakers } = useGetSneakers()

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
          {!sneakers && <Spinner />}

          {sneakers &&
            sneakers.map((sneaker) => (
              <SwiperSlide key={sneaker.id}>
                <HomeSneakerCard sneaker={sneaker} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GetSneakersDocument, {}).toPromise()

  return {
    props: { urqlState: ssrCache.extractData() },
    revalidate: 60 * 60 * 24 * 7, // days
  }
}
