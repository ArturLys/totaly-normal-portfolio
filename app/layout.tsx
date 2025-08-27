import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import GlobalClickDisplay from './_components/Counter'
import { ClickProvider } from './context/globalContext'

export const metadata: Metadata = {
  title: 'Moaning Portfolio',
  description: 'A portfolio that moans',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ClickProvider>
        <body className='min-h-screen bg-background font-sans antialiased'>
          <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 items-center'>
              <div className='mr-4 flex'>
                <Button variant='ghost' volume={0.15} asChild>
                  <Link href='/' className='mr-6 flex items-center space-x-2'>
                    <span className='font-bold inline-block'>Moaning Portfolio</span>
                  </Link>
                </Button>
                <nav className='flex items-center space-x-6 text-sm font-medium'>
                  <Button variant='ghost' asChild>
                    <Link href='/'>Home</Link>
                  </Button>
                  <Button variant='ghost' asChild>
                    <Link href='/about'>About</Link>
                  </Button>
                  <Button variant='ghost' asChild>
                    <Link href='/projects'>Projects</Link>
                  </Button>
                  <Button variant='ghost' asChild>
                    <Link href='/contact'>Contact</Link>
                  </Button>
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <Toaster />
          {/* floating number */}
          <div className='fixed bottom-4 right-4 z-50'>
            <span className='inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-white'>
              <GlobalClickDisplay />
            </span>
          </div>
        </body>
      </ClickProvider>
    </html>
  )
}
