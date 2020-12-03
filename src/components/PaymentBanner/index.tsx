import React from 'react'
import { BiLock } from 'react-icons/bi'
import { FaRegCreditCard } from 'react-icons/fa'

const PaymentBanner: React.FC = () => {
  return (
    <section className="flex justify-evenly items-center w-full h-16 md:h-20 bg-pink-800">
      <div className="flex text-gray-100 text-xs md:text-base font-light leading-none items-center">
        <FaRegCreditCard size={30} color={'#e1e1e1'} />
        <div className="flex-col ml-2 md:ml-8">
          <div>
            <strong>PARCELAMENTO</strong>
          </div>
          <div className="w-16 md:w-36">
            em até<strong> 6x sem juros</strong>
          </div>
        </div>
      </div>
      <div className="flex text-gray-100 text-xs md:text-base font-light leading-tight items-center">
        <BiLock size={30} color={'#e1e1e1'} />
        <div className="flex-col ml-2 md:ml-8 md:w-56">
          <strong>COMPRA SEGURA</strong>
          <div className="xs:flex-col md:flex">
            <p>Certificado de </p>
            <p>segurança SSL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentBanner
