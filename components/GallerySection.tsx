"use client"

import { span } from "framer-motion/client"
import Image from "next/image"

const galleryImages = [
  { src: "/h/119.JPG", alt: "Festa de 20 anos com banda", span:2 },
  { src: "/h/091.JPG", alt: "Crianças na festa de aniversário", span:1 },
  { src: "/h/023.JPG", alt: "Nossa equipe com as crianças", span:1 },
  { src: "/h/3.png", alt: "Equipe unida no balcão", span:1 },
  { src: "/h/2.png", alt: "Clientes satisfeitos", span:1 },
  { src: "/h/034.JPG", alt: "Atendimento personalizado", span:1 },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Nossa Estrutura
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Conheça Nossa Loja
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Um espaço amplo e organizado para você encontrar tudo o que precisa 
            com facilidade e conforto.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
