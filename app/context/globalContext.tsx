'use client'

import React, { createContext, useContext, useState } from 'react'

interface ClickContextType {
  count: number
  increment: () => void
}

const ClickContext = createContext<ClickContextType | undefined>(undefined)

export function ClickProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)

  return <ClickContext.Provider value={{ count, increment }}>{children}</ClickContext.Provider>
}

export function useClick() {
  const context = useContext(ClickContext)
  if (!context) throw new Error('useClick must be used inside ClickProvider')
  return context
}
