import React from 'react';

function CarrierType({icon, name, active, id , selectItem}:any) {
    function select(){
        selectItem(id)
    }
    return (
        <div className='flex flex-col bg-white p-2 rounded-xl justify-center items-center mx-2' onClick={()=>select()}>
            {/* {icon} */}
            <img src={icon} alt="" className='max-w-sm w-32'/>
            <label htmlFor="" className='text-sm mt-2'>{name}</label>
            {active && (
            <p className='mt-2 text-sm'>
                <span className='ml-1'>{active}</span>
                ناوگان فعال
            </p>

            )}
        </div>
    );
}

export default CarrierType;