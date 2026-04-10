import Link from "next/link"
import { Phone, Mail, MapPin,  } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="inline-block">
              <span className="text-2xl font-bold tracking-tight font-serif">
                LULEMAR
              </span>
            </Link>
            <p className="mt-4 text-accent-foreground/70 leading-relaxed">
              Tradição e qualidade em materiais de construção desde 1992. 
              Tudo para sua obra em um só lugar.
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
           
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
             
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Produtos</h3>
            <ul className="space-y-3">
              <li className="text-accent-foreground/70">Cimento e Areia</li>
              <li className="text-accent-foreground/70">Materiais Elétricos</li>
              <li className="text-accent-foreground/70">Materiais Hidráulicos</li>
              <li className="text-accent-foreground/70">Ferramentas</li>
              <li className="text-accent-foreground/70">Acabamentos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-accent-foreground">(22) 2651-1234</p>
                  <p className="text-accent-foreground/70 text-sm">(22) 99999-9999</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-accent-foreground/70">contato@lulemar.com.br</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-accent-foreground/70">
                  Rua Exemplo, 123 - Centro<br />
                  Saquarema - RJ, 28990-000
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-accent-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Lulemar Materiais de Construção. Todos os direitos reservados.
          </p>
          <p className="text-accent-foreground/40 text-sm">
            Desenvolvido com dedicação para nossos clientes
          </p>
        </div>
      </div>
    </footer>
  )
}
