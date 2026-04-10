"use client"

import { Truck, BadgeDollarSign, HeadphonesIcon, Package } from "lucide-react"

const differentials = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Entregamos em toda Saquarema e região com agilidade. Sua obra não pode esperar e nós sabemos disso.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preço Competitivo",
    description: "Trabalhamos com os melhores preços da região, garantindo economia sem abrir mão da qualidade.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Especializado",
    description: "Nossa equipe é treinada para ajudar você a encontrar os produtos certos para cada tipo de obra.",
  },
  {
    icon: Package,
    title: "Grande Variedade",
    description: "Estoque completo com milhares de produtos para atender todas as necessidades da sua construção.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Por que escolher a Lulemar?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Nossos Diferenciais
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/70 text-pretty">
            Há mais de 30 anos oferecemos o melhor em materiais de construção 
            com atendimento de excelência.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <item.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-accent-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
