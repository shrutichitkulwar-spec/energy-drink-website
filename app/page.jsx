"use client"

import { useState } from "react"
import Header from "@/components/header"
import AnimatedHero from "@/components/animated-hero"
import USPSection from "@/components/usp-section"
import ProductShowcase from "@/components/product-showcase"
import Cart from "@/components/cart"
import Footer from "@/components/footer"

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      {isCartOpen && <Cart items={cartItems} onRemove={removeFromCart} />}
      <AnimatedHero />
      <USPSection />
      <ProductShowcase onAddToCart={addToCart} />
      <Footer />
    </div>
  )
}
