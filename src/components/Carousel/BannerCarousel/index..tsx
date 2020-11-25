import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const BannerCarousel: React.FC = () => {
  const [pause, setPause] = useState(false)
  const timer = useRef<number | null>(null)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    }
  })

  const banners = [
    'bg_pink.jpg',
    'bg_blue.jpg',
    'bg_green.jpg',
    'bg_yellow.jpg',
    'bg_orange.jpg'
  ]

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = window.setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])
  return (
    <div ref={sliderRef} className="keen-slider h-96">
      {banners.map((banner, index) => (
        <div key={index} className="keen-slider__slide number-slide1">
          <Image
            src={`/${banner}`}
            alt={`${banner}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  )
}

export default BannerCarousel
