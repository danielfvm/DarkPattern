"use client"

import Image from "next/image"
import Link from "next/link"
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import {CookieConsent} from "../components/CookieConsent"
import {CountdownTimer} from "../components/CountdownTimer"
import Joyride from "react-joyride"
import {useEffect, useState} from "react"

export default function Home() {
  const steps = [
    {
      target: ".false-urgency",
      title: "False Urgency",
      content: "Creating a sense of urgency to encourage immediate purchases, often using limited-time offers or countdowns.",
    },
    {
      target: ".disguised-ad",
      title: "Disguised Advertisement",
      content: "Advertisements that are designed to look like other types of content, such as news articles or user-generated content.",
    },
    {
      target: ".fake-reviews",
      title: "Fake Reviews",
      content: "Presenting fabricated or manipulated user reviews to create a false impression of product quality or popularity.",
    },
    {
      target: ".hidden-costs",
      title: "Hidden Costs",
      content: "Concealing or obscuring additional fees, charges, or conditions until late in the purchasing process.",
    },
    {
      target: ".cookie-consent",
      title: "Misleading Cookie Consent",
      content: "Presenting cookie options in a way that makes it difficult or unclear how to opt out, often using confusing language or design.",
    },
  ];

  const fakeComments = [
    "This book changed my life! I can't imagine writing an exam without it now!",
    "This book is amazing! Studied for 2 hours and instantly passed Gittenberger exam!",
    "Studying Algebra with this book is so trivial now, AMAZING!",
    "I can't believe how easy it is to solve maths problems with this book!",
  ]

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to DarkPatterns'R'Us!</h1>

        <div className="false-urgency">
          <CountdownTimer />
        </div>

        <div className="disguised-ad mb-8 p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-bold mb-4">Breaking News!</h2>
          <p className="mb-4">
            Scientists discovered that people who don't buy our book are 100% more likely to fail ADM!
          </p>
          <Link href="/product" className="text-blue-500 underline">
            Learn More
          </Link>
        </div>

        <div className="fake-reviews mb-8">
          <h2 className="text-2xl font-bold mb-4">What Our "Real" Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 border border-gray-300 rounded">
                <div className="flex items-center mb-2">
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt={`User ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                  <span className="font-bold">Totally Real User {i}</span>
                </div>
                <p>"{fakeComments[i - 1]}"</p>
                <div className="text-yellow-500 mt-2">★★★★★</div>
              </div>
            ))}
          </div>
        </div>


        <div className="hidden-costs mb-8 bg-green-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Unbeatable Prices!</h2>
          <p className="mb-4">Products starting at just $9.99*</p>
          <Link href="/product" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Shop Now
          </Link>
          <p className="text-xs mt-2">
            *Additional fees, taxes, shipping, handling, and your eternal loyalty may apply.
          </p>
        </div>

        {(<Joyride
          steps={steps}
          hideBackButton
          hideCloseButton
          styles={{
            overlay: {
              backgroundColor: "#222",
            },
            tooltipTitle: {
              fontWeight: "bold",
              fontSize: "1.5em",
              color: "black",
            },
            options: {
              arrowColor: "#fff",
              backgroundColor: "#fff",
              textColor: "black",
              overlayColor: "rgba(0, 0, 0, 0.5)",
              primaryColor: "#0d6efd",
            },
          }}
        />)}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

