import React, { useRef } from 'react'
import './Blogs.css'
import back_icon from '../../assets/next_icon.svg'
import next_icon from '../../assets/back_icon.svg'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'

function Blogs() {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='blogs'>
      <img
        src={next_icon} alt="" className='next-btn'
        onClick={slideForward}
      />
      <img
        src={back_icon} alt="" className='back-btn'
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
              </div>
              <div className='user_info'>
                <h3>Tushar</h3>
                <span>USA</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo
                ipsum numquam consequuntur itaque repellat optio modi architecto nisi placea
                inventore laborum. Deserunt ratione vero ut harum officia architecto veniam.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
              </div>
              <div className='user_info'>
                <h3>Tushar</h3>
                <span>USA</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo
                ipsum numquam consequuntur itaque repellat optio modi architecto nisi placea
                inventore laborum. Deserunt ratione vero ut harum officia architecto veniam.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
              </div>
              <div className='user_info'>
                <h3>Tushar</h3>
                <span>USA</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo
                ipsum numquam consequuntur itaque repellat optio modi architecto nisi placea
                inventore laborum. Deserunt ratione vero ut harum officia architecto veniam.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
              </div>
              <div className='user_info'>
                <h3>Tushar</h3>
                <span>USA</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo
                ipsum numquam consequuntur itaque repellat optio modi architecto nisi placea
                inventore laborum. Deserunt ratione vero ut harum officia architecto veniam.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Blogs