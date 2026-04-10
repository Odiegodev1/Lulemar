"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#historia", label: "História" },
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Lulemar Materiais de Construção"
                width={250}
                height={250}
                className="object-contain"
                />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-zinc-400 ${
                  isScrolled ? "text-zinc-400" : "text-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-primary-foreground">
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Fale Conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
