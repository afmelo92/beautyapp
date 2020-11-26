import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-100">
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
      <section className="text-left pl-8 mt-10">
        <h1 className="text-3xl text-pink-800 font-bold mb-4">Links Úteis</h1>
        <ul className="font-light leading-8">
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
        <h1 className="text-3xl text-pink-800 font-bold mb-4">
          Entre em contato
        </h1>
        <div className="mb-4">
          <strong className="text-xl">(11) 9 8888-9999</strong>
          <p className="font-light text-sm">São Paulo, Capital</p>
        </div>
        <div className="pb-4 border-b-2">
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
    </footer>
  )
}

export default Footer
