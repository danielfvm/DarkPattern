"use client"

import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import {CountdownTimer} from "../../components/CountdownTimer"
import {useCart} from "../../contexts/CartContext"
import Joyride from "react-joyride"

export default function CartPage() {
  const {cart, removeFromCart, clearCart} = useCart()

  const steps = [
    {
      target: ".hidden-costs",
      title: "Hidden Costs",
      content: "Concealing or obscuring additional fees, charges, or conditions until late in the purchasing process.",
    },
    {
      target: ".forced-continuity",
      title: "Forced Continuity",
      content: "Automatically enrolling users in ongoing paid subscriptions or services after a free trial or initial purchase.",
    },
  ];

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 50
  const handling = 20
  const processing = 15
  const existentialFee = 10
  const becauseWeCanFee = 5
  const total = subtotal + shipping + handling + processing + existentialFee + becauseWeCanFee

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        <CountdownTimer />

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <table className="w-full mb-8">
              <thead>
                <tr>
                  <th className="text-left">Product</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="hidden-costs mb-8">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Handling:</span>
                <span>${handling.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Processing:</span>
                <span>${processing.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Existential Fee:</span>
                <span>${existentialFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Because We Can Fee:</span>
                <span>${becauseWeCanFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-6 py-3 rounded text-xl font-bold hover:bg-green-600">
                Proceed to Checkout*
              </button>
            </div>
            <p className="forced-continuity text-xs mt-2">*By proceeding, you agree to our monthly subscription service.</p>
          </div>
        )}

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

