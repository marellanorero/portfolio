import { useState } from 'react'
import './wsp-gallery.css'

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsX } from "react-icons/bs";

const WSPGallery = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [ openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.lenght ? setSlideNumber(0) : setSlideNumber(slideNumber+1)
    }
    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber( galleryImages.lenght -1 ) : setSlideNumber( slideNumber - 1 )
    }

    return(
        <div>

            {
                openModal &&
                <div className='sliderWrap'>
                    <BsFillArrowLeftCircleFill className='btnPrev'onClick={prevSlide}/>
                    <BsFillArrowRightCircleFill className='btnNext' onClick={nextSlide}/>
                    <BsX className='btnClose' onClick={handleCloseModal}/>
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber].original} alt=''></img>
                    </div>
                </div>
            }
            <div className='galleryWrap'>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return(
                            <div 
                            className='single' 
                            key={index}
                            onClick={ () => handleOpenModal(index) }
                            > 
                                <img src={slide.original} alt=''></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WSPGallery;