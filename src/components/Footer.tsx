import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <>
      <div className="h-[325px] bg-[url('../assets/socialbg.png')] bg-no-repeat bg-cover bg-center mt-16 grid  gap-3 place-content-center">
        <h2 className="text-2xl font-bold leading-8 text-center text-white">
          Social media
        </h2>

        <p className="text-sm leading-5 text-center text-gray-600">
          Siga-nos nas redes sociais, não perca as oportunidades
        </p>

        <div className="flex gap-5 justify-self-center">
          <TwitterLogo weight="fill" size={24} className="text-white" />
          <FacebookLogo weight="fill" size={24} className="text-white" />
          <InstagramLogo weight="regular" size={24} className="text-white" />
        </div>
      </div>

      <div className="flex items-center justify-center bg-yellow-300 py-14 gap-14">
        <h2 className="text-2xl font-bold leading-8">
          INSCREVA-SE E GANHE 35% DE DESCONTO AGORA!
        </h2>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <input
              type="text"
              className="h-12 w-[419px] px-3 bg-white border border-gray-900 placeholder:text-xs placeholder:leading-5 placeholder:text-gray-600 focus:outline-none"
              placeholder="Endereço de E-mail"
            />

            <button
              type="button"
              className="h-12 px-4 py-2 text-white bg-black"
            >
              ENVIAR
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="checkTerms" />
            <label htmlFor="checkTerms" className="text-xs leading-5">
              Li e aceito os Termos e Condições, a Política de Privacidade e o
              Documento de Divulgação de Dados Pessoais da ikas.
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
