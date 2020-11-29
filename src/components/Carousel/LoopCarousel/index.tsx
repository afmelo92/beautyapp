import React, { useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import cn from 'classnames'
import s from './Loop.module.css'

interface Images {
  id?: number | string
  source: string
  title?: string
}

interface LoopProps {
  images: Images[]
}

const LoopCarousel: React.FC<LoopProps> = ({ images }) => {
  const [pause, setPause] = useState(false)
  const timer = useRef<number>()
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

    console.log(images)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div ref={sliderRef} className={'keen-slider -mt-4'}>
      {images.map(img => (
        <div
          key={img.id}
          className={cn(
            'keen-slider__slide',
            `${s.root}`,
            'h-56',
            'md:h-banner',
            'relative'
          )}
        >
          <Image
            src={img.source}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          {img.title && (
            <span className="flex justify-center absolute mt-48 bg-pink-600 font-semibold text-rose-100 p-2">
              {img.title}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default LoopCarousel
