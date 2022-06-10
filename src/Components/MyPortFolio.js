import React from 'react';
import { Link } from 'react-router-dom';
import { buttonPrimary } from './Shared/Classes/NavbarClasses';

const MyPortFolio = () => {
    return (
        <div id='Projects' className='flex justify-center flex-col' >


            <div className='flex lg:flex-row lg:items-start flex-col items-center lg:justify-evenly'>
                <div className='max-h-[500px] mt-10 overflow-y-auto border-[1px] border-orange-400 rounded-2xl' >
                    <div class="card w-full my-5 mx-auto bg-base-100  rounded-xl">


                        <div class="card-body">
                            <h2 class="card-title">the Site about a private tutor <span className='text-green-500' >  </span> . </h2>
                            <p  >Live Link:- <a className='text-green-500' href='https://assignment-10-3a9c6.web.app/' target='_blank' rel="noreferrer"  > Sikshaa master</a>
                                <Link className='float-right lg:mr-4 mr-2 ' to="/project1">
                                    <button className={`${buttonPrimary}  -mt-5 mb-5  `} >
                                        Details
                                    </button>
                                </Link> </p>


                        </div>
                    </div>

                    <img className='w-96' src="https://i.ibb.co/0KTG3nL/sikshaa-master-home-page.png" alt="" />

                </div>

                <div className='max-h-[500px] mt-10 overflow-y-auto border-[1px] border-orange-400 rounded-2xl' >
                    <div class="card w-full my-5 rounded-xl mx-auto bg-base-100 ">
                        <div class="card card-side bg-base-100 ">

                            <div class="card-body">
                                <h2 class="card-title">the Site about a Car Importer <span className='text-green-500' >  </span> . </h2>
                                <p  >Live Link:- <a className='text-green-500' href='https://assignment-11-4ddf3.web.app/' target='_blank' rel="noreferrer"  >Dhaka's inventory</a>
                                    <Link className='float-right lg:mr-4 mr-2 -mt-5 mb-5' to="/project2">
                                        <button className={`${buttonPrimary}  `} >
                                            Details
                                        </button>
                                    </Link>
                                </p>

                            </div>
                        </div>
                    </div>
                    <img className='w-96' src="https://i.ibb.co/sqrLkVq/dhakas-inventory-ss-full.png" alt="" />



                </div>

            </div>

            <div>
                <div class="card lg:w-[600px] max-w-96 my-5 mx-auto bg-base-100  max-h-[500px] mt-10 overflow-y-auto border-[1px] border-orange-400 rounded-2xl">
                    <div class="card card-side bg-base-100  ">

                        <div class="card-body rounded-xl">


                            <h2 class="card-title">the Site about Apple mac studio seller <span className='text-green-500' >  </span> . </h2>
                            <p  >Live Link:- <a className='text-green-500' href='https://nishads-assignment-9.netlify.app/' target='_blank' rel="noreferrer"  >Your Mac Studio</a>

                                <Link className='float-right lg:mr-4 mr-2' to="/project3">
                                    <button className={`${buttonPrimary} -mt-5 mb-5 `} >
                                        Details
                                    </button>
                                </Link>
                            </p>

                            <img className='w-full rounded-2xl' src="https://i.ibb.co/VN3xnrV/mac-studio-sell.png" alt="" />



                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortFolio;