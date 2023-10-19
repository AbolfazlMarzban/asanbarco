import React, { useState } from 'react';

function Textbox(
    {
        title,
        placeholder,
        exportValue,
        value
    }:any
) {
    const [inputValue, setInputValue] = useState(value)
    function getValue(value:any){
        setInputValue(value)
        exportValue(value)
    }
    return (
        <div className='w-full flex flex-col my-2'>
            <label htmlFor="" className='text-md mb-2'>{title}</label>
            <textarea name="" id="" placeholder={placeholder} rows={10} className='p-2 bg-white rounded-lg text-sm' value={inputValue} onChange={(ev)=>getValue(ev.target.value)}></textarea>
        </div>
    );
}

export default Textbox;