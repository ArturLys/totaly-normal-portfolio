'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { playRandomMoan } from '@/lib/utils'
import { toast } from 'sonner'
import { useClick } from '../context/globalContext'

export default function ContactPage() {
  const { increment } = useClick()

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='mb-8 text-center text-4xl font-bold'>Contact Me</h1>
      <div className='mx-auto max-w-lg'>
        <form
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault()
            increment()

            toast.warning('Alert! You are a sigma', {
              action: {
                label: 'Click me!',
                onClick: () => playRandomMoan(0.5),
              },
            })
          }}
        >
          <div>
            <label htmlFor='name' className='mb-2 block text-sm font-medium'>
              Name
            </label>
            <Input
              id='name'
              type='text'
              placeholder='Your Name'
              required
              onChange={() => {
                playRandomMoan()
                increment()
              }}
            />
          </div>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Email
            </label>
            <Input
              id='email'
              type='email'
              placeholder='Your Email'
              required
              onChange={() => {
                playRandomMoan()
                increment()
              }}
            />
          </div>
          <div>
            <label htmlFor='message' className='mb-2 block text-sm font-medium'>
              Message
            </label>
            <Textarea
              id='message'
              placeholder='Your Message'
              required
              onChange={() => {
                playRandomMoan()
                increment()
              }}
            />
          </div>
          <Button type='submit' volume={1} long>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
