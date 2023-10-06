import React from "react";
import Link from "next/link";
import HistoryIcon from '@mui/icons-material/History';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Inputbox from "@/components/UI/inputbox";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ReverseAccordion from "@/components/UI/reverseAccordion";

function SpecialOffer() {
  return (
    <div className="bg-[#f1f5f8] h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
        <div className="flex gap-4">
          <Link href={"/newCargo"}>
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
          <h2>پکیج ثبت بار ویژه</h2>
        </div>
        <div className="text-white">
          <HistoryIcon></HistoryIcon>
        </div>
      </div>
      <div className="flex p-4 gap-5 justify-center">
            <div className="bg-myblue text-white rounded-lg flex flex-col px-8 py-6 justify-center items-center ">
                <span className="text-xs mb-3">120,000 تومان</span>
                <p className="text-lg">اشتراک ماهیانه</p>
            </div>
            <div className="rounded-lg flex flex-col px-8 py-6 justify-center items-center border bg-white">
            <span className="text-xs mb-3 text-myblue">40,000 تومان</span>
                <p className="text-lg">اشتراک هفتگی</p>
            </div>
      </div>
      <div className="flex flex-col px-3">
            <label htmlFor="" className="text-lg">توضیحات:</label>
            <p className="text-slate-600">
                با خرید پکیج بارهای شما بهتر به دست رانندگان خواهد رسید و شانس دیده شدن بار شما 10 برابر خواهد شد
            </p>
            <div className="border border-blue-600 p-3 mt-2 rounded-lg flex flex-col bg-white">
                <label htmlFor="" className="text-lg text-myblue">ویژگی ها و امکانات:</label>
                <ul className="mt-2">
                    <li className="my-2">
                        <TaskAltIcon className="text-myblue ml-2"></TaskAltIcon> 
                        <span>ارسال بارهای شما به صورت پیامکی به تمام  رانندگانی که مناسب حمل بار شما هستند</span>
                    </li>
                    <li className="my-2">
                        <TaskAltIcon className="text-myblue ml-2"></TaskAltIcon> 
                        <span>نمایش فاصله حدودی رانندگان تا مبدأ بارهای شما</span>
                    </li>
                    <li className="my-2">
                        <TaskAltIcon className="text-myblue ml-2"></TaskAltIcon> 
                        <span>اضافه شدن لوگو و عکس اختصاصی شما به بارها</span>
                    </li>
                </ul>
            </div>
            <Inputbox
                firstIcon={
                    <ConfirmationNumberIcon className="text-green-600"></ConfirmationNumberIcon>
                }
                title={'کد تخفیف'}
            >
            </Inputbox>
      </div>
      <div className="absolute bottom-0 bg-white w-full">
                <ReverseAccordion
                  title={
                    <div className="flex gap-5 justify-center w-full">
                      <div className="flex flex-col justify-center">
                          <label htmlFor="">مبلغ قابل پرداخت</label>
                          <span>130,800 تومان</span>
                      </div>
                      <button className="bg-blue-300 text-white rounded-lg px-6 py-2">
                          خرید پکیج
                      </button>
                    </div>
                  }
                >

                </ReverseAccordion>
      </div>
    </div>
  );
}

export default SpecialOffer;
