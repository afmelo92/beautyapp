import React, { useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import s from './Loop.module.css'

interface LoopProps {
  bannerHeight: number
}

const LoopCarousel: React.FC<LoopProps> = ({ bannerHeight }) => {
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
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div ref={sliderRef} className={'keen-slider -mt-4'}>
        <div
          className={`keen-slider__slide ${s.numberslide1} ${s.root}`}
          style={{ height: bannerHeight }}
        >
          1
        </div>
        <div
          className={`keen-slider__slide ${s.numberslide2} ${s.root}`}
          style={{ height: bannerHeight }}
        >
          2
        </div>
        <div
          className={`keen-slider__slide ${s.numberslide3} ${s.root}`}
          style={{ height: bannerHeight }}
        >
          3
        </div>
        <div
          className={`keen-slider__slide ${s.numberslide4} ${s.root}`}
          style={{ height: bannerHeight }}
        >
          4
        </div>
        <div
          className={`keen-slider__slide ${s.numberslide5} ${s.root}`}
          style={{ height: bannerHeight }}
        >
          5
        </div>
        <div
          className={`keen-slider__slide ${s.numberslide6} ${s.root}`}
          style={{ height: bannerHeight }}
        >
          6
        </div>
      </div>
    </>
  )
}

export default LoopCarousel
