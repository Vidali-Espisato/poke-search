import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/themeProvider'
import Image from 'next/image'

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
          <main className="h-screen p-24">
            <div className='flex items-center'>
              <Image src="/pokeball.png" alt="pokeball" width={60} height={60} className='mt-4 mr-2 animate-bounce rounded-full shadow-md shadow-yellow-200' />
              <Image src="/poke.png" alt="pokeball" width={110} height={50} />
              <h2 className='font-bold text-4xl border-4 border-yellow-300 px-1 bg-blue-600 text-yellow-200 rounded-2xl shadow-md shadow-yellow-200'>Searx</h2>
            </div>
            <div className='font-mono'>

            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
