import React, { useState } from 'react';
import '../style/product.css';

import language from "../assets/language.png";
import img from "../assets/Rectangle.png";
import redeem from "../assets/redeem.png";
import eco from "../assets/eco.png";
import a1 from "../assets/Frame 57.png";
import a2 from "../assets/Frame 58.png";
import a3 from "../assets/Frame 59.png";
import a4 from "../assets/Frame 60.png";
import a5 from "../assets/Frame 61.png";
import a6 from "../assets/Frame 62.png";
import line from "../assets/Line.png";
import a7 from "../assets/Frame 38.png";

function NumberCounter() {
    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
      setNumber(prevNumber => prevNumber + 1);
    };

    const decreaseNumber = () => {
      setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div className='c'>
            <button className='b1'  onClick={decreaseNumber}>-</button>
            
            <h2> {number}</h2>
            <button className='b1' onClick={increaseNumber}>+</button>
            
        </div>
    );
}

function Product() {
    return (
        <header>
            <p className='ktiba'> HOME/COLLECTIONS/CHAI/CEYLON GINGER CINNAMON CHAI TEA</p>
            <div className='c1'>
                <img src={img} alt="" className="img" />
                <div className='c2'>
                    <a className='titre'>Ceylon Ginger Cinnamon chai tea</a>
                    <p className='t1'>A lovely warming Chai tea with ginger cinnamon flavours. </p>
                    <div className='c3'>
                        <img src={language} alt="" className='img1' />
                        <p className='t2'>Origin: Iran</p>
                        <img src={redeem} alt="" className='img1'/>
                        <p className='t2'>Organic</p>
                        <img src={eco} alt="" className='img1'/>
                        <p className='t2'>Vegan</p>
                    </div>
                    <a className='titre'> €3.90</a>
                    <p className='variants'>Variants</p>
                    <div className='c4'>
                        <img src={a1} alt="" className='a'/>
                        <img src={a2} alt="" className='a' />
                        <img src={a3} alt="" className='a'/>
                        <img src={a4} alt="" className='a'/>
                        <img src={a5} alt="" className='a'/>
                        <img src={a6} alt="" className='a'/>
                    </div>
                    <NumberCounter />
                    <button className='button1'> ADD TO BAG</button>
                </div>
            </div>
            <div className='c5'>
                <div className='left'>
                    <a className='titre1'> Steeping instructions</a>
                    <p className='b'>SERVING SIZE: 2 tsp per cup, 6 tsp per pot</p>
                    <p>
                    ----------------------------------------------------                    </p>
                    <p className='b'>WATER TEMPERATURE:  100°C</p>
                    <p>
                        ------------------------------------------------
                    </p>
                    <p className='b'>STEEPING TIME: 3 - 5 minutes</p>
                    <p>
                        -----------------------------------------------
                    </p>
                    <p className='b'>
                    COLOR AFTER 3 MINUTES
                    </p>
                    
                </div>
                <div className='right'>
                    <a className='titre1'>About this tea</a>
                    <div className='aboutthistea'>
                        <p className='titre2'>FLAVOR</p>
                        <p className='texte'>Spicy</p>
                        <img className='img2' src={line} alt=''/>
                        <p className='titre2'>QUALITIES</p>
                        <p className='texte'>Smoothing</p>
                        <img  className='img2'src={line} alt=''/>
                        <p className='titre2'>CAFFEINE</p>
                        <p className='texte'>Medium</p>
                        <img  className='img2'src={line} alt=''/>
                        <p className='titre2'>ALLERGENS</p>
                        <p className='texte'>Nuts-free</p>

                    </div>
                    
                </div>
                <div className='ingrd'>
                    <a className='titre4'>Ingredient
                    </a>
                    <p className='texte1'>
                    Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, Cinnamon sticks, Cardamom, Cinnamon pieces.
                    </p>
                </div>
                

            </div>
            <div className='umaylike'>
                    <a className='titre3'>You may also like</a>
                    <img className =" img3" src={a7}></img>

                </div>
        </header>
    );
}

export default Product;
