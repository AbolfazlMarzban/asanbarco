import React from 'react';

function Textbox(
    {
        title,
        placeholder
    }:any
) {
    return (
        <div className='w-full flex flex-col my-2'>
            <label htmlFor="" className='text-md mb-2'>{title}</label>
            <textarea name="" id="" placeholder={placeholder} rows={10} className='p-2 bg-white rounded-lg text-sm'></textarea>
        </div>
    );
}

export default Textbox;