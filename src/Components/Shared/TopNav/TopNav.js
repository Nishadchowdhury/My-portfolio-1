import React from 'react';
import { Link } from 'react-router-dom';
import { buttonPrimary } from '../Classes/NavbarClasses';

const TopNav = () => {

    const nWrapper = ' lg:flex hidden h-[10vh] justify-between  '
    const navRight = '    flex items-center justify-center font-normal gap-8 mr-10 '
    const navLeft = 'flex  justify-center items-center flex gap-[2rem]'
    const Name = 'text-4xl font-bold '


    /* className="
  hover:bg-white hover:cursor-pointer hover:text-[#fdc50f]
    
    " */

    return (
        <div className={nWrapper} >
            <div className={navLeft}  >
                <div className={Name}>
                    <span  > Nisahd Chowdhury</span>
                </div>
                {/* <input type="checkbox" name="ModeChange" id="" /> */}
            </div>
            <div className={navRight} >

                <Link className='hover:text-orange-400' to='/'  >Home</Link>
                <a className='hover:text-orange-400' href='/#Projects' >Projects</a>
                {/* <span className='hover:text-orange-400'  >Experiences</span> */}
                <a className='hover:text-orange-400' href='/#aboutMe'  >About me </a>
                <Link to='/blogs' className='hover:text-orange-400'  >Blogs</Link>

                <button className={buttonPrimary} >

                    <a
                        href="javascript:void(
                              window.open(
                                'https://form.jotform.com/221594871934466',
                                'blank',
                                'scrollbars=yes,
                                toolbar=no,
                                width=700,
                                height=500'
                              )
                            )
                          ">
                        Contact me
                    </a>

                </button>
            </div>

        </div >
    );
};

export default TopNav;