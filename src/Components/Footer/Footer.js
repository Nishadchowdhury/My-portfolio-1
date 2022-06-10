import React from 'react';
import Github from '../../assets/img/github.png'
import LinkdIn from '../../assets/img/linkedin.png'
import Insta from '../../assets/img/instagram.png'


const Footer = () => {

    return (

        <footer className="h-32 bg-orange-100 flex flex-col items-center justify-center shadow-inner" >

            <div className='flex justify-center ' >
                <span><img className='scale-50' src={Github} alt="" /></span>
                <span><img className='scale-50' src={LinkdIn} alt="" /></span>
                <span><img className='scale-50' src={Insta} alt="" /></span>
            </div>

            <h1  >All right Reserved By Nishad 2020-2022 </h1>

        </footer>

    );
};

export default Footer;