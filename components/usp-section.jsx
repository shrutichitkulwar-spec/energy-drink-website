"use client"

export default function USPSection() {
  const usps = [
    {
      id: 1,
      icon: "🌿",
      title: "Natural Ingredients",
      description: "Crafted with pure, natural ingredients. No artificial additives or harmful chemicals.",
      details: "100% natural caffeine from guarana and green tea extract for sustained energy",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Long-Lasting Energy",
      description: "Experience sustained energy for up to 8 hours without the crash.",
      details: "Advanced amino acid blend provides consistent performance throughout the day",
    },
    {
      id: 3,
      icon: "🏆",
      title: "Performance Focus",
      description: "Scientifically formulated to enhance mental clarity and physical endurance.",
      details: "Contains L-theanine, B-vitamins, and taurine for optimal performance",
    },
  ]

  return (
    <section id="usp" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Why Choose <span className="text-gradient">APEX ENERGY</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium energy engineered for champions who demand excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div
              key={usp.id}
              className="glass-effect rounded-xl p-8 hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl mb-4">{usp.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{usp.title}</h3>
              <p className="text-muted-foreground mb-4">{usp.description}</p>
              <div className="pt-4 border-t border-border/50 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {usp.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
