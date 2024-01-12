import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HandMetal } from 'lucide-react'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Button className="mr-4">default button</Button>
      <Button variant="outline" size="icon">
        <HandMetal />
      </Button>
    </main>
  )
}
