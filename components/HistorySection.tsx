"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const timelineEvents = [
  {
    year: "1992",
    title: "O Começo de um Sonho",
    description: "Com muito trabalho e dedicação, a Lulemar nasceu em Saquarema. Uma pequena loja com grandes sonhos de servir a comunidade.",
    image: "/history1.png",
  },
  {
    year: "2000",
    title: "Crescimento e Expansão",
    description: "Com a confiança conquistada dos clientes, expandimos nossa estrutura e variedade de produtos. Nossa equipe cresceu e se tornou uma família.",
    image: "/h12.png",
  },
  {
    year: "2012",
    title: "20 Anos de História",
    description: "Celebramos duas décadas de tradição com uma grande festa! Banda, personagens infantis e toda a comunidade reunida. O bolo simbolizou nossa gratidão: Deus é Fiel.",
    image: "/099.jpg",
  },
  {
    year: "Hoje",
    title: "Referência em Saquarema",
    description: "Hoje somos referência na região, com estrutura moderna, equipe especializada e o mesmo compromisso com a qualidade que nos trouxe até aqui.",
    image: "/l1.png",
  },
]

const galleryImages = [
  { src: "/h/119.JPG", alt: "Festa de 20 anos com banda" },
  { src: "/h/091.JPG", alt: "Crianças na festa de aniversário" },
  { src: "/h/023.JPG", alt: "Nossa equipe com as crianças" },
  { src: "/h/3.png", alt: "Equipe unida no balcão" },
  { src: "/h/2.png", alt: "Clientes satisfeitos" },
  { src: "/h/034.JPG", alt: "Atendimento personalizado" },
]

const quotes = [
  "Mais de 30 anos construindo confiança",
  "Uma história feita com trabalho e dedicação",
  "Crescendo junto com a comunidade",
]

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    if (isInView) {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return () => clearInterval(interval)
    }
  }, [isInView, text])

  return (
    <span ref={ref} className={className}>
      {displayText}
      {isInView && displayText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block text-5xl md:text-7xl font-serif font-bold text-primary mb-4"
        >
          {event.year}
        </motion.span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          {event.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {event.description}
        </p>
      </div>

      <div className="relative w-full md:w-auto">
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10 left-1/2 -translate-x-1/2" />
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-primary/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 w-full"
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  )
}

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-8">
        Nossa Evolução
      </h3>
      <p className="text-muted-foreground text-center mb-8 text-lg">
        Arraste para comparar: de uma pequena loja a uma grande referência
      </p>
      
      <div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <Image
          src="/l1.png"
          alt="Loja atual"
          fill
          className="object-cover"
          draggable={false}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src="/h/1.png"
            alt="Início da nossa história"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-foreground" />
            <ChevronRight className="w-4 h-4 text-foreground" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          Anos 90
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          Atual
        </div>
      </div>
    </motion.div>
  )
}

function HistoryGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-8">
          Memórias que Construímos
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium px-3 py-1.5 bg-black/50 rounded-full">
                  Ver mais
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  )
}

function QuoteSection({ quote, index }: { quote: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-16 md:py-24"
    >
      <blockquote className="text-3xl md:text-5xl font-serif text-center text-foreground italic max-w-4xl mx-auto leading-relaxed">
        <TypewriterText text={`"${quote}"`} />
      </blockquote>
    </motion.div>
  )
}

export function HistorySection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="historia" ref={containerRef} className="relative overflow-hidden">
      <ScrollProgress />
      
      {/* Hero da seção */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <Image
            src="/192.jpg"
            alt="Nossa História"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-blue-500 font-medium tracking-wider uppercase mb-4"
          >
            Desde 1992
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Nossa História
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Uma jornada de mais de três décadas construindo sonhos junto com você
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Citação 1 */}
      <div className="bg-muted px-4">
        <QuoteSection quote={quotes[0]} index={0} />
      </div>

      {/* Antes e Depois */}
      <div className="py-20 md:py-32 px-4 bg-background">
        <BeforeAfterSlider />
      </div>

      {/* Citação 2 */}
      <div className="bg-muted px-4">
        <QuoteSection quote={quotes[1]} index={1} />
      </div>

      {/* Galeria */}
      <div className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <HistoryGallery />
        </div>
      </div>

      {/* Citação final */}
      <div className="bg-primary px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 md:py-32 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            {quotes[2]}
          </h3>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Obrigado por fazer parte da nossa história. Juntos, construímos muito mais do que edificações — construímos relacionamentos que duram gerações.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Faça Parte da Nossa História
          </a>
        </motion.div>
      </div>
    </section>
  )
}
