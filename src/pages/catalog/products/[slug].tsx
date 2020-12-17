/* eslint-disable camelcase */
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Header from '../../../components/Header'

// import { Container } from './styles';

interface Product {
  id: number
  source: string
  title: string
  price: number
  description?: string
  masc?: boolean
  fem?: boolean
  slug: string
  category_id?: string
}

interface ProductProps {
  product: Product[]
}

const Product: React.FC<ProductProps> = ({ product }) => {
  console.log(product)
  return (
    <>
      <Header />
    </>
  )
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
  const fetcher = url => fetch(url).then(res => res.json())

  const products = await fetcher('http://localhost:3333/products')

  const paths = products.map(product => {
    return {
      params: { slug: product.slug }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async context => {
  const fetcher = url => fetch(url).then(res => res.json())

  const { slug } = context.params

  const product = await fetcher(`http://localhost:3333/products?slug=${slug}`)

  return {
    props: {
      product
    },
    revalidate: 60
  }
}
