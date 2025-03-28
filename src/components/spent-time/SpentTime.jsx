import React from 'react';

const SpentTime = ({readTime}) => {
    return (
        <div className='text-[#6047EC] text-center border-1 border-[#6047EC] bg-[#6047EC1A] px-12 py-6 rounded-lg'>
            <h2 className='font-bold text-xl'>Spent Time on read: {readTime} Minute </h2>
        </div>
    );
};

export default SpentTime;