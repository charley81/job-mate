'use client'

import links from '@/utils/links'
import Logo from './logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      {/* Logo */}
      <Logo />

      {/* links */}
      <div className="flex flex-col mt-20 gap-y-8">
        {links.map(link => (
          <Button
            asChild
            key={link.href}
            variant={pathname === link.href ? 'outline ' : 'link'}
          >
            <Link href={link.href}>
              {link.icon} <span>{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  )
}
