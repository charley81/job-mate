'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import links from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LinksDropdown() {
  const pathname = usePathname()
  console.log('PATHNAME: ', pathname)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="link" size="icon">
          <Menu />
          <span className="sr-only">toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={4}
      >
        {links.map(link => (
          <DropdownMenuItem key={link.href}>
            <Link
              href={link.href}
              className={`flex items-center gap-x-2 text-slate-600 ${
                pathname === link.href && 'text-slate-950 font-bold'
              }}`}
            >
              {link.icon} <span className="capitalize">{link.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
