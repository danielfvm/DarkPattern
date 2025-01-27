"use client"

import {useState} from "react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="cookie-consent fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <p className="text-sm mb-2">
        We value your privacy! By clicking "I Accept", you agree to us tracking your every move, selling your data,
        and possibly naming our firstborn after you. Please keep in mind that this website is satire.
      </p>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-600 text-gray-400 rounded hover:bg-gray-500"
          onClick={() => setIsVisible(false)}
        >
          I Accept
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 animate-bounce"
          onClick={() => setIsVisible(false)}
        >
          I Accept (but in red)
        </button>
      </div>
    </div>
  )
}

