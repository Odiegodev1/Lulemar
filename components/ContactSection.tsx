"use client"

import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(22) 2651-1234",
    subinfo: "(22) 99999-9999",
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua Exemplo, 123 - Centro",
    subinfo: "Saquarema - RJ, 28990-000",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    info: "Seg a Sex: 7h às 18h",
    subinfo: "Sáb: 7h às 13h",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Entre em Contato
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Estamos prontos para atender você
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Visite nossa loja ou entre em contato pelos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground">{item.info}</p>
                    <p className="text-muted-foreground text-sm">{item.subinfo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Button 
              size="lg" 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              asChild
            >
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29406.07647379534!2d-42.51821997436524!3d-22.920177699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97866f0e4f5a35%3A0x7b8c7b5fa0c6c3c0!2sSaquarema%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lulemar"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
