"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5522999999999?text=Olá! Gostaria de mais informações sobre os produtos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Chamar no WhatsApp</span>
    </a>
  )
}
