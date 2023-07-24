import Alphabet from '@/components/Alphabet/Alphabet'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Reels from '@/components/Reels'
import { openGraphImage } from './shared-metadata'

import dynamic from "next/dynamic"

const MyAwesomeMap = dynamic(() => import("@/components/Map"), { ssr: false })

export const metadata = {
  title: 'მთავარი',
  openGraph: {
    ...openGraphImage,
    title: 'მთავარი',
  },
}

export default function Home() {
  return (
    <>

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

      {/* <div className=''> */}
      <Hero />
      {/* </div> */}
      <Alphabet />
      {/* <Reels /> */}
      <MyAwesomeMap />
      {/* <div className="divider"></div>  */}
      {/* <div className='container mx-auto'> */}
      {/* </div> */}
      {/* </main> */}

    </>

  )
}
