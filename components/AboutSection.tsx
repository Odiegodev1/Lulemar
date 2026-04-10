"use client"

import Image from "next/image"
import { Building2, Users, Award, Clock } from "lucide-react"

const stats = [
  { icon: Clock, value: "32+", label: "Anos de experiência" },
  { icon: Users, value: "10.000+", label: "Clientes atendidos" },
  { icon: Building2, value: "5.000+", label: "Obras realizadas" },
  { icon: Award, value: "100%", label: "Compromisso" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/135.JPG"
                alt="Interior da loja Lulemar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 md:block hidden -right-6 bg-blue-500 text-primary-foreground p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold font-serif">1992</p>
              <p className="text-sm">Desde</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-red-500 font-medium text-sm tracking-widest uppercase mb-4">
              Nossa História
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Tradição e confiança em materiais de construção
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Fundada em 1992, a <strong className="text-foreground">Lulemar Materiais de Construção</strong> nasceu 
                com o propósito de oferecer aos moradores de Saquarema e região os melhores 
                materiais para construção e reforma.
              </p>
              <p className="text-lg leading-relaxed">
                Com mais de três décadas de experiência no mercado, construímos nossa reputação 
                baseada em <strong className="text-foreground">qualidade, preço justo e atendimento personalizado</strong>. 
                Nossa equipe está sempre pronta para auxiliar você a encontrar exatamente o que 
                precisa para sua obra.
              </p>
              <p className="text-lg leading-relaxed">
                Seja uma pequena reforma ou uma grande construção, na Lulemar você encontra 
                tudo em um só lugar, com a garantia de quem entende do assunto.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <p className="text-3xl lg:text-4xl font-bold font-serif text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
