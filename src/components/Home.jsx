import React, { useState } from 'react'
import bg from '../assets/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function Home() {
        
    const [counter, setCounter] = useState(1);

    const handleNext = () => {
        if(counter <= 3){
            setCounter(counter + 1)
        }
    }

    const handlePrevious = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

  return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="content">
            <div className="title-text">
                <h1>Reid Your Realtor</h1>
            </div>
            <div className="title-img">
                <img src="https://lh3.googleusercontent.com/p/AF1QipP0AQVDl3E-9Q86-3pFTWY_ijkn-Zd8p6GWxSEz=s1360-w1360-h1020" alt="Reid Nicholson" />
            </div>
            <div className="tag-line">
                <h2>Giving you the confident to do it yourself.</h2>
            </div>
            
            <a href="mailto: leads+successrealtywestmichiganmi5585-a-1205089@kvcore.com"><button>Get in touch!</button></a>


            
            <div className="testimonials">
            <h1>Testimonials</h1>
                <div className={counter == 1 ? "testimony fade" : 'hide'}>
                    <p>Reid is an outgoing, understanding and eager realtor. He listens to your questions and desires and will pursue the home of your dreams. I recommend him to any individual looking to buy or sell a home. By the way, he sold us the home of our dreams</p>
                    <p>Jon Heitzman</p>
                </div>
                <div className={counter == 2 ? 'testimony fade' : 'hide'}>
                    <p> Reid did a great job helping me through every step of the way. Plus he was able to find us a buyer in record time compared to the area and the circumstances. He's willing to go above and beyond to provide an excellent service for his clients. He is very good at communicating and keeping me updated. I would definitely work with him again down the road.</p>
                    <p>Ali Dabas</p>
                </div>
                <div className={counter == 3 ? 'testimony fade' : 'hide'}>
                    <p>Reid was such a pleasure to work with. He was extremely responsive and helpful and always very professional, easy to communicate with. I would highly recommend him to others. You will not be disappointed!</p>
                    <p>Melinda Veen</p>
                </div>
                <div className={counter == 4 ? 'testimony fade' : 'hide'}>
                    <p>I would highly recommend Success Realty. They know their stuff, and are excellent advocates for the best interest of their clients. Reid was an awesome guide through the process of buying our home. Thanks Reid!! </p>
                    <p>Stuart Hepworth</p>
                </div>

                <div className="next">
                    <FontAwesomeIcon onClick={handlePrevious} className='icon' style={{ marginInline: '1.3em' }} icon={faArrowAltCircleLeft}/>
                    <FontAwesomeIcon onClick={handleNext} className='icon' style={{ marginInline: '1.3em' }} icon={faArrowAltCircleRight}/>
            </div>
                
            </div>


            <div className="footer">

            </div>
        </div>
    </div>
  )
}
