import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const playRandomMoan = (volume: number = 0.1, isLong: boolean = false) => {
  const moanNumber = Math.floor(Math.random() * (6 + (isLong ? 5 : 0))) + 1 + (isLong ? 6 : 0)
  const audio = new Audio(`/moans/moan${moanNumber}.mp3`)
  audio.volume = volume
  audio.play()
}
