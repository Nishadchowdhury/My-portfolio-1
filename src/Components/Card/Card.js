import React from 'react';
import { buttonPrimary } from '../Shared/Classes/NavbarClasses';

const Card = ({ emoji, heading, detail }) => {
    return (
        <div className='w-[15rem]  gap-1  flex flex-col items-center text-center bg-[rgba(255,255,255,0.26)] border-8 border-orange-300 rounded-[20px] px-[26px] pt-0 pb-[32px]' >
            <img className='w-14' src={emoji} alt="" />
            <span className='text-base text-gray-400' >{heading}</span>
            <span className='text-base text-gray-400' >{detail}</span>
            <button className={`${buttonPrimary} px-3`} >Learn More</button>
        </div>
    );
};

export default Card;