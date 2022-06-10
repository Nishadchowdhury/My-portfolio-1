import React from 'react';

const FloatingDiv = ({ image, txt1, txt2 }) => {
    return (
        <div className="FloatingDiv bg-white shadow-2xl  rounded-2xl  flex justify-evenly gap-3 items-center py-3 px-4">
            <img className='w-14' src={image} alt="" />
            <span>
                {txt1} <br />
                {txt2}
            </span>
        </div>
    );
};

export default FloatingDiv;