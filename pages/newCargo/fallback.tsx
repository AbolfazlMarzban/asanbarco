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
                let cargoData = localStorage.getItem('cargoData')
                let duration = localStorage.getItem('packageDuration')
                            let userID = localStorage.getItem('userID')
                            let data = {
                                "cargoData": cargoData,
                                "duration": duration,
                                "userID": userID
                            }
                            const result = await axios.patch(`/api/packageManage`, data)
                            if(result){
                                localStorage.removeItem('packageDuration')
                                localStorage.removeItem('cargoData')
                                router.push('/myCargo')
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
                <div className='flex flex-col items-center gap-2'>
                <span className='text-green-600 text-xl'>پرداخت شما موفقیت آمیز بود</span>
                <button className='w-64 bg-green-600 text-white p-3 text-center' onClick={()=>paySuccess()}>بازگشت به آسان بار</button>
                </div>
            )
            :
            (
                <div className='flex flex-col items-center gap-2'>                
                <span className='text-red-600 text-xl'>پرداخت شما موفقیت آمیز نبود لطفاً مجدداً تلاش فرمایید</span>
                <button className='w-64 bg-red-600 text-white p-3 text-center' onClick={()=>{
                    localStorage.removeItem('cargoData')
                    localStorage.removeItem('packageItem')
                    router.push('/myCargo')}}>بازگشت به آسان بار</button>

                </div>
            )
        }
        </div>
    );
}

export default index;