import React from 'react';

function CargoBox() {
    return (
        <div className='w-full mx-1 my-2 p-2 bg-white border rounded-lg flex'>
            <div className='basis-1/2 flex flex-col items-center'>
                <label htmlFor="">تهران</label>
                <span>تهران</span>
            </div>
            <div className='basis-1/2 flex flex-col items-center'>
            <label htmlFor="">تهران</label>
                <span>تهران</span>
            </div>
        </div>

    );
}

export default CargoBox;