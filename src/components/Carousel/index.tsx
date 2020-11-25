import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Carousel: React.FC = () => {
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
    'section-2-1.jpg',
    'section-2-2.jpg',
    'section-2-3.jpg',
    'section-2-4.jpg'
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
    <div ref={sliderRef} className="keen-slider">
      {banners.map((banner, index) => (
        <div key={index} className="keen-slider__slide number-slide1">
          <Image
            src={`/${banner}`}
            alt={`${banner}`}
            width={320}
            height={250}
          />
        </div>
      ))}
    </div>
  )
}

export default Carousel
