import Loading from "@/components/loading";
import { useState, useLayoutEffect } from "react";
import Login from "@/components/login";
import Image from "next/image";
import Link from "next/link";
import axios from "axios"

export default function Home() {
  const [showRef, setShowRef] = useState(false)
  const [showCodeBox, setShowCodeBox] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(true);
  const[otpValue, setOtpValue] = useState('')


  async function sendNumber(){
    try{
      if(phoneNumber.length > 0){
        const res = await axios.post("/api/auth", {data: phoneNumber})
        console.log('res', res.data)
        setOtp(res.data)
        setShowCodeBox(true)
      }
    } catch(error){
      console.log(error)
    }
  }

  async function checkOtp(){
    try{
      if(otpValue.length > 0 && otpValue == otp){
        console.log('gooods')
      }
    } catch(error){
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        {/* <Login></Login> */}
        <div className="h-full w-full flex flex-col items-center justify-center">
      <Image src={"/logo.png"} width={200} height={200} alt=""></Image>

  
      {showCodeBox ? (
      <div className="flex flex-col w-72">
      <label htmlFor="" className="mt-12">
          کد تأییدی که برایتان پیامک شد را اینجا وارد کنید
        </label>
        <input type="number" id="otp" placeholder="کد تأیید" value={otpValue} onChange={(ev)=>setOtpValue(ev.target.value)}
        className="w-64 p-2 mt-4 outline-myblue rounded-lg border border-myblue"
        />
        <div className="w-64 flex flex-row justify-between items-center mt-4">
            <button onClick={()=>setShowCodeBox(false)}>تغییر شماره</button>
            <button className="bg-green-600 text-white flex p-2 rounded-full" onClick={()=>checkOtp()}>
            تأیید کد
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>

        </div>
      </div>

      )
        :
        (
          <div className="flex flex-col w-72">
          <label htmlFor="" className="mt-12">
            برای شروع، شماره موبایل خود را وارد کنید.
          </label>
         {/* {showRef && (
           <input
             type="tel"
             name=""
             id=""
             placeholder="کد معرف را وارد نمایید"
             className="w-64 p-2 mt-4 outline-myblue rounded-lg border border-myblue"
           />
  
         )} */}
           
           <input
            type="tel"
            name=""
            id="phoneNumber"
            placeholder="شماره موبایل"
            className="w-64 p-2 mt-4 outline-myblue rounded-lg border border-myblue"
            onChange={(ev)=>setPhoneNumber(ev.target.value)}
          />
          <p className="mt-4 text-sm">
            با ورود به آسان بار
            <Link href={"/terms"} className="text-myblue">
              {" "}
              شرایط استفاده{" "}
            </Link>
            از آن را پذیرفته اید.
          </p>
          <div className="flex justify-end w-64">
            <button className="bg-green-600 text-white flex mt-4 p-2 rounded-full" onClick={()=>sendNumber()}>
              ورود و دریافت بار
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </div>
        </div>
        )
    }
    </div>
  
      </main>
    );
  }
}
