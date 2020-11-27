import React, { useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import cn from 'classnames'
import s from './MainBanner.module.css'

// interface Images {
//   id: number
//   source: string
// }

// interface LoopProps {
//   images: Images[]
// }

const MainBannerCarousel: React.FC = () => {
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

  const banners = ['banner1.png', 'banner2.jpg', 'banner3.jpeg', 'banner4.jpg']

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
    <div ref={sliderRef} className={'keen-slider -mt-4'}>
      {banners.map((img, index) => (
        <div
          key={index}
          className={cn(
            'keen-slider__slide',
            `${s.root}`,
            'h-56',
            'md:h-banner'
          )}
        >
          <Image
            src={`/${img}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  )
}

export default MainBannerCarousel
