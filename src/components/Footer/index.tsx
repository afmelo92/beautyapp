import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-100 bg-pink-600 flex-col flex-1 mx-auto w-full pt-8">
      <div className="flex justify-center lg:w-0 lg:flex-1">
        <a href="#">
          <span className="sr-only">BeautyApp</span>
          <img
            className="h-8 w-auto sm:h-10 mb-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="BEAUTYAPP"
          />
        </a>
      </div>
      <strong>BEAUTY APP</strong>
      <p className="text-xs mt-4">
        <strong>CNPJ:</strong> 17.777.777/0001-77
      </p>
      <section className="md:flex md:justify-evenly pb-10">
        <section className="text-left pl-8 mt-10">
          <h1 className="text-3xl underline font-bold mb-4">Links Úteis</h1>
          <ul className="font-light leading-8 md:leading-5">
            <li>
              <a href="">Sobre nós</a>
            </li>

            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Minha Conta</a>
            </li>
            <li>
              <a href="">Meus Pedidos</a>
            </li>
            <li>
              <a href="">Entregas e devoluções</a>
            </li>
            <li>
              <a href="">Procedimentos de Compra</a>
            </li>
            <li>
              <a href="">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="">Vale Presente</a>
            </li>
            <li>
              <a href="">Corporativo</a>
            </li>
          </ul>
        </section>
        <section className="text-left px-8 mt-10">
          <h1 className="text-3xl underline font-bold mb-4">
            Entre em contato
          </h1>
          <div className="mb-4">
            <strong className="text-xl">(11) 9 8888-9999</strong>
            <p className="font-light text-sm">São Paulo, Capital</p>
          </div>
          <div className="pb-8">
            <strong className="text-xl">0800 888 9999</strong>
            <p className="font-light text-sm">Demais Regiões</p>
          </div>
        </section>

        <section className="text-left px-8 mt-10">
          <h1 className="text-xl font-bold mb-10">contato@beautyapp.com</h1>
          <h1 className="text-xl font-bold">Segunda à Sexta</h1>
          <p>08h - 20h</p>
          <h1 className="text-xl font-bold mt-4">Sábado</h1>
          <p>08h - 14h</p>
        </section>
        <section className="text-left px-8 mt-10 pb-10">
          <h1 className="text-3xl underline font-bold mb-4">Social</h1>
          <div className="flex">
            <a href="">
              <FaFacebook size={30} style={{ marginRight: 10 }} />
            </a>
            <a href="">
              <FaInstagram size={30} style={{ marginRight: 10 }} />
            </a>
            <a href="">
              <FaYoutube size={30} />
            </a>
          </div>
        </section>
      </section>
      <section className="text-left px-8 mt-10 pb-4 md:text-center">
        <h1>AFMELO ENTERPRISES - {new Date().getFullYear()}</h1>
        <h3>Todos os direitos reservados</h3>
      </section>
    </footer>
  )
}

export default Footer
