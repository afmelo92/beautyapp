import React, { useState } from 'react'
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import formatValue from '../../../utils/formatValue'

interface Product {
  id: number
  source: string
  title: string
  price: number
  description: string
  masc?: boolean
  fem?: boolean
}

interface ProductProps {
  product: Product
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [selectedSession, setSelectedSession] = useState(1)

  const sessions = [1, 5, 10]

  return (
    <div className="max-w-card mx-auto bg-gray-800 p-5 rounded-lg">
      <div className="flex-col">
        <div className="flex justify-center">
          <Image
            src={product.source}
            alt={product.title}
            width={273}
            height={273}
            quality={100}
          />
        </div>
        <h2 className="font-black text-gray-100 text-center mt-3">
          {product.title}
        </h2>
        <p className="font-light text-sm mt-1 text-gray-500 text-center">
          {product.description}
        </p>

        <div className="flex items-center justify-between py-3">
          <div className="flex w-14 max-w-xs justify-between">
            {product.fem && (
              <Image
                src="/feminino.png"
                alt="limpeza-de-pele-com-microdermo"
                layout="fixed"
                width={23}
                height={23}
                quality={85}
              />
            )}
          </div>
          <Listbox
            as="div"
            className="space-y-1"
            value={selectedSession}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore:next-line
            onChange={setSelectedSession}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm leading-5 font-medium text-pink-500">
                  Sessões
                </Listbox.Label>
                <div className="relative">
                  <span className="inline-block w-full rounded-md shadow-sm">
                    <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-500 bg-gray-800 text-gray-100 pl-3 pr-10 py-1 text-left focus:outline-none focus:shadow-outline-blue focus:border-pink-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                      <span className="block truncate">{selectedSession}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                  </span>

                  <Transition
                    show={open}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute mt-1 w-full rounded-md bg-gray-900 text-white shadow-lg"
                  >
                    <Listbox.Options
                      static
                      className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                    >
                      {sessions.map(session => (
                        <Listbox.Option key={session} value={session}>
                          {({ selected, active }) => (
                            <div
                              className={`${
                                active
                                  ? 'text-white bg-pink-600'
                                  : 'text-gray-500'
                              } cursor-default select-none relative py-2 pl-8`}
                            >
                              <span
                                className={`${
                                  selected ? 'font-semibold' : 'font-normal'
                                } block truncate`}
                              >
                                {session}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? 'text-white' : 'text-pink-600'
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div>
          <h4 className="text-lg font-medium line-through text-gray-100 mb-1">
            {formatValue(product.price)}
          </h4>
          <h1 className="text-3xl font-extrabold text-gray-100">
            {formatValue(product.price)}
          </h1>
          <p className="text-sm text-gray-400">
            <strong>6x </strong>de{' '}
            <strong>{formatValue(product.price / 6)}</strong> sem juros
          </p>
        </div>
        <button className="flex mx-auto mt-4 p-3 w-full bg-pink-600 hover:bg-pink-800 rounded-md font-bold text-gray-100">
          <p className="mx-auto">ADICIONAR AO CARRINHO</p>
        </button>
        <button className="flex mx-auto justify-center mt-2 p-2 w-full bg-purple-400 hover:bg-purple-600 rounded-md font-normal text-xs text-gray-100">
          <div>
            <p>AVALIAÇÃO ONLINE GRATUITA</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
