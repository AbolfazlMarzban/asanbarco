import React from "react";
import Link from "next/link";

function index() {
  return (
    <div className="w-full h-screen bg-mybg">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between w-full">
        <div className="flex gap-4">
          <Link href={"/profile"}>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <h2>معرفی به دوستان</h2>
        </div>
      </div>
      <div className="flex flex-col h-3/4 justify-between items-center mt-6 mx-3">
        <div className="text-center px-6">
            <p className="text-xl font-bold">با دعوت از دوستان خود 10 امتیاز هدیه بگیرید</p>
            <p className="text-slate-600 text-sm mt-4">لینک دعوت یا کد معرفی خود را برای دوستانتان ارسال کنید و به ازای هر ثبت نام موفق و ثبت بار توسط دوستان خود در آسان بار 
                10 امتیاز هدیه دریافت کنید
            </p>
        </div>
            <button className="bg-green-400 text-white rounded-lg w-1/2 p-3 mt-10">دعوت از دوستان</button>
      </div>
    </div>
  );
}

export default index;
