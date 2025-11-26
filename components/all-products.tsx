"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { products, categories } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X, Tag, Utensils, Package, Cake, ChevronRight, Sparkles } from "lucide-react"

export default function AllProducts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOption, setSortOption] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Ícones para categorias
  const categoryIcons = {
    all: <Tag className="h-5 w-5" />,
    "carrinhos": <Utensils className="h-5 w-5" />,
  }

  // Filtrar e ordenar produtos
  useEffect(() => {
    let result = [...products]

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      const categoryName = categories.find((cat) => cat.id === selectedCategory)?.name
      result = result.filter((product) => product.category.toLowerCase() === categoryName?.toLowerCase())
    }

    // Filtrar por pesquisa
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Ordenar produtos
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    setFilteredProducts(result)
  }, [searchQuery, selectedCategory, sortOption])

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="products" className="py-24 bg-gradient-to-b from-white to-cream relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cream/50 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gold-light/10 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-coffee-light/10 blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-60 h-60 rounded-full bg-gold/5 blur-3xl"></div>

      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16 opacity-15"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Sparkles className="w-full h-full text-gold" />
      </motion.div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-coffee-dark relative z-10">
              Escolha seu <span className="text-gold-dark">Carrinho</span>
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
              Escolha entre nossos carrinhos retrô e transforme seu evento em uma experiência única. Entre em contato hoje mesmo para solicitar seu orçamento personalizado.
            </p>
          </motion.div>
        </div>


        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-cream rounded-3xl shadow-2xl border border-gold/20 w-full max-w-4xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-coffee-dark mb-6 relative inline-block">
                Transforme seu Evento
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-gradient rounded-full"></div>
              </h3>

              <p className="text-coffee-dark/80 font-lora text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Quer combinar mais de um carrinho ou tem alguma necessidade específica? Entre em contato conosco para criar um pacote personalizado
                que atenda perfeitamente às necessidades do seu evento.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-gold hover:bg-gold/90 text-coffee-dark font-medium text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto shadow-lg"
                  onClick={() => window.open("https://wa.me/5521959017485?text=Olá! Gostaria de solicitar um orçamento personalizado para meu evento", "_blank")}
                >
                  <span className="text-center">Solicitar Orçamento Personalizado</span>
                  <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
