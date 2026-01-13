"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import ProductModal from "./product-modal"

export default function ProductShowcase({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: "APEX ORIGINAL",
      flavor: "Classic Thunder",
      price: 3.99,
      image: "/red-energy-drink-can-original-flavor.jpg",
      description: "Our signature blend with intense citrus notes and powerful energy boost",
      details:
        "The classic that started it all. Packed with natural caffeine, taurine, and B-vitamins for explosive energy and mental clarity.",
      benefits: ["250mg Natural Caffeine", "Zero Sugar", "8-Hour Energy", "Mood Enhancement"],
    },
    {
      id: 2,
      name: "APEX SURGE",
      flavor: "Tropical Fire",
      price: 4.49,
      image: "/orange-tropical-energy-drink-can.jpg",
      description: "Tropical explosion with maximum performance formula",
      details:
        "Our most powerful formula. Extra-strength energy with tropical flavors and advanced performance blend for athletes.",
      benefits: ["350mg Natural Caffeine", "Performance Blend", "Electrolytes", "Muscle Support"],
    },
    {
      id: 3,
      name: "APEX FOCUS",
      flavor: "Berry Rush",
      price: 3.99,
      image: "/berry-energy-drink-can-focus.jpg",
      description: "Mental clarity with berry goodness",
      details:
        "Designed for concentration and mental performance. Berry blend with nootropics for enhanced focus and productivity.",
      benefits: ["200mg Caffeine", "Nootropics", "Antioxidants", "Mental Clarity"],
    },
    {
      id: 4,
      name: "APEX HYDRO",
      flavor: "Electro Blue",
      price: 4.99,
      image: "/blue-electrolyte-energy-drink-hydration.jpg",
      description: "Ultimate hydration with electrolyte power",
      details:
        "Complete hydration system with energy. Packed with electrolytes, coconut water extract, and sustained energy release.",
      benefits: ["Electrolyte Rich", "Hydration Optimized", "Endurance Blend", "Recovery Support"],
    },
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Our <span className="text-gradient">Product Line</span>
          </h2>
          <p className="text-xl text-muted-foreground">Choose your perfect energy blend</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => setSelectedProduct(product)}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => {
            onAddToCart(selectedProduct)
            setSelectedProduct(null)
          }}
        />
      )}
    </section>
  )
}
