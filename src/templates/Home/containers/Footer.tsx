import Link from 'next/link'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="py-16 mt-8 bg-center bg-no-repeat bg-cover bg-social-img">
      <div className="container flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold leading-8 text-center text-white">
          Social media
        </h2>

        <p className="text-sm leading-5 text-center text-gray-600">
          Siga-nos nas redes sociais, não perca as oportunidades
        </p>

        <div className="flex gap-5">
          <TwitterLogo weight="fill" size={24} className="text-white" />
          <FacebookLogo weight="fill" size={24} className="text-white" />
          <InstagramLogo weight="regular" size={24} className="text-white" />
        </div>

        <p className="text-xs leading-5 text-center text-gray-600">
          Made with 💜 by
          <Link
            target="_blank"
            href="https://github.com/matheusbrauna"
            className="ml-1 hover:underline"
          >
            Matheus Braúna
          </Link>
        </p>
      </div>
    </footer>
  )
}
