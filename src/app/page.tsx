import Alphabet from '@/components/Alphabet/Alphabet'
import Hero from '@/components/Hero'
import SocialFeeds from '@/components/SocialFeeds'
import { openGraphImage } from './shared-metadata'

import Map from '@/components/Map'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'მთავარი',
  openGraph: {
    ...openGraphImage,
    title: 'მთავარი',
  },
}

export default async function Home() {

  const supabase = createServerComponentClient({ cookies })

  let { data } = await supabase
    .from('links')
    .select(`*`)
    .order('letter', { ascending: true })

  let { data: settings } = await supabase
    .from('settings')
    .select(`*`)
    .eq('name', 'contact')
    .single()
  console.log(settings);

  return (
    <>
      <Hero content={settings.data.text} video_url={settings.data.video_url} />
      <Alphabet links={data} />
      <SocialFeeds />
      <Map />
    </>
  )
}
