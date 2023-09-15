import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Login() {
  const [showRef, setShowRef] = useState(false)
  const [showCodeBox, setShowCodeBox] = useState(false)
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image src={"/logo.png"} width={200} height={200} alt=""></Image>
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
          id=""
          placeholder="شماره موبایل"
          className="w-64 p-2 mt-4 outline-myblue rounded-lg border border-myblue"
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
          <button className="bg-green-600 text-white flex mt-4 p-2 rounded-full" onClick={()=> setShowCodeBox(true)}>
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
        {/* <div className="w-64 flex justify-center mt-8">
          <button className="flex flex-col justify-center items-center text-sm" onClick={()=> setShowRef(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            کد معرف دارید؟
          </button>
        </div> */}
      </div>
      {showCodeBox && (
      <div className="flex flex-col w-72">
      <label htmlFor="" className="mt-12">
          کد تأییدی که برایتان پیامک شد را اینجا وارد کنید
        </label>
        <input type="number" placeholder="کد تأیید"
        className="w-64 p-2 mt-4 outline-myblue rounded-lg border border-myblue"
        />
        <div className="w-64 flex flex-row justify-between items-center mt-4">
            <button>تغییر شماره</button>
            <button className="bg-green-600 text-white flex p-2 rounded-full">
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

      )}
    </div>
  );
}

export default Login;
