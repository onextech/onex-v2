import { ServicesOverview } from '@/components/sections/services-overview-section'

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-black/60 xl:h-[95vh]">
      <div className="h-[50vh] xl:h-full" />
      <div className="xl:absolute xl:bottom-0 xl:left-0 xl:right-0">
        <ServicesOverview />
      </div>
    </section>
  )
}
