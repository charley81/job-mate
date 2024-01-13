import { BarChart3, CopyPlus, GalleryVerticalEnd } from 'lucide-react'
import { NavLink } from './types'

const links: NavLink[] = [
  {
    href: '/add-job',
    label: 'add job',
    icon: <CopyPlus />
  },
  {
    href: '/jobs',
    label: 'all jobs',
    icon: <GalleryVerticalEnd />
  },
  {
    href: '/stats',
    label: 'stats',
    icon: <BarChart3 />
  }
]

export default links
