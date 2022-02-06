import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
            <div className="card-zoom">
                    <div id="hero" className='card-zoom-image flex lg:flex-row flex-col items-center justify-center lg:justify-end lg:items-center bg-opacity-100 w-full h-screen bg-hero-pattern  bg-cover bg-no-repeat bg-center text-white'>
                        <div className='lg:w-1/2 w-10/12 lg:p-16'>
                            {/* <h1 className='text-4xl lg:text-5xl'>N<span className='text-pink-700'>o</span><span className='text-[#516191]'>u</span>s offrons une<br/><b className='text-pink-700'>prise en charge complète</b></h1> */}
                            <h1 className='text-white text-4xl'>Nous offrons une<br/><b className='text-5xl'>prise en charge complète</b></h1>
                            <p className='mt-5 p-4 lg:mt-10 lg:text-xl bg-slate-400 lg:p-5 opacity-80 font-nunito-sans font-bold'>Des milliers de personnes ont accès à des soins médicaux de premier ordre. 
                            Votre santé est votre ressource la plus précieuse.    
                            </p>  
                        </div>
                    </div>
                    <div className="overlay"></div>
            </div>
    </>  
    );
};

export default Hero;
