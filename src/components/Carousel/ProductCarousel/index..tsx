import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import s from './Banner.module.css'
import cn from 'classnames'
import ProductCard from '../../Product/ProductCard'

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
  products: Product[]
}

const ProductCarousel: React.FC<ProductProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(sl) {
      setCurrentSlide(sl.details().relativeSlide)
    }
  })

  return (
    <>
      <div className={`${s.navigationwrapper}`}>
        <div ref={sliderRef} className="keen-slider">
          {products.map(product => (
            <div
              key={product.id}
              className={cn('keen-slider__slide', `${s.root}`)}
            >
              <ProductCard product={product} />
            </div>
          ))}
          {/* <a
            href="https://google.com"
            className={cn(
              'keen-slider__slide',
              `${s.root}`,
              `${s.numberslide1}`
            )}
          >
            <div>1</div>
          </a> */}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={e => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={e => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className={s.dots}>
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={
                  currentSlide === idx
                    ? cn(`${s.dot} ${s.active}`)
                    : cn(`${s.dot}`)
                }
              />
            )
          })}
        </div>
      )}
    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? ` ${s.arrowdisabled}` : ''
  return (
    <svg
      onClick={props.onClick}
      className={cn(`${s.arrow}`, `${s.arrowleft}`) + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ` ${s.arrowdisabled}` : ''
  return (
    <svg
      onClick={props.onClick}
      className={cn(`${s.arrow}`, `${s.arrowright}`) + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

export default ProductCarousel
