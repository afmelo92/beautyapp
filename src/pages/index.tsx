import React, { useEffect } from 'react'
import Header from '../components/Header'
import LoopCarousel from '../components/Carousel/LoopCarousel'
import ProductCarousel from '../components/Carousel/ProductCarousel/index.'
import Footer from '../components/Footer'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import useSWR from 'swr'
import MainBannerCarousel from '../components/Carousel/MainBannerCarousel'

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

interface Categories {
  id: string
  source: string
  title: string
}

interface HomeProps {
  recommended: Product[]
  treatments: Treatments[]
  categories: Categories[]
}

export const getStaticProps: GetStaticProps = async () => {
  const fetcher = url => fetch(url).then(res => res.json())

  const recommended = await fetcher('http://localhost:3333/recommended')
  const treatments = await fetcher('http://localhost:3333/treatments')
  const categories = await fetcher('http://localhost:3333/categories')

  return {
    props: {
      recommended,
      treatments,
      categories
    },
    revalidate: 30
  }
}

const Home: React.FC<HomeProps> = ({ recommended, treatments, categories }) => {
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

  const { data: cats } = useSWR('http://localhost:3333/categories', fetcher, {
    initialData: categories
  })

  return (
    <>
      <Header />
      <MainBannerCarousel />
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
      <section className="flex flex-1 mx-auto mt-10 max-w-screen-xl justify-between">
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
        <div className="pr-6 hidden md:block">
          <Image
            src={treatm[0].source}
            layout="intrinsic"
            width={371}
            height={240}
            quality={100}
          />
        </div>
      </section>
      <section className="flex-1 mx-auto mt-4 max-w-screen-xl justify-between px-6 hidden md:flex">
        <Image
          src={treatm[1].source}
          layout="intrinsic"
          width={371}
          height={240}
          quality={100}
        />
        <Image
          src={treatm[2].source}
          layout="intrinsic"
          width={371}
          height={240}
          quality={100}
        />
        <Image
          src={treatm[3].source}
          layout="intrinsic"
          width={371}
          height={240}
          quality={100}
        />
      </section>

      <section className="flex-col flex-1 mx-auto max-w-screen-xl md:hidden">
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
      <section className="flex-1 px-6 mx-auto max-w-screen-xl justify-between hidden md:flex">
        <a href="/">
          <div className="flex-col relative">
            <Image
              src={cats[0].source}
              layout="intrinsic"
              width={395}
              height={492}
              quality={100}
            />
            <span className="flex justify-center absolute -mt-12 ml-32 bg-pink-400 text-rose-100 p-2">
              {cats[0].title}
            </span>
          </div>
        </a>
        <a href="/">
          <div className="flex-col relative">
            <Image
              src={cats[1].source}
              layout="intrinsic"
              width={395}
              height={492}
              quality={100}
            />
            <span className="flex justify-center absolute -mt-12 ml-32 bg-pink-400 text-rose-100 p-2">
              {cats[1].title}
            </span>
          </div>
        </a>
        <a href="/">
          <div className="flex-col relative">
            <Image
              src={cats[2].source}
              layout="intrinsic"
              width={395}
              height={492}
              quality={100}
            />
            <span className="flex justify-center absolute -mt-12 ml-32 bg-pink-400 text-rose-100 p-2">
              {cats[2].title}
            </span>
          </div>
        </a>
      </section>
      <section className="flex-col flex-1 mx-auto max-w-screen-xl md:hidden">
        <LoopCarousel images={cats} />
      </section>

      <section className="bg-pink-600 flex-col flex-1 mx-auto w-full pt-8">
        <Footer />
      </section>
    </>
  )
}

export default Home
