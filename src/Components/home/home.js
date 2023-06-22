import React from 'react';
import './home.css'
import './section3.css'
import manEating from '../../assessts/pizza1.png'
import illustration1 from '../../assessts/delivery1.jpg'
import illustration2 from '../../assessts/delivery2.jpeg'
import illustration3 from '../../assessts/delivery3.jpg'
import order from '../../assessts/order.jpg'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
  
    const handleOrderNowClick = () => {
      navigate('/login'); 
    };
  return (
    <section>
      <section style={{ height: '70vh' }} id="home" className="container">
        <div className="flex-container">
          <div className="text-left">
            <h2 className="tittle">Do you crave delicious food !</h2>
            <p className="firstmsg">But going out to take <span> food costs time....</span></p>
            <p className="secondmsg">Why not order<span> pizza</span> or something <br /><span>delicious</span>from our restaurant</p>
            <p className="desc">Our restaurant always puts the client above.
              They are our single most important thing for our business.</p>
            <div >
              <button className='btn' onClick={handleOrderNowClick}>Order Now!</button>
            </div>

          </div>
          <div className="">
            <img src={manEating} alt="" className="manEating"></img>
          </div>
        </div>
      </section>
      <section style={{ height: '70vh' }}>
        <div className='container'>
          <div className="wrapper">
            <div className="delivery">
              <div className='titles'>
                <span className='deliverysubtitle'>Delivery</span>
                <h2 className='deliveriTitle'>Always on time for you</h2>
              </div>
              <div className='deliveryInfos'>
                <div className='deliveryInfo'>
                  <img src={illustration1} alt='' className='firstImg' />
                  <h3>Our delivery guys is always on time</h3>
                </div>
                <div className='deliveryInfo'>
                  <img src={illustration2} alt='' className='secondImg' />
                  <h3>He works very hard</h3>
                </div>
                <div className='deliveryInfo'>
                  <img src={illustration3} alt='' className='thirdImg' />
                  <h3>He is friendly and social</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className="wrapper">
            <div className="delivery">
              <div className='titles'>
                <span className='deliverysubtitle'>Get our latest offer</span>
                <h2 className='deliveriTitle'>Newsletter</h2>
                <img src={order} alt="" className="order1"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className='container1'>
          <div className="wrapper1">
            <div className='col'>
              <h3 className='title1'>Working Days</h3>
              <ul className='list'>
                <li>Monday - Friday</li>
                <li className='workingTime'>08:00 - 22.00</li>
                <li>Saturday</li>
                <li className='workingTime'>08:00 - 20.00</li>
              </ul>
            </div>
            <div className='col'>
              <h3 className='title1'>Newsletter</h3>
              <ul className='list'>
                <li>Subscribe to our newsletter</li>
                <li>Receive the latest meals</li>
                <li>Got the menu with promos</li>
                <li>Everithing weekly!</li>
              </ul>
            </div>
            <div className='col'>
              <h3 className='title1'>Social Media</h3>
              <ul className='list'>
                <li><a href='https://web.facebook.com/pizzahutsrilanka/?_rdc=1&_rdr'><button className='socialmedia' >
                  <AiFillFacebook /></button></a>
                </li>
                <li><a href='https://www.instagram.com/pizzahutsl/?hl=en>'><button className='socialmedia' >
                  <AiFillInstagram />
                </button></a>
                </li>
                <li><a href='https://twitter.com/pizzahutlanka?lang=en>'><button className='socialmedia' >
                  <BsTwitter />
                </button></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='footer'>
        <div className='footer'></div>
      </section> */}
    </section>
  )

}
export default Home