import React from 'react';
import './Footer.css';
import linkedIn from '../../assets/linkedIn.png';

export default function Footer() {
  return <footer> 
    <div> 
      <a href= "https://www.linkedin.com/in/yovana-pelayo/">
        <img src={linkedIn}/>
      </a>
    </div> Social media
  </footer>;

}
