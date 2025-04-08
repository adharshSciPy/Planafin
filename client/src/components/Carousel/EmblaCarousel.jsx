import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import axios from 'axios'


import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import baseUrl from '../../baseUrl'

const EmblaCarousel = ({prop1}) => {
  
    const{options}= prop1 || {}
    const [getSlide,setgetSlide]=useState([])
    const slides=getSlide.map((item,index)=>{return item.path })
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

    const getClientData=async()=>{
      try {
        const response=await axios.get(`${baseUrl}/api/v1/user/customerDetails`)
        setgetSlide(response.data.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=>{
      getClientData()
    },[])
    console.log(getSlide);
    
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {getSlide.map((item,index) => (
            <div className="embla__slide" key={index}>
              {item?.imageCustomer&&(
              <img className="embla__slide__img" src={`${baseUrl}${item.imageCustomer[0].path}`} alt={`Slide ${index + 1}`} />

              )}              
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