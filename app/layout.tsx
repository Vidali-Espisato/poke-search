import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/themeProvider'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PokéSearx',
  description: 'One stop to know your pokémons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <main className="h-screen overflow-hidden">
            <Link href="/" className='flex items-center justify-center my-8'>
              <Image src="/pokeball.png" alt="pokeball" width={40} height={40} className='mt-4 mr-2 animate-bounce rounded-full shadow-md shadow-yellow-200' />
              <Image src="/poke.png" alt="poke" width={90} height={40} />
              <h2
                className='font-bold text-3xl border-4 border-yellow-300 px-1 bg-blue-600 text-yellow-200 rounded-2xl shadow-md shadow-yellow-200 mr-2'
              >Searx</h2>
            </Link>
            <div className='font-mono mx-auto'>
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
