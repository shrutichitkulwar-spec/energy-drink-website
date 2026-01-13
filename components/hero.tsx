export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-primary/20 to-background overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-pretty">
          Unleash Your <span className="text-primary">Potential</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Premium energy drinks engineered for peak performance. Maximum energy, zero compromises.
        </p>
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </section>
  )
}
