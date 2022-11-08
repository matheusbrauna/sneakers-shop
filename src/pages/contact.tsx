import { NextPage } from 'next'
import Head from 'next/head'
import { Envelope, MapPin } from 'phosphor-react'
import { InputWithLabel } from '../components/InputWithLabel'

type ContactProps = NextPage

export default function Contact({}: ContactProps) {
  return (
    <>
      <Head>
        <title>Contato | Sneakers Shop</title>
      </Head>

      <main>
        <div className="container flex items-center main-height">
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Entre em contato com a gente</h1>

            <ul className="grid gap-4 mt-12">
              <li className="flex items-center gap-2 font-bold text-gray-900">
                <MapPin size={24} className="text-blue-500" weight="bold" /> R.
                Amauri Souza, 346
              </li>

              <li className="flex items-center gap-2 font-bold text-gray-900">
                <Envelope size={24} className="text-blue-500" weight="bold" />{' '}
                contato@sneakers.com
              </li>
            </ul>
          </div>

          <div className="flex-1 p-10 rounded-lg bg-blue-50">
            <form>
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <Envelope size={24} className="text-blue-500" /> Preencha o
                formulário
              </h2>

              <div className="grid grid-cols-2 mt-9 gap-y-4 gap-x-8">
                <label
                  htmlFor="name"
                  className="flex flex-col gap-2 text-blue-500"
                >
                  Nome
                  <InputWithLabel
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </label>

                <label
                  htmlFor="nickname"
                  className="flex flex-col gap-2 text-blue-500"
                >
                  Sobrenome
                  <InputWithLabel
                    id="nickname"
                    type="text"
                    placeholder="John Doe"
                  />
                </label>

                <label
                  htmlFor="email"
                  className="flex flex-col gap-2 text-blue-500"
                >
                  E-mail
                  <InputWithLabel
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </label>

                <label
                  htmlFor="whatsapp"
                  className="flex flex-col gap-2 text-blue-500"
                >
                  WhatsApp
                  <InputWithLabel
                    id="whatsapp"
                    type="number"
                    placeholder="(00) 00000-0000"
                  />
                </label>

                <label
                  htmlFor="description"
                  className="flex flex-col col-span-2 gap-2 text-blue-500"
                >
                  Descrição
                  <textarea
                    id="description"
                    placeholder="Escreva aqui sua mensagem..."
                    className="w-full p-2 bg-blue-100 rounded resize-none h-36 focus:outline-2 focus:outline-blue-200"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
