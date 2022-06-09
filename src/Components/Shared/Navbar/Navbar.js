// import React, { useState } from 'react';
import './Navbar.css'
// import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';



const Navbar = () => {

    const [navOpen, setVavOpen] = useState('navigation');

    const [header, setHeader] = useState('noHeader');

    const navToggle = () => {

        if (navOpen.includes("navigation-open")) {
            setVavOpen('navigation')
        } else {
            setVavOpen('navigation navigation-open')
        }

        if (header.includes('header')) {
            setHeader('noHeader')
        } else {
            setHeader('header')
        }


    }

    return (
        <section>
            <nav class={` ${navOpen.includes('navigation-open') ? 'headerGray' : 'noHeader'} ${header}`}>

                <div class={navOpen}>

                    {/* <section class="logo"></section> */}

                    <section onClick={navToggle} class="navigation__icon">
                        <span class="topBar"></span>
                        <span class="middleBar"></span>
                        <span class="bottomBar"></span>
                    </section>

                    <ul class="navigation__ul">
                        <li onClick={navToggle}><Link to="/">HOME</Link></li>
                        <li onClick={navToggle}><Link to="/About">About Me</Link></li>
                        <li onClick={navToggle}><Link to="/">CLIENT</Link></li>
                        <li onClick={navToggle}><Link to="/">FAQ</Link></li>
                    </ul>

                    <section class="navigation__social">
                        <ul class="navigation__social-ul">
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                        </ul>
                    </section>

                </div>

            </nav>
            {/* <script src="https://code.jquery.com/jquery-3.3.1.js"></script> */}
        </section>
    );
};

export default Navbar;