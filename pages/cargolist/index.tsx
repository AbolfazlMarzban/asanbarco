import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React from 'react';

function CargoList() {
    return (
        <div className='w-full h-screen'>
            <Header></Header>
            <div className='w-full min-h-full flex flex-col items-center justify-center'>
                <img src="/empty-bg.png" alt="" className='w-24' />
            </div>
            <Navbar></Navbar>
        </div>
    );
}

export default CargoList;