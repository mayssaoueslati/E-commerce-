import React, { Component } from 'react';
import '../style/footer.css';
import location from '../assets/location_on.png';
import mail from '../assets/mail.png';
import call from '../assets/call.png';

const Footer=()=>{
    return(
        <div className='footer'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>
                    <h4>COLLECTIONS</h4>
                    <a href="/Black teas">
                        <p>Black teas</p>
                    </a>
                    <a href="/Green teas">
                        <p>Green teas</p>
                    </a>
                    <a href="/White teas">
                        <p>White teas</p>
                    </a>
                    <a href="/Herbal teas">
                        <p>Herbal teas</p>
                    </a>
                    <a href="/Matcha">
                        <p>Matcha</p>
                    </a>
                    <a href="/Chai">
                        <p>Chai</p>
                    </a>
                    <a href="/Oolong">
                        <p>Oolong</p>
                    </a>
                    <a href="/Rooibos">
                        <p>Rooibos</p>
                    </a>
                    <a href="/Teaware">
                        <p>Teaware</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>LEARN</h4>
                    <a href="/About us">
                        <p>About us</p>
                    </a>
                    <a href="/About our teas">
                        <p>About our teas</p>
                    </a>
                    <a href="/Tea academy">
                        <p>Tea academy</p>
                    </a>

                </div>
                <div className='sb_footer-links-div'>
                    <h4>CUSTORMER SERVICE</h4>
                    <a href="/Ordering and payment">
                        <p>Ordering and payment</p>
                    </a>
                    <a href="/Delivery">
                        <p>Delivery</p>
                    </a>
                    <a href="/Terms & Conditions">
                        <p>Terms & Conditions</p>
                    </a>

                </div>
                <div className='sb_footer-links-div'>
                    <h4>CONTACT US</h4>
                    <div className='jsp'>
                        <img src={location} alt="location" className="image-contenta" />
                        <p>3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence
                            Iran
                        </p>
                    </div>
                    <div className='jsp'>
                        <img src={mail} alt="mail" className="image-contenta" />
                        <p>Email: amoopur@gmail.com
                        </p>
                    </div>
                    <div className='jsp'>
                        <img src={call} alt="call" className="image-contenta" />
                        <p>Tel: +98 9173038406 
                        </p>
                    </div>
                    


                </div>

            </div>
        </div>
    )
}
export default Footer;