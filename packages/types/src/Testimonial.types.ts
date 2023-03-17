import { CrudItem } from '@gravis-os/types'

export interface Testimonial extends CrudItem {
  avatar_src?: string
  avatar_alt?: string
  author_title?: string
  author_job_title?: string
  author_company_title?: string
  rating_count?: number
}

export default Testimonial
