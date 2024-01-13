import Image from 'next/image'
import HeroImg from '../assets/hero.svg'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Logo />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        {/* content */}
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-950">
            My job hunt
          </h1>
          <p className="leading-relaxed max-w-md py-8 text-slate-500">
            jobMate simplifies the job search process by enabling users to log
            and organize job applications effortlessly.
          </p>
          <Button asChild className="rounded-full">
            <Link href="/add-job">Get started</Link>
          </Button>
        </div>

        {/* image */}
        <Image src={HeroImg} alt="hero image" className="hidden lg:block" />
      </section>
    </main>
  )
}
