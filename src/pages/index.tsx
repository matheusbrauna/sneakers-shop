import { NextPage } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'

type HomeProps = NextPage

export default function Home({}: HomeProps) {
  return (
    <main>
      <div className="container flex gap-24 pt-16 main-height">
        <div className="relative rounded-lg overflow-hidden w-[416px] h-[400px] object-cover">
          <Image src="/sneaker.png" alt="" fill />
        </div>

        <div className="flex-1">
          <span className="text-xl font-medium text-blue-500">
            Marca do tênis
          </span>

          <h1 className="my-5 text-5xl font-bold text-gray-900">
            Nome completo do tênis
          </h1>

          <span className="text-base text-gray-900">Masculino</span>

          <p className="mt-6 mb-12 text-2xl leading-relaxed text-gray-900">
            Esses tênis de perfil baixo são o seu companheiro de roupa casual
            perfeito. Apresentando uma sola exterior de borracha durável. Eles
            irão suportar tudo o que o tempo pode oferecer.
          </p>

          <div className="flex gap-6">
            <button className="flex items-center h-16 gap-4 px-6 font-bold text-blue-500 border-2 border-blue-300 rounded-lg bg-blue-50">
              Texto do botão <ArrowRight size={24} />
            </button>
            <button className="flex items-center h-16 gap-4 px-6 font-bold text-gray-100 bg-blue-500 border-2 border-blue-500 rounded-lg">
              Texto do botão
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
