import React from 'react'
import './About.css'
import Pitons_St_Lucia from '../../assets/Pitons, St Lucia.jpg'

function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={Pitons_St_Lucia} alt="" className='about-img' />
                <img src="" alt="" className='about-img_1' />
            </div>
            <div className="about-right">
                <h3>Keep calm and travel on.</h3>
                <h2>Pitons, St Lucia</h2>
                <p>These two volcanic mountains are one of the most recognizable—not to
                   mention beautiful—features on this Caribbean island. Enjoy the Pitons
                   from the pristine white sand beach at Sugar Beach, A Viceroy Resort.
                </p>

                <p>This is where you’ll find luxury in nature’s embrace. Imagine: enjoying a spa treatment 
                   in a rainforest treehouse, walking the soft white sands barefoot on a culinary journey,
                   then retreating to your own private cottage in the mountains. There’s no doubt our
                   luxury St. Lucia resort is here to renew you.</p>

            </div>
        </div>
    )
}

export default About