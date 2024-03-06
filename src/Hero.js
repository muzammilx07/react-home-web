// Hero.js
import React from 'react';
import './css/hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className='hero-page-div'>
      <div>
        <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Hero Image" />
      </div>
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
        <button>Get in Touch</button>
      </div>
    </div>
  );
};

export default Hero;
