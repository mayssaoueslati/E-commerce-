import React from 'react';
import '../style/home.css'; 
import TeaImage from "../assets/Landing Main Image (1).png";
import cafe from '../assets/local_cafe.png';
import redeem from '../assets/redeem.png';
import shipping from '../assets/local_shipping.png';
import sell from '../assets/sell.png';
import { menuList } from './menuList.js';
import last from '../assets/img1.png';
import last1 from '../assets/img2.png';
import fori from '../assets/for.png';


function Home() {
    const blogitem=menuList.map((item)=>{
        return(
            <div className='col-md-3'>
                <div className='box'>
                    <img src={item.image} />
                    
                </div>
               
            </div>
        )
    })
  return (
    <fragment>
        <header>
            <div className="container">
                <div className="image">
                    <img src={TeaImage} alt="Tea" className="image-content" />
                </div>
                <div className="rightSide">
                    <h1 className="titre">Everyday is unique just like our tea</h1>
                    <p className="text">
                    Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                    Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                    </p>
                    <button className="button">BROWSE TEAS</button>
                </div>
            </div>
        </header>
        <section className="options">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={cafe} alt="cafe" className="iconSection" />
                        <h2>450+ KIND OF LOOSEF TEA</h2>
                    </div>
                    <div className="col">
                        <img src={redeem} alt="redeem" className="iconSection" />
                        <h2>CERTIFICATED ORGANIC TEAS</h2>
                    </div>
                    <div className="col">
                        <img src={shipping} alt="cafeshipping" className="iconSection" />
                        <h2>FREE DELIVERY</h2>
                    </div>
                    <div className="col">
                        <img src={sell} alt="sell" className="iconSection" />
                        <h2>SAMPLE FOR ALL TEAS</h2>
                    </div>
                    
                </div>
                <button className="learnMore">LEARN MORE</button>
            </div>
        </section>
       <section className='blogs'>
        <div className='container5'>
            <div className='row5'>
                < div className='col-lg-12'>
                    <h2> our collection</h2>
                </div>
            </div>
            <div className='row5'>
                    {blogitem}
            </div>

            
        </div>
       </section>
        <section className='lastPost'>
            <h1 className="Title">Last Blog Posts</h1>
            <div className="contain">
                <div className='containera'>
                    <img src={last1} alt='last' className='last'/>
                    
                    <div className='text'>
                        <h2 className='title1'> How to steep tea like a pro</h2>
                        <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. </p>
                        <p className='readMore'>READ MORE</p>
                    </div>
                </div>
                <div className='containera'>
                    <img src={last} alt='last' className='last'/>
                    <div className='text'>
                        <h2 className='title1'> All about tea aromas</h2>
                        <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.  </p>
                        <p className='readMore'>READ MORE</p>
                    </div>
                </div>
            </div>
        </section>
        <header>
            <div className="containero">
                
                <div className="leftSide">
                    <h1 className="titre">FOR WHOLESALERS</h1>
                    <p className="text">
                    We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment.
                    </p>
                    <button className="button6">GET A FREE CONSULTATION</button>
                </div>
                <div className="image">
                    <img src={fori} alt="for" className="image-content" />
                </div>

            </div>
            </header>

    </fragment>
  );
}

export default Home;

