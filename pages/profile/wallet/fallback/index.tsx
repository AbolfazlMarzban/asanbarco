import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

function index() {
    const [status, setStatus]:any = useState(null)
    const router: any = useRouter()

    async function paySuccess(){
        try{
            if(!status){
                setStatus('OK')
                let payAmount = localStorage.getItem('payAmount')
                            let userID = localStorage.getItem('userID')
                            const result = await axios.post(`/api/wallet?payAmount=${payAmount}&userID=${userID}`)
                            if(result){
                                localStorage.removeItem('payAmount')
                                router.push('/profile')
                            }
            }
        } catch(error){
            console.log(error)
        }
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {router.query.Status == "OK" ? 
            (
                <div className='flex flex-col gap-2'>
                <span className='text-green-600 text-xl'>پرداخت شما موفقیت آمیز بود</span>
                <button className='w-64 bg-green-600 text-white p-3 text-center' onClick={()=>paySuccess()}>بازگشت به آسان بار</button>
                </div>
            )
            :
            (
                <div className='flex flex-col gap-2'>                
                <span className='text-red-600 text-xl'>پرداخت شما موفقیت آمیز نبود لطفاً مجدداً تلاش فرمایید</span>
                <button className='w-64 bg-red-600 text-white p-3 text-center' onClick={()=>router.push('/profile')}>بازگشت به آسان بار</button>

                </div>
            )
        }
        </div>
    );
}

export default index;