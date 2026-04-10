"use client"

import { 
  Blocks, 
  Zap, 
  Droplets, 
  Wrench, 
  Paintbrush,
  HardHat,
  ArrowRight
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Blocks,
    title: "Cimento e Areia",
    description: "Cimento CP-II, CP-III, areia fina, areia grossa, pedra brita e argamassas de qualidade.",
    items: ["Cimento todas as marcas", "Areia fina e grossa", "Pedra brita", "Argamassas"]
  },
  {
    icon: Zap,
    title: "Materiais Elétricos",
    description: "Fios, cabos, disjuntores, tomadas, interruptores e toda linha elétrica.",
    items: ["Fios e cabos", "Disjuntores", "Tomadas e interruptores", "Quadros elétricos"]
  },
  {
    icon: Droplets,
    title: "Materiais Hidráulicos",
    description: "Tubos, conexões, registros, caixas d'água e acessórios para instalações.",
    items: ["Tubos PVC", "Conexões", "Registros", "Caixas d'água"]
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    description: "Ferramentas manuais e elétricas das melhores marcas do mercado.",
    items: ["Ferramentas manuais", "Ferramentas elétricas", "Equipamentos de segurança", "Escadas"]
  },
  {
    icon: Paintbrush,
    title: "Acabamentos",
    description: "Tintas, pisos, revestimentos, portas, janelas e materiais de acabamento.",
    items: ["Tintas e vernizes", "Pisos e revestimentos", "Portas e janelas", "Louças sanitárias"]
  },
  {
    icon: HardHat,
    title: "Equipamentos",
    description: "EPIs, equipamentos de segurança e ferramentas para profissionais.",
    items: ["EPIs completos", "Capacetes", "Luvas e botas", "Óculos de proteção"]
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Nossos Produtos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Tudo o que você precisa para construir
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade 
            e durabilidade em todos os produtos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <product.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-serif">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
