import React from 'react';

const AboutMe = () => {
    return (
        <div id="aboutMe" >
            <div className='flex lg:flex-row flex-col gap-4' >
                <div className=' flex-1 bg-[#fb982f] p-4 m-4 rounded-2xl' >
                    <h1 className='text-xl font-bold text-black Gumela  text-center border-orange-400 ' > Me and my hobby </h1>

                    <p className='Gumela' >
                        I'm a front-end web developer, I have experience in web development it's near a year. I love to do something with computer and at the same time I love JavaScript that's why I decided to be a web developer . That's why I'm here . <br />
                        <strong> Thank you</strong>
                    </p>

                </div>
                <div className=' flex-1 bg-[#fdc50f] p-4 m-4 rounded-2xl' >
                    <h1 className='text-xl font-bold text-black Gumela  text-center border-orange-400 ' > About my dreams and Knowledge </h1>

                    <p className='Gumela' >
                        I'm a web developer based on react-JS with a bunch of CSS frameworks. I have some knowledge about node JS, have some knowledge about back-end with no SQL database . I know how to secured a website client site in server side both .
                    </p>

                </div>

            </div>
        </div>
    );
};

export default AboutMe;