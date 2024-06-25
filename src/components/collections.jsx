import rectangle from "../assets/Rectangle 2.png";
import '../style/Collections.css';
import React, { useState } from 'react';
import expand from "../assets/expand_more.png";
import { menuList } from './menuList1.js';
import add from "../assets/add.png";
import line from "../assets/Line 1.png";

function Collections() {
    const [showCollectionOptions, setShowCollectionOptions] = useState(false);
    const [showOriginOptions, setShowOriginOptions] = useState(false);
    const [showFlavourOptions, setShowFlavourOptions] = useState(false);
    const [showQuallitiesOptions, setShowQuallitiesOptions] = useState(false);
    const [showCaffineOptions, setShowCaffineOptions] = useState(false);
    const [showOrganicOptions, setShowOrganicOptions] = useState(false);

    const handleAddClick = (optionType) => {
        if (optionType === 'collection') {
            setShowCollectionOptions(!showCollectionOptions);
        } else if (optionType === 'origin') {
            setShowOriginOptions(!showOriginOptions);
        } else if (optionType === 'flavour') {
            setShowFlavourOptions(!showFlavourOptions);
        } else if (optionType === 'quallities'){
            setShowQuallitiesOptions(!showQuallitiesOptions);
        } else if (optionType === 'cafeine'){
            setShowCaffineOptions(!showCaffineOptions);
        } else if (optionType === 'organic'){
            setShowOrganicOptions(!showOrganicOptions);
        }
    };
    
    const options = ["Green Tea", "White Tea", "Black Tea", "Chai"];
    const options1 = ["India", "Japan", "Iran", "South Africa"];
    const options2 = ["Spicy", "Sweet", "Citrus", "Smooth", "Fruity", "Flofral", "Grassy", "Minty", "Bitter", "Creamy"];
    const options3 = ["Detox ", "Eanergy", "Relax", "Digestion"];
    const options4 = ["No Caffeine ", "Low caffeine", "Meduim caffeine ", "High caffeinea"];
    const options5 = ["Lactose-free", "Gluten-free", "Nuts-free", "Soy-free"];

    const blogitem = menuList.map((item) => {
        return (
            <div className='col-md-3'>
                <div className='box'>
                    <img src={item.image} alt={item.name} />
                </div>
            </div>
        );
    });

    return (
        <>
            <header>
                <div>
                    <img src={rectangle} alt="" className="rectangle" />
                </div>
                <p className="ktiba">
                HOME/COLLECTIONS/CHAI
                </p>
                <div className="container">
                    <div className="leftSide">
                        <div className="box8">
                            <p className="text">COLLECTIONA (1)</p>
                            <img src={add} alt="" className="add" onClick={() => handleAddClick('collection')} />
                            {showCollectionOptions && (
                                <ul className="optionsList">
                                    {options.map((option, index) => (
                                        <li key={index}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    
                        <img src={line} alt="" className="line" />
                        <div className="box8">
                            <p className="text">
                                ORIGIN
                            </p>
                            <img src={add} alt="" className="add" onClick={() => handleAddClick('origin')} /> 
                            {showOriginOptions && (
                                <ul className="optionsList">
                                    {options1.map((option, index) => (
                                        <li key={index}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    
                        <img src={line} alt="" className="line" />
                        <div className="box8">
                            <p className="text">
                                FLAVOUR
                            </p>
                            <img src={add} alt="" className="add" onClick={() => handleAddClick('flavour')} /> 
                            {showFlavourOptions && (
                                <ul className="optionsList">
                                    {options2.map((option, index) => (
                                        <li key={index}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <img src={line} alt="" className="line" />
                        <div className="box8">
                            <p className="text">
                                QUALITIES
                            </p>
                            <img src={add} alt="" className="add" onClick={() => handleAddClick('quallities')} /> 
                            {showQuallitiesOptions && (
                                <ul className="optionsList">
                                    {options3.map((option, index) => (
                                        <li key={index}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <img src={line} alt="" className="line" />
                        <div className="box8">
                            <p className="text">
                                CAFEINE
                            </p>
                            <img src={add} alt="" className="add" onClick={() => handleAddClick('cafeine')} />
                            {showCaffineOptions && (
                                <ul className="optionsList">
                                    {options4.map((option, index) => (
                                        <li key={index}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <img src={line} alt="" className="line" />
                        <div className="box8">
                            <p className="text">
                                ALLERGENS
                            </p>
                            <img src={add} alt="" className="add" onClick={() => handleAddClick('organic')} />
                            {showOrganicOptions && (
                                <ul className="optionsList">
                                    {options5.map((option, index) => (
                                        <li key={index}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <img src={line} alt="" className="line" />
                        <div className="box8">
                            <p className="text">
                                ORGANIC
                            </p>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="sort">
                            <p className="sortBy">
                                SORT BY
                            </p>
                            <img src={expand} alt="" className="expand" />
                        </div>
                        <div className="pics">                       
                            {blogitem}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Collections;
