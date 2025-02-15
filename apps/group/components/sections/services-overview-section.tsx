import { ArrowLink } from '@/components/arrow-link'
import { cn } from '@/lib/utils'
import { servicesContent } from '@/src/content/home/services-overview'
import { ServiceOverview } from '@/src/types/service'
import { ClassNameProp } from '@/src/types/utils'
import Link from 'next/link'

export const ServicesOverview = () => {
  return (
    <section className="dark mx-auto w-full">
      <div className="flex w-full flex-col border-t border-t-white/10 bg-black/60 backdrop-blur-lg xl:flex-row">
        <MainHeader className="w-full xl:w-1/3" />
        <ServicesGrid className="w-full xl:w-2/3" />
      </div>
    </section>
  )
}

const MainHeader = ({ className }: ClassNameProp) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between space-y-6 border-b border-white/10 px-10 py-6 md:flex-row md:space-y-0 md:px-10 md:py-6 lg:px-[60px] lg:py-6 xl:flex-col xl:border-b-0 xl:border-r xl:border-white/10 xl:px-[90px] xl:py-12',
        className
      )}
    >
      <h3 className="font-publico-headline text-4xl font-light leading-tight text-foreground">
        {servicesContent.mainHeader}
      </h3>
      <Link
        className="group flex items-center gap-2"
        href={servicesContent.mainLinkHref}
      >
        <h6 className="font-roboto text-xl font-medium leading-none text-white">
          {servicesContent.mainLinkTitle}
        </h6>
        <div className="flex-shrink-0">
          <ArrowLink />
        </div>
      </Link>
    </div>
  )
}

const ServicesGrid = ({ className }: ClassNameProp) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-3', className)}>
      {/* First row: Titles (hidden on small screens) */}
      <div className="col-span-3 hidden grid-cols-1 divide-x divide-white/10 lg:grid lg:grid-cols-3">
        {servicesContent.services.map((service, index) => (
          <h6
            className="px-[45px] py-[27px] font-roboto text-xl font-medium text-white"
            key={index}
          >
            {service.title}
          </h6>
        ))}
      </div>

      {/* Second row: ServiceCards (stacked on small screens) */}
      <div className="col-span-3 grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
        {servicesContent.services.map((service, index) => (
          <ServiceCard
            description={service.description}
            heading={service.heading}
            href={service.href}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

const ServiceCard = ({
  description,
  heading,
  href,
}: Omit<ServiceOverview, 'title'>) => (
  <div className="flex h-full flex-col">
    <div className="flex flex-grow flex-col space-y-4 bg-custom-dark-bg px-[45px] py-[40px]">
      <Link className="group flex items-center justify-between" href={href}>
        <h6 className="font-roboto text-xl font-medium text-white">
          {heading}
        </h6>
        <div className="flex-shrink-0">
          <ArrowLink />
        </div>
      </Link>
      <p className="pr-4 text-gray-400">{description}</p>
    </div>
  </div>
)
