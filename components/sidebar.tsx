'use client'

import links from '@/utils/links'
import Logo from './logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      {/* Logo */}
      <Logo />

      {/* links */}
      <div className="flex flex-col mt-20 gap-y-8">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center  gap-x-2 ${
              pathname !== link.href
                ? 'text-slate-600'
                : 'text-slate-950 font-bold'
            }`}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}
