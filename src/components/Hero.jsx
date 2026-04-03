import React from 'react'
import Button from './Button';
import Container from './Container';
import { uiInterface } from '../assets';
import Grid from './theme/Hero';

export const Hero = () => {
  return (
    <div className=' relative'>
        <Container className="relative z-10 pt-10 lg:py-16">
            <div className='text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7'>
                <h1 className=' hero '>
                    Buid {" "} <span className=' bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2'> Modern</span> {" "} Sass for Startups
                </h1>
                <p className=' body-1 text-n-5 '>
                    Build beautiful, responsive websites with our modern Sass framework designed for startups.
                </p>
                <p className='text-md text-gray-600 mt-4'>
                    Get started today and see the difference modern Sass can make for your startup.
                </p>
                <Button theme="primary" >Pricing and Plans</Button>
            </div>
            <img src={uiInterface} alt="UI interface" />
        </Container>
        <Grid />
      
    </div>
  );
};

export default Hero;