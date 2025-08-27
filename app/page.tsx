'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {

  return (
    <div className='flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center'>
      <h1 className='text-5xl font-bold'>Welcome to my Moaning Portfolio</h1>
      <p className='mt-4 text-xl text-muted-foreground'>Every click is a new surprise.</p>
      <div className='mt-8 flex gap-4'>
        <Button size='lg'>
          <Link href='/about'>Learn More About Me</Link>
        </Button>
        <Button size='lg' variant='secondary'>
          <Link href='/projects'>See My Work</Link>
        </Button>
      </div>
    </div>
  )
}
