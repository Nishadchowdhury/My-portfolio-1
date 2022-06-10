import React from 'react';
import img1 from '../../assets/ProjectsSS/Project3/1.png'
import img2 from '../../assets/ProjectsSS/Project3/2.png'
import img3 from '../../assets/ProjectsSS/Project3/3.png'
import { buttonPrimary } from '../Shared/Classes/NavbarClasses';

const Project1 = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse gap-4 lg:p-0 p-4  ' >

            <div className='flex-1 h-[90vh] lg:overflow-y-auto'  >
                <h1 className='text-xl font-bold text-orange-400  text-center border-t-[1px] border-orange-400 ' > This is Home Page </h1>
                <img src={img1} alt="" />


                <h1 className='text-xl font-bold text-orange-400  text-center border-t-[1px] border-orange-400 mt-6 ' > This is buyer's review Page </h1>
                <img src={img2} alt="" />


                <h1 className='text-xl font-bold text-orange-400  text-center border-t-[1px] border-orange-400 mt-6 ' > This is graph Page </h1>
                <img src={img3} alt="" />
            </div>

            <div className='flex-1'>
                <h1 className='text-xl font-bold text-orange-400  text-center border-t-[1px] border-orange-400 mt-6 ' > This is Apple's mac studio seller Website. </h1>

                <div>

                    <li> This site is made for a cloude Shop of apple mac seller. </li>
                    <li> Visitors can know about it's features and recent Price. </li>
                    <li> This site always provides ltest version of mac studio. </li>
                    <li> If someone want to make an order, they must be login. </li>
                    <li> This site has has made With Firebase security system. </li>

                </div>

                <div className='mt-4' >
                    <a href="https://nishads-assignment-9.netlify.app/" target={"_blank"}><button className={`${buttonPrimary} `} > Live site </button></a>
                    <a href="https://github.com/Nishadchowdhury/Assignment-9-of-Nishad" target={"_blank"}> <button className={`${buttonPrimary} `} >Git Hub </button></a>
                </div>

            </div>

        </div>
    );
};

export default Project1;