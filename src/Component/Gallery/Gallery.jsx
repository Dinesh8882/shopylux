import React from 'react'
import './Gallery.css'
// import gallery-1 from '../.'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpg'


function Gallery() {
  return (
    <div className='galleries'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here </button>
    </div>
  )
}

export default Gallery