import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "gold" | "green"
  size?: "sm" | "md" | "lg"
}

export default function Logo({ variant = "gold", size = "md" }: LogoProps) {
  const logoSrc = "/images/logocaramelo.png"

  const sizes = {
    sm: { width: 80, height: 80 },
    md: { width: 120, height: 120 },
    lg: { width: 160, height: 160 },
  }

  const { width, height } = sizes[size]

  return (
    <Link href="/" className="flex items-center justify-center">
      <div className={`rounded-full overflow-hidden ${size === 'sm' ? 'w-20 h-20' : size === 'md' ? 'w-32 h-32' : 'w-40 h-40'}`}>
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt="Caramelô"
          width={width}
          height={height}
          className="w-full h-full object-cover transition-all duration-300 hover:opacity-90"
        />
      </div>
    </Link>
  )
}
