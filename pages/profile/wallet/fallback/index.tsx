import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

function index() {
    const [status, setStatus] = useState(null)
    const router: any = useRouter()
    console.log('router', router)
    useEffect(()=>{
        if(router.query.Status == "OK"){
            (async()=>{
                let payAmount = localStorage.getItem('payAmount')
                let userID = localStorage.getItem('userID')
                const result = await axios.post(`/api/wallet?payAmount=${payAmount}&userID=${userID}`)
                if(result){
                    localStorage.removeItem('payAmount')
                }
            })()
        }
    }, [])
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {router.query.Status == "OK" ? 
            (
                <span className='text-green-600 text-xl'>پرداخت شما موفقیت آمیز بود</span>
            )
            :
            (
                <span className='text-red-600 text-xl'>پرداخت شما موفقیت آمیز نبود لطفاً مجدداً تلاش فرمایید</span>
            )
        }
            <Navbar></Navbar>
        </div>
    );
}

export default index;