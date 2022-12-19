import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 bg-neutral-100">
      <div className="container flex items-center justify-between w-full">
        <p className="text-xs leading-5 text-gray-600">
          Copyright 2022 Todos os direitos reservados
        </p>

        <p className="flex gap-1 text-xs leading-5 text-gray-600">
          Made with 💜 by
          <Link
            target="_blank"
            href="https://github.com/matheusbrauna"
            className="hover:underline"
          >
            Matheus Braúna
          </Link>
        </p>
      </div>
    </footer>
  )
}
