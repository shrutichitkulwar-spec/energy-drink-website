"use client"

import { useEffect } from "react"

export default function ProductModal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto glass-effect">
        <div className="flex items-start justify-between p-6 border-b border-border sticky top-0 bg-card/95">
          <h2 className="text-3xl font-bold text-foreground">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors float-button"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-40 h-60 bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-primary text-sm font-semibold mb-2">{product.flavor}</p>
              <p className="text-4xl font-bold text-accent mb-4">${product.price.toFixed(2)}</p>

              <p className="text-lg text-muted-foreground mb-6">{product.details}</p>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-foreground mb-3">Key Benefits:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-primary text-lg">✓</span>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onAddToCart}
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all glow-pulse float-button"
              >
                Add to Cart - ${product.price.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
