"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/logo";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Variantes para animações
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const floatingArrow = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -30, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-coffee-dark"
      ref={containerRef}
    >
      {/* Imagem de fundo fixa */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0"
          style={{
            y,
            scale,
          }}
        >
          <Image
            src="/images/fundo.png"
            alt={`Caramelô - Carrinho de pipoca retrô`}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        {/* Overlay verde escuro uniforme para escurecer a imagem e dar tom levemente verde */}
        <div className="absolute inset-0 bg-coffee-dark/70"></div>
        {/* Overlay verde sutil para dar o tom característico */}
        <div className="absolute inset-0 bg-[#0D3026]/40 mix-blend-multiply"></div>
      </div>

      <motion.div className="container relative z-20 px-4" style={{ opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo animado acima do título - oculto no mobile */}
          <motion.div
            className="hidden md:flex justify-center mb-8"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <Logo variant="gold" size="lg" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">O Sabor da </span>
            <span className="text-gold font-bold relative inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Nostalgia
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-lora leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            Carrinhos de pipoca retrô, picolé artesanal e algodão doce para seus
            eventos. Transforme sua festa em uma experiência única e memorável
            com o sabor da nostalgia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            {/* CTA Secundária - Botão Fantasma */}
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button
                variant="outline"
                className="border-2 border-white/80 text-white bg-white/5 
                 hover:bg-white/15 hover:border-white
                 font-medium px-8 py-6 rounded-full shadow-lg 
                 shadow-black/30 h-auto transition-all hover:scale-[1.05]
                 backdrop-blur-sm text-base md:text-lg"
                onClick={scrollToFeatured}
              >
                Nossos Carrinhos
              </Button>
            </motion.div>

            {/* CTA Primária - Destaque */}
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button
                className="bg-gold hover:bg-gold/90 text-coffee-dark 
                 font-bold px-10 py-7 rounded-full shadow-2xl 
                 shadow-gold/40 h-auto transition-all hover:scale-[1.05]
                 text-lg md:text-xl"
                onClick={scrollToProducts}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Elementos decorativos sutis que complementam a iluminação natural */}
      <motion.div
        className="absolute top-20 left-8 opacity-10 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-24 h-24 border border-gold/50 rounded-full blur-sm"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 z-20 flex justify-center"
        initial="initial"
        animate="animate"
        variants={floatingArrow}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-white/90 hover:text-gold hover:bg-white/10 backdrop-blur-sm rounded-full"
          onClick={scrollToFeatured}
        >
          <ChevronDown className="h-8 w-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
          <span className="sr-only">Rolar para baixo</span>
        </Button>
      </motion.div>

      {/* Gradiente inferior sutil para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-coffee-dark/50 via-coffee-dark/20 to-transparent z-10" />
    </section>
  );
}
