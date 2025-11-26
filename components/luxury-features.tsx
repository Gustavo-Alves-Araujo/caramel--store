"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Utensils, Award, Users, Star, Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-gold" />,
    title: "Feito na Hora",
    description:
      "Pipoca quentinha, picolé geladinho e algodão doce feito na hora, garantindo o máximo sabor e frescor para seus convidados.",
  },
  {
    icon: <Award className="h-10 w-10 text-gold" />,
    title: "Carrinhos Retrô",
    description:
      "Nossos carrinhos têm design retrô autêntico que traz nostalgia e charme para qualquer evento, criando uma experiência única.",
  },
  {
    icon: <Heart className="h-10 w-10 text-gold" />,
    title: "Sabor Autêntico",
    description:
      "Sabores tradicionais e especiais preparados com ingredientes selecionados, garantindo qualidade e sabor inesquecível.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-gold" />,
    title: "Diversão Garantida",
    description:
      "Transforme seu evento em uma experiência memorável. Nossos carrinhos são a atração que crianças e adultos adoram.",
  },
]

export default function LuxuryFeatures() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section
      className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold-light/10 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl"></div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-coffee-dark relative z-10">
              Experiência <span className="gold-text">Premium</span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient rounded-full"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-20 h-20 bg-gold-light/20 rounded-full blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-coffee-dark/90 max-w-3xl mx-auto font-lora text-xl mt-6">
              Descubra o que torna a Caramelô a escolha perfeita para trazer o sabor da nostalgia ao seu evento. Nossa
              dedicação à qualidade e ao sabor autêntico se reflete em cada detalhe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4 mt-8 flex-wrap"
          >
            <div className="flex items-center gap-2 bg-coffee-dark/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-gold" />
              <span className="text-coffee-dark font-medium">5/5 avaliação média</span>
            </div>
            <div className="flex items-center gap-2 bg-coffee-dark/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-coffee-dark font-medium">+200 eventos atendidos</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full bg-white backdrop-blur-sm border border-gold/20 hover:border-gold/50 transition-all duration-300 overflow-hidden rounded-xl shadow-xl">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl"></div>
                    <div className="relative bg-coffee-dark/10 w-20 h-20 rounded-full flex items-center justify-center border border-gold/30">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-coffee-dark">{feature.title}</h3>
                  <p className="text-coffee-dark/80 font-lora">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
