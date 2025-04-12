import { ArrowRight } from 'lucide-react'

export const ArrowLink = () => {
  return (
    <div className="group relative inline-flex h-4 w-4 cursor-pointer items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-white transition-colors duration-200 group-hover:bg-[#007bff]" />
      <ArrowRight
        className="relative z-10"
        color="black"
        size={10}
        strokeWidth={3}
      />
    </div>
  )
}
