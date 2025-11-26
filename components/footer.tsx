"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-cream text-coffee-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Logo variant="gold" size="md" />
            <p className="text-coffee-dark/80 mt-4 max-w-xs">
              O sabor da nostalgia em cada evento. Carrinhos de pipoca retrô, picolé artesanal e algodão doce para transformar sua festa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/eleve.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-gold font-playfair text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("products")
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="#story"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("story")
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    // Find the heading with the text "O que Dizem Nossos Clientes"
                    const headings = document.querySelectorAll("h2")
                    let testimonialsSection = null

                    for (const heading of headings) {
                      if (heading.textContent.includes("O que Dizem Nossos Clientes")) {
                        // Find the parent section of this heading
                        testimonialsSection = heading.closest("section")
                        break
                      }
                    }

                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: "smooth", block: "start" })
                      // Add a highlight effect to make it more noticeable
                      testimonialsSection.classList.add("highlight-section")
                      setTimeout(() => {
                        testimonialsSection.classList.remove("highlight-section")
                      }, 2000)
                    }
                  }}
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-gold font-playfair text-xl mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#products"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const productsSection = document.getElementById("products")
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  Carrinho de Pipoca
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const productsSection = document.getElementById("products")
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  Carrinho de Picolé
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-coffee-dark/80 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const productsSection = document.getElementById("products")
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  Algodão Doce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-gold font-playfair text-xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-gold mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-coffee-dark/80">São Paulo, Rio de Janeiro e Belo Horizonte</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold mr-2 h-5 w-5 flex-shrink-0" />
                <a href="tel:+5521965913009" className="text-coffee-dark/80 hover:text-gold transition-colors">
                  (21) 96591-3009
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-2 h-5 w-5 flex-shrink-0" />
                <a href="mailto:contato@caramelo.com" className="text-coffee-dark/80 hover:text-gold transition-colors">
                  contato@caramelo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-light/20 mt-12 pt-8 text-center text-coffee-dark/60 text-sm">
          <p>© {new Date().getFullYear()} Caramelô. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
