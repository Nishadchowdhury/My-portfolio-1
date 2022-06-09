import React from 'react';
import { buttonPrimary } from '../Shared/Classes/NavbarClasses';
import Github from '../../assets/img/github.png'
import LinkdIn from '../../assets/img/linkedin.png'
import Insta from '../../assets/img/instagram.png'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import body from '../../assets/img/boy.png'
import thumbUp from '../../assets/img/thumbup.png'
import glassImojie from '../../assets/img/glassesimoji.png'
import crown from '../../assets/img/crown.png'


const Home = () => {

    const iRight = 'flex flex-1 flex-col justify-evenly '
    const iLeft = 'flex flex-1 relative items-center justify-center '
    const name = 'flex flex-col gap-4'

    /* className='
    
    
    
    ' */

    return (
        <div className='flex h-[77vh] mx-24 bg-red-00'>

            <div className={iRight}>

                <div className={name}>
                    <span className='text-5xl font-bold '>Hy! I am </span>
                    <span className='text-orange-400 text-5xl font-bold ' >Nishad Chowdhury</span>
                    <span className='text-slate-400 text-sm ' >Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>

                    <button className={`${buttonPrimary} inline w-40`}>
                        Hire Me
                    </button>

                    <div className='flex mt-5 '>

                        <a href="">   <img src={Github} className='w- scale-50 hover:cursor-pointer' alt="" /> </a>
                        <a href="">     <img src={LinkdIn} className='w- scale-50 hover:cursor-pointer' alt="" /> </a>
                        <a href="">     <img src={Insta} className='w- scale-50 hover:cursor-pointer' alt="" /> </a>




                    </div>
                </div>

            </div>

            {/* left start */}

            <div className={iLeft}>

                top 5.2
                left -15%
                scl 0.69

                scal .77
                left -1rem
                t 3.4rem


                top 20%
                scal 1.4

                <img src={Vector1} className='absolute scale-[0.69] left-[-15%] top-[5.2%]' alt="" />


                <img src={Vector2} className='absolute scale-[0.77] top-[3.4rem] left-[-1rem]' alt="" />


                <img src={body} className='absolute scale-[1.4] top-[20%]' alt="" />

            </div>

        </div>
    );
};

export default Home;