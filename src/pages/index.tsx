import React from 'react'
import Header from '../components/Header'
import BannerCarousel from '../components/Carousel/BannerCarousel/index.'
import ProductCard from '../components/Product/ProductCard'
import Carousel from '../components/Carousel'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <BannerCarousel />
      <div className="">
        <section className="flex-col flex-1 mx-auto max-w-screen-xl">
          <div className="flex-col pt-10 pb-10 px-5">
            <p className="font-medium text-xl md:text-3xl text-pink-800 ">
              Os mais
            </p>
            <h1 className="font-black text-6xl -my-2 md:-my-4 text-pink-800 md:text-8xl">
              Vendidos
            </h1>
          </div>
          <div className="flex">
            <ProductCard />
          </div>
        </section>
        <section className="flex-col flex-1 mx-auto max-w-screen-xl">
          <div className="flex-col pt-10 pb-10 px-5">
            <p className="font-medium text-xl md:text-3xl text-pink-800 ">
              Qual o seu
            </p>
            <h1 className="font-black text-6xl -my-2 md:-my-4 text-pink-800 md:text-8xl">
              Objetivo
            </h1>
            <p className="font-extralight text-lg mt-2 italic md:text-3xl text-gray-400">
              Conheça nossos tratamentos
            </p>
          </div>
        </section>
        <section className="flex border-2">
          <Carousel />
        </section>
      </div>
    </>
  )
}

export default Home
