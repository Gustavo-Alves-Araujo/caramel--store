export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  images?: string[] // Array de imagens adicionais para galeria
  category: string
  badge?: string
  slug: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Carrinho de Pipoca",
    description: "Carrinho de pipoca retrô para eventos. Pipoca quentinha e saborosa feita na hora, com sabores tradicionais e especiais. Ideal para festas, eventos corporativos e celebrações.",
    price: 0,
    image: "/images/image copy 4.png",
    images: ["/images/image copy 4.png"],
    category: "Carrinhos",
    badge: "MAIS PEDIDO",
    slug: "carrinho-de-pipoca",
    featured: true,
  },
  {
    id: 2,
    name: "Carrinho de Sorvete",
    description: "Carrinho de sorvete artesanal para eventos. Variedade de sabores deliciosos e refrescantes. Perfeito para alegrar qualquer ocasião com o sabor da nostalgia.",
    price: 0,
    image: "/images/image copy 6.png",
    images: ["/images/image copy 6.png"],
    category: "Carrinhos",
    slug: "carrinho-de-sorvete",
    featured: true,
  },
  {
    id: 3,
    name: "Algodão Doce",
    description: "Máquina de algodão doce para eventos. Algodão doce artesanal feito na hora, com cores vibrantes e sabores irresistíveis. A diversão garantida para crianças e adultos.",
    price: 0,
    image: "/images/image copy 2.png",
    images: ["/images/image copy 2.png"],
    category: "Carrinhos",
    slug: "algodao-doce",
    featured: true,
  },
  {
    id: 4,
    name: "Carrinho de Crepe",
    description: "Carrinho de crepe suíço para eventos. Crepes deliciosos feitos na hora com recheios variados e sabores irresistíveis. Perfeito para adicionar um toque especial ao seu evento.",
    price: 0,
    image: "/images/image copy 5.png",
    images: ["/images/image copy 5.png"],
    category: "Carrinhos",
    slug: "carrinho-de-crepe",
    featured: true,
  },
]

export const categories = [
  { id: "all", name: "Todas" },
  { id: "carrinhos", name: "Carrinhos" },
]

export type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

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
