"use client"

import Image from "next/image"
import {useState} from "react"
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import {CountdownTimer} from "../../components/CountdownTimer"
import {useCart} from "../../contexts/CartContext"
import Joyride from "react-joyride"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(3)
  const [addWarranty, setAddWarranty] = useState(true)
  const {addToCart} = useCart()

  const originalPrice = 33.33
  const discountedPrice = 9.99

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Trivial Mathematics",
      price: discountedPrice,
      quantity: quantity,
    })

    if (addWarranty) {
      addToCart({
        id: 2,
        name: "De Facto Warranty",
        price: 29.99,
        quantity: 1,
      })
    }

    alert("Product added to cart!")
  }


  const steps = [
    {
      target: ".misleading-discounts",
      title: "Misleading Discounts",
      content: "Presenting discounts that are exaggerated, based on inflated original prices, or applied to only a small selection of items.",
    },
    {
      target: ".hidden-costs",
      title: "Hidden Costs",
      content: "Concealing or obscuring additional fees, charges, or conditions until late in the purchasing process.",
    },
    {
      target: ".basket-sneaking",
      title: "Basket Sneaking",
      content: "Manipulating the cart or checkout process to add items to the cart without the user being aware.",
    },
    {
      target: ".false-scarcity",
      title: "False Scarcity",
      content: "Creating a false sense of scarcity to pressure users into making quick purchase decisions.",
    },
    {
      target: ".complex-pricing",
      title: "Complex Pricing",
      content: "Using confusing or complicated pricing structures to make it difficult for users to understand the true cost of a product or service.",
    }

  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Trivial Mathematics</h1>

        <CountdownTimer />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/trivial.jpg" alt="Product" className="w-full h-auto" />
          </div>
          <div>
            <div className="misleading-discounts mb-4">
              <span className="text-3xl font-bold text-red-600">Only ${discountedPrice}*</span>
              <span className="ml-2 text-lg line-through text-gray-500">${originalPrice}</span>
              <span className="ml-2 text-lg font-bold text-green-600">Save 70%!</span>
            </div>
            <p className="mb-4">This revolutionary product will change your life forever! Never forget a math equation again! This product will make passing any Gittenberger exam trivial.</p>

            <p className="hidden-costs text-sm text-gray-500 mb-4">
              *Price does not include $50 shipping, $20 handling, $15 processing, $10 existential fee, and $5 because
              we felt like it.
            </p>

            <div className="basket-sneaking mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={addWarranty}
                  onChange={(e) => setAddWarranty(e.target.checked)}
                />
                <span className="ml-2">Add premium warranty for only $29.99</span>
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Quantity:</label>
              <select className="form-select" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {[3, 5, 10, 100, 99999].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="false-scarcity mb-4 text-red-600 animate-pulse">Only 2 left in stock - order soon!</div>

            <button
              className="bg-green-500 text-white px-6 py-3 rounded text-xl font-bold hover:bg-green-600 transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="complex-pricing mt-8 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-bold mb-2">Price Breakdown</h3>
          <ul className="list-disc list-inside">
            <li>Product: ${discountedPrice}</li>
            <li>Shipping: $50.00</li>
            <li>Handling: $20.00</li>
            <li>Processing: $15.00</li>
            <li>Existential Fee: $10.00</li>
            <li>Because We Can Fee: $5.00</li>
            {addWarranty && <li>Premium Warranty: $29.99</li>}
          </ul>
          <p className="font-bold mt-2">
            Total: ${((discountedPrice + 50 + 20 + 15 + 10 + 5 + (addWarranty ? 29.99 : 0)) * quantity).toFixed(2)}
          </p>
        </div>

        <Joyride
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
        />
      </main>
      <Footer />
    </div>
  )
}

