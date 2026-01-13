"use client"

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-black text-gradient">APEX</div>
          <div>
            <div className="text-xs font-bold text-muted-foreground tracking-widest">ENERGY</div>
            <div className="text-xs text-primary font-bold">UNLEASH POWER</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-foreground hover:text-primary transition-colors font-semibold">
            Products
          </a>
          <a href="#usp" className="text-foreground hover:text-primary transition-colors font-semibold">
            Why APEX
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-semibold">
            Contact
          </a>
        </nav>

        <button
          onClick={onCartClick}
          className="relative p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all float-button"
        >
          <span className="text-2xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-black rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
