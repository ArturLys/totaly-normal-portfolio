'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the first project.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of the second project.',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of the third project.',
  },
]

export default function ProjectsPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='mb-8 text-center text-4xl font-bold'>My Projects</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.id} className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
            <h2 className='mb-4 text-2xl font-bold'>{project.title}</h2>
            <p className='mb-4'>{project.description}</p>
            <Button>View Project</Button>
          </div>
        ))}
      </div>
      <div className='mt-16 text-center'>
        <Button size='lg' asChild>
          <Link href='/contact'>Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
