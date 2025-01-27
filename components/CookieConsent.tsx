"use client"

import {useState} from "react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="cookie-consent fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <p className="text-lm mb-2">
        Welcome to DarkPatterns'R'Us! Click on the <p className="inline-block text-blue-400">blue</p> flashing circle to get additional information about the dark pattern used on this site.
        By clicking "Sure will do so", you are agreeing to click on all blue circles on this page. Not doing so is against our terms of service and will lead to a permanent ban.
      </p>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-600 text-gray-400 rounded hover:bg-gray-500"
          onClick={() => setIsVisible(false)}
        >
          No
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 animate-bounce"
          onClick={() => setIsVisible(false)}
        >
          Sure will do so
        </button>
      </div>
    </div>
  )
}

