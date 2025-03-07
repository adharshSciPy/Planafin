import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider2.png"
import slider3 from "../../assets/slider3.png"
import slider4 from "../../assets/slider4.jpg"
import slider5 from "../../assets/slider5.jpg"
import slider6 from "../../assets/slider6.png"
import slider7 from "../../assets/slider7.png"
import slider8 from "../../assets/slider8.png"
import slider9 from "../../assets/slider9.png"
import slider10 from "../../assets/slider10.png"
import slider11 from "../../assets/slider11.png"
import slider12 from "../../assets/slider12.png"
import slider13 from "../../assets/slider13.png"
import slider14 from "../../assets/slider14.png"
import slider15 from "../../assets/slider15.png"



import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

const EmblaCarousel = (props) => {
    const{options}=props
  const slides=[
    slider1,slider2,
    slider3,slider4,
    slider5,slider6,
    slider7,slider8,
    slider9,slider10,
    slider11,slider12,
    slider13,slider14,
    slider15


  ]
  const progressNode = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src,index) => (
            <div className="embla__slide" key={index}>
              
              <img className="embla__slide__img" src={src} alt={`Slide ${index + 1}`} />
              
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel