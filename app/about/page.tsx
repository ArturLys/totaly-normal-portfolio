'use client'

import { Button } from '@/components/ui/button'
import { playRandomMoan } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import Image from 'next/image'
import { useClick } from '../context/globalContext'
import Head from 'next/head'

export default function AboutPage() {
  const { increment } = useClick()
  function handleClickSecret(): void {
    toast.error('I like small girls', {
      action: {
        label: 'Continue',
        onClick: () => {
          playRandomMoan(0.5)
          increment()
          toast.error('and grown woman too', {
            action: {
              label: 'Continue',
              onClick: () => {
                increment()
                playRandomMoan(0.5)
                toast.error('crazy, I know', {})
              },
            },
          })
        },
      },
    })
  }

  const [visible, setVisible] = useState<string | null>(null)

  const triggerJumpscare = (i: number = 0) => {
    setVisible(i == 0 ? 'femboy' : 'demyan')
    setTimeout(() => {
      setVisible(null)
    }, 200)
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <Head>
        <link rel='preload' as='image' href='/femboy.png' />
        <link rel='preload' as='image' href='/demyan.png' />
      </Head>
      {/* jumpscare div */}
      {visible && <Image src={`/${visible}.png`} alt={visible} layout='fill' objectFit='cover' />}
      <h1 className='mb-8 text-center text-4xl font-bold'>About Me</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div>
          <p className='mb-4 text-lg'>
            I am a passionate and creative developer with a love for building beautiful and functional web applications. I have experience with a
            variety of technologies, including React, Next.js, and Tailwind CSS.
          </p>
          <p className='mb-4 text-lg'>
            When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and listening to... interesting
            sounds.
          </p>
          <Button onClick={handleClickSecret}>Hear a secret</Button>
        </div>
        <div>
          <h2 className='mb-4 text-2xl font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-4'>
            <Button>React</Button>
            <Button>Next.js</Button>
            <Button>TypeScript</Button>
            <Button>Tailwind CSS</Button>
            <Button>Node.js</Button>
            <Button>Express</Button>
            <Button>C++</Button>
            <Button>Python</Button>
            <Button volume={1} onClick={() => triggerJumpscare(0)}>
              Loving femboys
            </Button>
            <Button volume={1} onClick={() => triggerJumpscare(1)}>
              Demyan lox
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-16 text-center'>
        <Button size='lg' asChild>
          <Link href='/projects'>Check out my projects</Link>
        </Button>
      </div>
    </div>
  )
}
