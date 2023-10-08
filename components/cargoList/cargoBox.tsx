import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function CargoBox() {
    return (
        <div className='flex flex-col w-full mx-1 my-2 p-2 bg-white border rounded-lg'>
        <div className='flex pb-4'>
            <div className='basis-1/2 flex flex-col items-center border-l-2'>
                <label htmlFor="">تهران</label>
                <span>تهران</span>
            </div>
            <div className='basis-1/2 flex flex-col items-center'>
            <label htmlFor="">تهران</label>
                <span>تهران</span>
            </div>
        </div>
            <div className='flex border-t-2 justify-between'>
                <div className='basis-1/2 flex'>
                    <LocalShippingOutlinedIcon className='border border-myblue-2'></LocalShippingOutlinedIcon>
                </div>
            </div>
        </div>

    );
}

export default CargoBox;