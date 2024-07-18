import { HeroSection } from '@/components/home/hero-section'
import { FeatureSection } from '@/components/home/feature-section'
import { TrendingSection } from '@/components/home/trending-section'
import { MoreSection } from '@/components/home/more-section'

export default async function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeatureSection />
      <TrendingSection />
      <MoreSection />
    </main>
  )
}
