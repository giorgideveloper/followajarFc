import Alphabet from '@/components/Alphabet/Alphabet'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Reels from '@/components/Reels'
import Image from 'next/image'

export default function Home() {
  return (
    <>

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

      <div className=' mx-auto items-center'>
        <Hero />
      </div>
      {/* <div className="divider"></div>  */}
      <Alphabet />
      <Reels />
      {/* <div className="divider"></div>  */}
      {/* <div className='container mx-auto'> */}
      {/* </div> */}
      {/* </main> */}

    </>

  )
}
