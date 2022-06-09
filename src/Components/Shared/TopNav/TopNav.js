import React from 'react';
import { buttonPrimary } from '../Classes/NavbarClasses';

const TopNav = () => {

    const nWrapper = 'flex h-[10vh] justify-between '
    const navRight = '    flex items-center justify-center font-normal gap-8 mr-10 '
    const navLeft = 'flex  justify-center items-center flex gap-[2rem]'
    const Name = 'text-5xl font-bold '


    /* className="
  hover:bg-white hover:cursor-pointer hover:text-[#fdc50f]
    
    " */

    return (
        <div className={nWrapper} >
            <div className={navLeft} >
                <div className={Name}>
                    <span  > Nisahd</span>
                </div>
                <input type="checkbox" name="ModeChange" id="" />
            </div>
            <div className={navRight} >

                <span className='hover:text-orange-400'>Home</span>
                <span className='hover:text-orange-400'>Services</span>
                <span className='hover:text-orange-400'>Experiences</span>
                <span className='hover:text-orange-400'>Portfolio</span>
                <span className='hover:text-orange-400'>Testimonials</span>

                <button className={buttonPrimary} >
                    Contact Us
                </button>
            </div>

        </div>
    );
};

export default TopNav;