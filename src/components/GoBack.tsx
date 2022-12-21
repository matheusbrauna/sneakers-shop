import { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'

export function GoBack() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      <ArrowLeft size={32} />
    </button>
  )
}
