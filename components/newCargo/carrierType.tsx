import React from 'react';

function CarrierType({icon, name, active}:any) {
    return (
        <div className='flex flex-col bg-white p-2 rounded-lg justify-center items-center mx-2'>
            {/* {icon} */}
            <img src={icon} alt="" />
            <label htmlFor="" className='text-sm mt-2'>{name}</label>
            <p className='mt-2 text-sm'>
                <span className='ml-1'>{active}</span>
                ناوگان فعال
            </p>
        </div>
    );
}

export default CarrierType;