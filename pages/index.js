import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/Components/HomePage/Banner/Banner'
import Solutions from '@/Components/HomePage/Solutions/Solutions'



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <Banner></Banner>
     <Solutions></Solutions>
    </main>
  )
}
