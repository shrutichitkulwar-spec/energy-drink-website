"use client"

export default function Cart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-card border-l border-border shadow-2xl z-40 flex flex-col slide-in-up">
      <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur">
        <h2 className="text-2xl font-bold text-gradient">Shopping Cart</h2>
        <span className="text-muted-foreground font-bold">({items.length})</span>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground py-8 text-lg">Your cart is empty</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-4 flex items-center justify-between hover:bg-secondary/80 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-bold text-foreground">{item.name}</h4>
                <p className="text-primary text-sm font-semibold">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => onRemove(index)}
                className="ml-2 px-3 py-2 bg-destructive text-destructive-foreground rounded-lg text-sm hover:opacity-80 transition-opacity font-bold"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t border-border p-6 space-y-4 bg-card/95 backdrop-blur">
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-accent text-2xl">${total.toFixed(2)}</span>
          </div>
          <button className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-accent hover:text-accent-foreground transition-all glow-pulse">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}
