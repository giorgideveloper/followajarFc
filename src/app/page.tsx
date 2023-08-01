import Alphabet from '@/components/Alphabet/Alphabet'
import Hero from '@/components/Hero'
import Reels from '@/components/Reels'
import { openGraphImage } from './shared-metadata'

import Map from '@/components/Map'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'

export const metadata = {
  title: 'მთავარი',
  openGraph: {
    ...openGraphImage,
    title: 'მთავარი',
  },
}

export default async function Home() {
  // const supabase = createServerComponentClient({ cookies })

  // let { data: reels, error } = await supabase
  //   .from('reels')
  //   .select('*')
  //   .eq('active', true)
  //   .order('id', { ascending: false })
  //   .limit(25)

  return (
    <>
      <Hero />
      <Alphabet />
      <Reels data={[]} />
      <Map />
    </>
  )
}
