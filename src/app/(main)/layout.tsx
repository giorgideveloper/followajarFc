import Alphabet from '@/components/Alphabet/Alphabet'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}
      <Alphabet />
    </>
  )
}
