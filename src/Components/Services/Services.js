import React from 'react';
import HeartEmoji from '../../assets/img/heartemoji.png'
import glass from '../../assets/img/glasses.png'
import Humble from '../../assets/img/humble.png'
import { buttonPrimary } from '../Shared/Classes/NavbarClasses';
import Card from '../Card/Card';
import Resume from '../../assets/resume/Resume_Nishad.pdf'

const Services = () => {
    return (
        <div className='py-0 px-12 flex  lg:flex-row flex-col gap-2 h-[90vh] mb-32 mt-36 '>

            <div className='flex flex-col justify-center'>
                <span className='text-4xl font-bold' >My Awesome</span>
                <span className='text-4xl font-bold text-orange-500' >Services</span>
                <span className='text-gray-400' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
                    <br />
                    Lorem ipsum dolor sit amet consectetur.
                </span> <br />


                <a href={Resume} download >
                    <button className={`${buttonPrimary} w-40 `}>
                        Get resume ↓
                    </button>
                </a>

            </div>


            {/* right */}
            <div className='cards relative' >

                <div className='left-[18rem] absolute'>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}

                    />
                </div>

                {/* second */}

                <div className='top-56 absolute'>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}

                    />
                </div>


                {/* third */}

                <div className='bottom-0 left-[17.5rem] absolute'>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}

                    />
                </div>


            </div>

        </div>
    );
};

export default Services;