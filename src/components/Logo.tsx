import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-black uppercase md:text-3xl text-neutral-900">
        Sneakers Shop
      </h1>
    </Link>
  )
}
