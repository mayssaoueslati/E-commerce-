import React, { Component } from 'react';
import '../style/Navbar.css';
import { IonIcon } from '@ionic/react';

// Import SVG icons
import searchOutlineIcon from '../assets/search-outline.svg';
import personOutlineIcon from '../assets/person-outline.svg';
import bagOutlineIcon from '../assets/bag-outline.svg';
import psychiatry from '../assets/psychiatry (1).png';




class Navbar extends Component {
  render() {
    const MenuData = [
      {
        title: "TEA COLLECTIONS",
        url: "collections",
        cName: "nav-links",
        
      },
      {
        title: "ACCESSORIES",
        url: "#",
        cName: "nav-links",
        
      },
      {
        title: "BLOG",
        url: "#",
        cName: "nav-links",
      
      },
      {
        title: "CONTACT US",
        url: "#",
        cName: "nav-links",
      
      },
    ];
    const IconData = [
      {
        url: "#",
        cName: "nav-links",
        icon: searchOutlineIcon
      },
      {
        url: "#",
        cName: "nav-links",
        icon: personOutlineIcon 
      },
      {
        url: "#",
        cName: "nav-links",
        icon: bagOutlineIcon 
      }
    ];

    return (
      <nav className="NavbarItems">
        <jtm className="jspp">
          <img src={psychiatry} alt="" className="imagea" />
          <h1 className="logo">
            Brand Name
        </h1>
        </jtm>
        
        <ul className="nav-menu">
          {MenuData.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.cName}>
               
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="icons-menu">
          {IconData.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <IonIcon icon={item.icon}></IonIcon>
                
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
