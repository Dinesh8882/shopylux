import React from 'react'
import './Most view.css'
import venice  from '../../assets/Venice, Italy.jpg'
import Great_Ocean_Road from '../../assets/Great Ocean Road, Australia.jpg'
import Pamukkale_Turkey from '../../assets/Pamukkale, Turkey.jpg'


function Most_view() {
  return (
    <div className='most_view'>
        <div className="program">
            <img src={venice} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Venice, Italy</p>
            </div>
        </div>
        <div className="program">
            <img src={Great_Ocean_Road} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Great Ocean Road, Australia</p>
            </div>
        </div>
        <div className="program">
            <img src={Pamukkale_Turkey} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Pamukkale, Turkey</p>
            </div>
        </div>
    </div>
  )
}

export default Most_view