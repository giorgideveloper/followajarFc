import Alphabet from '@/components/Alphabet/Alphabet'
import Hero from '@/components/Hero'
import Reels from '@/components/Reels'

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
