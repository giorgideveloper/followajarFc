import Alphabet from '@/components/Alphabet/Alphabet'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Metadata } from 'next'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  description: "აჭარის ტურიზმის დეპარტამენტმა შიდა ტურიზმის სტიმულირების მიზნით დაიწყო სარეკლამო კამპანია „გამომყევი აჭარაში“, რომლის ფარგლებშიც ქართველ ბლოგერებს, მოგზაურებს, ინფლუენსერებს, ფოტოგრაფ/ვიდეოგრაფებსა და ცნობილ სახეებს საშუალება ეძლევათ იმოგზაურონ აჭარაში, შექმნან საინტერესო კონტენტი, გაუზიარონ გამომწერებს და მოიგონ კამპანიის მთავარი პრიზი 100, 000 ლარი",
  openGraph: {
    title: 'Followajara',
    description: "აჭარის ტურიზმის დეპარტამენტმა შიდა ტურიზმის სტიმულირების მიზნით დაიწყო სარეკლამო კამპანია „გამომყევი აჭარაში“, რომლის ფარგლებშიც ქართველ ბლოგერებს, მოგზაურებს, ინფლუენსერებს, ფოტოგრაფ/ვიდეოგრაფებსა და ცნობილ სახეებს საშუალება ეძლევათ იმოგზაურონ აჭარაში, შექმნან საინტერესო კონტენტი, გაუზიარონ გამომწერებს და მოიგონ კამპანიის მთავარი პრიზი 100, 000 ლარი",
  },
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  let { data } = await supabase
    .from('links')
    .select(`*`)
    .order('letter', { ascending: true })

  return (
    <>
      {children}
      <Alphabet links={data} />
    </>
  )
}
