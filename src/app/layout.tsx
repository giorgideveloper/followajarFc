import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

import { bpgArial, bpgArialCaps } from '@/styles/fonts'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

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
      <body className={`${bpgArial.variable} ${bpgArialCaps.variable}`}>
        <Navbar metadata={data} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
