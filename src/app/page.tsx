import Alphabet from '@/components/Alphabet/Alphabet'
import Hero from '@/components/Hero'
import Reels from '@/components/Reels'
import { openGraphImage } from './shared-metadata'

// import dynamic from "next/dynamic"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Map from '@/components/Map'
// const MyAwesomeMap = dynamic(() => import("@/components/Map"), { ssr: false })

export const metadata = {
  title: 'მთავარი',
  openGraph: {
    ...openGraphImage,
    title: 'მთავარი',
  },
}

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  let { data: reels, error } = await supabase
    .from('reels')
    .select('*')
    .eq('active', true)
    .order('id', { ascending: false })
    .limit(25)

  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      {/* <div className=''> */}
      <Hero />
      {/* </div> */}
      <Alphabet />
      <Reels data={reels} />

      <Map />
      {/* <div className="divider"></div>  */}
      {/* <div className='container mx-auto'> */}
      {/* </div> */}
      {/* </main> */}
    </>
  )
}
