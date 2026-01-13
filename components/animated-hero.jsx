"use client"

import { useEffect, useState } from "react"

export default function AnimatedHero() {
  const [floatingTexts, setFloatingTexts] = useState([])

  useEffect(() => {
    const generateFloatingText = () => {
      const newText = {
        id: Date.now(),
        left: Math.random() * 80 + 10,
      }
      setFloatingTexts((prev) => [...prev, newText])

      setTimeout(() => {
        setFloatingTexts((prev) => prev.filter((t) => t.id !== newText.id))
      }, 2000)
    }

    const interval = setInterval(generateFloatingText, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Animated background bottles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 opacity-10 float-bottle">
          <svg width="120" height="300" viewBox="0 0 40 120" className="w-24 h-60">
            <rect x="8" y="10" width="24" height="80" rx="4" fill="currentColor" className="text-primary" />
            <circle cx="20" cy="5" r="8" fill="currentColor" className="text-accent" />
          </svg>
        </div>
        <div className="absolute right-10 bottom-20 opacity-10 float-bottle" style={{ animationDelay: "1s" }}>
          <svg width="120" height="300" viewBox="0 0 40 120" className="w-24 h-60">
            <rect x="8" y="10" width="24" height="80" rx="4" fill="currentColor" className="text-primary" />
            <circle cx="20" cy="5" r="8" fill="currentColor" className="text-accent" />
          </svg>
        </div>
      </div>

      {/* Floating brand text overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingTexts.map((text) => (
          <div
            key={text.id}
            className="absolute float-brand text-2xl font-bold text-primary/80"
            style={{
              left: `${text.left}%`,
              bottom: "20%",
            }}
          >
            APEX ENERGY
          </div>
        ))}
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 slide-in-up">
            <span className="text-gradient">APEX</span>
            <br />
            <span className="text-foreground">ENERGY</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6 slide-in-up" style={{ animationDelay: "0.2s" }}>
          Unleash Your Ultimate Potential
        </p>

        <p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Experience premium energy with natural ingredients designed for sustained performance. Feel the difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#products"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all glow-pulse float-button"
          >
            Explore Products
          </a>
          <a
            href="#usp"
            className="px-8 py-4 bg-card border border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all float-button"
            style={{ animationDelay: "0.2s" }}
          >
            Learn More
          </a>
        </div>

        {/* Animated bottle illustration */}
        <div className="mt-16 flex justify-center">
          <div className="float-bottle">
            <svg width="200" height="300" viewBox="0 0 40 120" className="w-32 h-96">
              <defs>
                <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#ff4d00", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ff6b35", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="20" cy="8" r="6" fill="url(#bottleGradient)" />
              <rect x="6" y="14" width="28" height="4" rx="2" fill="url(#bottleGradient)" />
              <rect x="8" y="18" width="24" height="70" rx="6" fill="url(#bottleGradient)" opacity="0.9" />
              <rect x="10" y="25" width="20" height="55" rx="4" fill="url(#bottleGradient)" opacity="0.5" />
              <path d="M 12 88 Q 12 95 14 100 L 26 100 Q 28 95 28 88" fill="url(#bottleGradient)" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
