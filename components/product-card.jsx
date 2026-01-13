"use client"

export default function ProductCard({ product, onSelect, onAddToCart }) {
  return (
    <div
      onClick={onSelect}
      className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
    >
      <div className="relative overflow-hidden h-64 bg-secondary flex items-center justify-center">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-primary text-sm font-semibold mb-1">{product.flavor}</p>
        <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent">${product.price.toFixed(2)}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart()
            }}
            className="px-3 py-2 bg-primary text-primary-foreground rounded font-bold text-sm hover:bg-accent hover:text-accent-foreground transition-all float-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
