import React from 'react'
import './Contact.css'
// import msg_icon from '../../assets/msg_icon.svg'

function Contact() {
    return (
        <div className='contact'>
            <div className="left">
                <h3>Send us a message </h3>
                <p>This is what holidays, travels, vacations are about. It is not really rest
                   or even leisure we chase. We strain to renew our capacity to wonder, to
                   shock ourselves into astonishment once again.
                </p>
                <ul>
                    <li><i className="ri-mail-open-line"></i> Tusharmahor0987@gmail.com</li>
                    <li><i className="ri-phone-line"></i> 955654612</li>
                    <li><i className="ri-home-3-line"></i> boduh 22 v-32 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iusto.</li>
                </ul>
            </div>
            <div className="left right">
                <form action="">
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea type="message" row='6' placeholder='Enter your message' required />
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span></span>
            </div>
        </div>
    )
}

export default Contact