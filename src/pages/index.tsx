import React from 'react'
import Header from '../components/Header'
import LoopCarousel from '../components/Carousel/LoopCarousel'
import ProductCarousel from '../components/Carousel/ProductCarousel/index.'
import Footer from '../components/Footer'
import { GetStaticProps } from 'next'
import useSWR from 'swr'

interface Product {
  id: number
  source: string
  title: string
  price: number
  description: string
  masc?: boolean
  fem?: boolean
}

interface Treatments {
  id: number
  source: string
}

interface HomeProps {
  recommended: Product[]
  treatments: Treatments[]
}

export const getStaticProps: GetStaticProps = async () => {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const fetcher = url => fetch(url).then(res => res.json())

  const recommended = await fetcher('http://localhost:3333/recommended')
  const treatments = await fetcher('http://localhost:3333/treatments')

  return {
    props: {
      recommended,
      treatments
    },
    revalidate: 10
  }
}

const Home: React.FC<HomeProps> = ({ recommended, treatments }) => {
  const fetcher = url => fetch(url).then(res => res.json())

  const { data: recomm } = useSWR(
    'http://localhost:3333/recommended',
    fetcher,
    {
      initialData: recommended
    }
  )

  const { data: treatm } = useSWR('http://localhost:3333/treatments', fetcher, {
    initialData: treatments
  })

  return (
    <>
      <Header />
      <LoopCarousel images={treatm} />
      <div>
        <section className="flex-col flex-1 mx-auto max-w-screen-xl">
          <div className="flex-col pt-10 pb-10 px-5">
            <p className="font-medium text-2xl md:text-3xl text-pink-800 ">
              Os mais
            </p>
            <h1 className="font-black text-7xl -my-2 md:-my-4 text-pink-800 md:text-8xl">
              Vendidos
            </h1>
          </div>
        </section>
        <section className="flex-col flex-1 mx-auto max-w-screen-xl">
          <ProductCarousel products={recomm} />
        </section>
        <section className="flex-col flex-1 mx-auto mt-10 max-w-screen-xl">
          <div className="flex-col pt-10 pb-10 px-5">
            <p className="font-medium text-2xl md:text-3xl text-pink-800 ">
              Qual o seu
            </p>
            <h1 className="font-black text-7xl -my-2 md:-my-4 text-pink-800 md:text-8xl">
              Objetivo?
            </h1>
            <p className="font-extralight text-lg mt-2 italic md:text-3xl text-gray-400">
              Conheça nossos tratamentos
            </p>
          </div>
        </section>
        <section className="flex-col flex-1 mx-auto max-w-screen-xl">
          <LoopCarousel images={treatm} />
        </section>
        <section className="flex-col flex-1 mx-auto mt-10 max-w-screen-xl">
          <div className="flex-col pt-10 pb-10 px-5">
            <p className="font-medium text-2xl md:text-3xl text-pink-800 ">
              Escolha por
            </p>
            <h1 className="font-black text-7xl -my-2 md:-my-4 text-pink-800 md:text-8xl">
              Categoria
            </h1>
            <p className="font-extralight text-lg mt-2 italic md:text-3xl text-gray-400">
              E faça uma análise online gratuita
            </p>
          </div>
        </section>
        <section className="flex-col flex-1 mx-auto max-w-screen-xl mb-24">
          <LoopCarousel images={treatm} />
        </section>
      </div>
      <section className="bg-pink-600 flex-col flex-1 mx-auto w-full pt-8">
        <Footer />
      </section>
    </>
  )
}

export default Home
