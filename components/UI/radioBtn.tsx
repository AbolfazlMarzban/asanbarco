import React from 'react';

function RadioBtn({
    title,
    btns
}:any) {
    return (
        <div className="bg-white border shadow flex flex-col p-3 rounded-md mt-2">
            {title}
            <div className='flex justify-between items-center mt-2'>
                {btns.map((item:any) =>(
                    <div className='flex items-center'>
                        <input type="radio" name={item} id={item} value={item} />
                        <label htmlFor="" className='mr-1'>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RadioBtn;