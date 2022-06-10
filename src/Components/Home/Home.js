import React, { useEffect, useState } from 'react';
import './Home.scss'
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
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Services from '../Services/Services';


import Resume from '../../assets/resume/Resume_Nishad.pdf'
import MyPortFolio from '../MyPortFolio';
import Contactme from '../Dlt/Contactme';
import Animatedletters from '../Animation/Animatedletters';
import AboutMe from '../Blogs/AboutMe';

const Home = () => {

    const [letterClass, setletterClass] = useState('text-animate');
    const HiArray = ['H', 'y', '!', ' ', 'I', ' ', 'a', 'm'];
    const nameArray = ['N', 'i', 's', 'h', 'a', 'd', ' ', 'C', 'h', 'o', 'w', 'd', 'h', 'u', 'r', 'y']

    useEffect(() => {
        return setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div id='home' className='flex lg:flex-row flex-col lg:h-[77vh] h-auto mx-4  lg:mx-24 bg-red-00'>

                <div className={'flex lg:order-1 order-5  flex-1 flex-col justify-evenly mt-10 '}>

                    <div className={'flex flex-col gap-4'}>

                        <h2 className='text-5xl font-bold '>
                            <Animatedletters
                                letterClass={letterClass}
                                strArray={HiArray}
                                idx={15}
                            />
                        </h2>

                        <h2 className='text-orange-400 text-4xl lg:text-5xl font-bold Gumela' >
                            <Animatedletters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={23}
                            />
                        </h2>
                        <span className='text-slate-400 text-sm Gumela' >Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>


                        <button className={`${buttonPrimary} inline w-40`}>
                            Hire Me
                        </button>

                        <div className='flex lg:justify-start justify-center mt-5 '>

                            <a href="https://github.com/Nishadchowdhury" target={"_blank"}  >   <img src={Github} className='w- scale-50 hover:cursor-pointer' alt="" /> </a>
                            <a href="https://www.linkedin.com/in/nishadchowdhury/" target={"_blank"}  >     <img src={LinkdIn} className='w- scale-50 hover:cursor-pointer' alt="" /> </a>
                            <a href="#home" target={""}  >     <img src={Insta} className='w- scale-50 hover:cursor-pointer' alt="" /> </a>




                        </div>
                    </div>

                </div>

                {/* left start */}

                <div className='lg:flex lg:mt-0 mt-10 lg:flex-1 lg:order-2 order-1 lg:h-auto h-[650px] relative items-center border-[1p x] border-orange-400 justify-center '>

                    <img src={Vector1}
                        className='absolute bluePng scale-[0.80] lg:scale-[0.69] lg:left-[-15%] lg:top-[5.2%] top-[25%]' alt="" />


                    <img src={Vector2} className='absolute yellowPng scale-[0.77] lg:top-[3.4rem] top-[25%] lg:left-[-1rem]' alt="" />


                    <img src={body} className='absolute me scale-[.8] lg:top-[7%] top-[20%]' alt="" />

                    <img
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-mirror="true"

                        src={glassImojie} className='absolute lg:block hidden top-2 lg:left-[-170px] scale-75' alt="" />

                    <div className='absolute  lg:top-12 top-[34rem]  lg:right-0 right-[.7rem] '
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                    >
                        <FloatingDiv image={crown} txt1='web' txt2='Developer' />
                    </div>


                    <div className='absolute lg:bottom-2  lg:top-[30rem]  lg:left-[60px]  top-[20px] '
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                    >
                        <FloatingDiv image={thumbUp} txt1='Provides Best' txt2='Design' />
                    </div>



                    <div className='blur-2xl absolute w-[22rem] h-56 rounded-full bg-gray-200 -z-20 top-0 lg:right-[-6rem]' > </div>

                    <div className='blur-2xl absolute lg:w-[22rem] w-56 h-56 rounded-full bg-sky-200 -z-20 bottom-[-70px] lg:left-[-1.7rem] right-[-0.3rem] '  > </div>

                </div>


            </div>

            {/* <Services /> */}

            <div className='flex justify-center mt-10' >
                <a href={Resume} download >
                    <button className={`${buttonPrimary} w-40 `}>
                        Get resume ↓
                    </button>
                </a>

            </div>
            <h4 className='text-xl mt-10 font-bold text-orange-400  text-center border-t-[1px] border-orange-400 ' >
                Some Of my Projects
            </h4>
            <div className='mt-10' >
                <MyPortFolio />
            </div>

            <div>
                <AboutMe />
            </div>


            <div className='mt-10' >
                <Contactme />
            </div>



        </>
    );
};

export default Home;