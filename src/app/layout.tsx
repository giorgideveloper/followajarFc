import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

import { bpgArial, bpgArialCaps } from '@/styles/fonts'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Script from 'next/script'
import Image from 'next/image'

export const metadata = {
  title: 'Visit batumi',
  description: 'visit batumi',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  const userId = session?.user.id

  let { data, error, status } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('id', userId)
    .single()

  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YB0QW5TRGT" />
      <Script>
        {` window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-YB0QW5TRGT');`}
      </Script>
      <body className={`${bpgArial.variable} ${bpgArialCaps.variable}`}>
        <Navbar metadata={data} />
        {/* <Image
        className='absolute'
          alt=''
          src={'/bg.png'}
          fill
        /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}