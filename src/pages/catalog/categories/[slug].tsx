import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import Header from '../../../components/Header'

interface Category {
  id: string
  name: string
  source: string
  banner: string
  title: string
}

interface Product {
  id: number
  source: string
  title: string
  price: number
  description?: string
  masc?: boolean
  fem?: boolean
  slug: string
}

interface CategoryProps {
  products: Product[]
  category: Category
}

const Category: React.FC<CategoryProps> = ({ products, category }) => {
  const router = useRouter()

  // console.log(`PRODUCTS:: ${JSON.stringify(products)}`)
  // console.log(`CATEGORY:: ${JSON.stringify(category)}`)

  if (router.isFallback) {
    return <h1>LOADING...</h1>
  }

  return (
    <>
      <Header />
      <section className="relative h-44 md:h-96">
        <Image
          src={category[0].banner}
          layout="fill"
          objectFit="none"
          quality={100}
          className="absolute"
        />
        <div className="absolute right-2 md:right-96 top-12 md:top-24 w-48 md:w-2/6">
          <h1 className="text-3xl md:text-8xl bg-pink-600 text-gray-50 font-black break-all px-2">
            {category[0].title}
          </h1>
        </div>
      </section>
    </>
  )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const fetcher = url => fetch(url).then(res => res.json())

  const categories = await fetcher('http://localhost:3333/categories')

  const paths = categories.map(category => {
    return {
      params: { slug: category.name }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async context => {
  const fetcher = url => fetch(url).then(res => res.json())

  const { slug } = context.params

  const category = await fetcher(
    `http://localhost:3333/categories?name=${slug}`
  )

  const products = await fetcher(
    `http://localhost:3333/products?category_id=${slug}`
  )

  return {
    props: {
      products,
      category
    },
    revalidate: 60
  }
}
