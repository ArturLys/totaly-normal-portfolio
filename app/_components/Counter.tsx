'use client'

import { useClick } from '../context/globalContext'

export default function GlobalClickDisplay() {
  const { count } = useClick()

  if (count === 0) {
    return <span>:3</span>
  }

  if (count > 100) {
    return (
      <span className='text-pink-400'>
        {'♥♥♥: '} {count}
      </span>
    )
  }

  return <span>Moans heard: {count}</span>
}
