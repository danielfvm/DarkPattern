'use client'

import { useState, useEffect } from 'react'

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer)
          return 3600 // Reset to 1 hour when it reaches 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="text-center my-4">
      <h2 className="text-2xl font-bold mb-2 text-red-600 animate-pulse">FLASH SALE ENDING SOON!</h2>
      <div className="text-4xl font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  )
}

