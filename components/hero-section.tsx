"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/cta.jpg"
          alt="Construção em andamento"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <p className="text-white font-medium text-sm tracking-widest uppercase mb-4">
            Desde 1992 em Saquarema - RJ
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Tudo para sua construção
            <br />
            <span className="text-white">em um só lugar</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Materiais de qualidade, preços competitivos e atendimento especializado para 
            realizar o sonho da sua obra com segurança e confiança.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale no WhatsApp
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-zinc-700 hover:bg-white hover:text-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="#produtos">
                Ver Produtos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#sobre" aria-label="Rolar para baixo">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </a>
      </div>
    </section>
  )
}
