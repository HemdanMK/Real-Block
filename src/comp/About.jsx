import React from 'react';
import aboutImage from '../images/hero.png';

function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutImage} alt='about image'/>
        </div>
        <div className='about-text'>
            <h2>We Are the Best <br/>Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti fugit porro ipsa eum temporibus inventore officiis necessitatibus voluptatum, ratione vero doloremque excepturi totam veritatis?</p>
            <button>View More Details</button>
        </div>

    </div>
  )
}

export default About;