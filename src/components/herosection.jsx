import React from 'react';
import '../styles/herosection.css';
import heroBg from '../assets/herosection.jpg';

function HeroSection() {
  return (
    <>
        <div class="relative">
            <img src={heroBg} alt="Hero Background" class="w-full h-full object-cover opacity-98" />
            <div class="absolute top-8 left-8">
                <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight lg:leading-tight drop-shadow-lg">
                    Trusted by farmers and buyers <br/> across India.
                </h1>
            </div>
        </div>
    </> 
    
  );
}

export default HeroSection;
