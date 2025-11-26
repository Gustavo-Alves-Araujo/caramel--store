"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import type { Testimonial } from "@/types"

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Organizadora de Eventos",
    content:
      "O carrinho de pipoca da Caramelô foi o sucesso da nossa festa! A pipoca estava quentinha, saborosa e o carrinho retrô deu um charme especial ao evento. Todos os convidados adoraram!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor de Eventos",
    content:
      "Contratamos o carrinho de picolé para nosso evento corporativo e foi um sucesso absoluto. A variedade de sabores e a apresentação encantaram todos. Definitivamente vamos contratar novamente!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Coordenadora de Festas",
    content:
      "O algodão doce da Caramelô foi a sensação da festa das crianças! Feito na hora, com cores vibrantes e sabor delicioso. O atendimento foi impecável e super pontual. Recomendo muito!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden" ref={containerRef}>
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-coffee-dark/5 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold-light/10 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-coffee-light/10 blur-3xl"></div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-coffee-dark relative z-10">
              O que <span className="text-gold-dark">Dizem</span> Nossos Clientes
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient rounded-full"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-20 h-20 bg-gold-light/20 rounded-full blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground max-w-3xl mx-auto font-lora text-xl mt-6">
              A opinião de quem já contratou nossos carrinhos para seus eventos é o melhor testemunho da qualidade e
              diversão que oferecemos. Veja o que nossos clientes têm a dizer sobre nossa dedicação e excelência.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-none shadow-xl bg-white group hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-xl">
                <CardContent className="p-8 relative">
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="h-24 w-24 text-gold rotate-180" />
                  </div>

                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-gold text-gold" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-8 italic font-lora text-lg relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <h4 className="font-bold text-lg text-coffee-dark">{testimonial.name}</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-coffee-dark/5 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-coffee-dark/80 font-lora text-lg max-w-2xl">
              Junte-se aos nossos clientes satisfeitos e descubra por que somos a escolha preferida para trazer o sabor
              da nostalgia e a diversão para seus eventos. Transforme sua festa em uma experiência inesquecível.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
