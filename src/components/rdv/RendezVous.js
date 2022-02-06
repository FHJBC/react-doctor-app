import React from 'react';
import { InlineWidget } from "react-calendly";


const RendezVous = () => {
  return (
        <div id='rdv' className='flex mx-6 mb-10 lg:mx-10 lg:flex-row justify-evenly lg:items-center'>
            <h3 className=' text-pink-700 lg:text-5xl'>Prendre rendez-vous</h3>
            <div className='py-3'>
                 <InlineWidget 
                 url="https://calendly.com/doctorrdv/rendez-vous" 
                 pageSettings={{ 
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true }}
                styles={{width: '300px', height: '350px'}} />
            </div>
        </div>
    );
};

export default RendezVous;
