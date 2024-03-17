import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className='hero hero-container'>
            <div className="hero-text">
                <h1>Life is short and the world is wide. Better get started.</h1>
                <p>This is what holidays, travels, vacations are about. It is not really rest 
                   or even leisure we chase. We strain to renew our capacity to wonder, to
                   shock ourselves into astonishment once again</p>
                <button className='btn'>Explor More <i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    )
}

export default Hero