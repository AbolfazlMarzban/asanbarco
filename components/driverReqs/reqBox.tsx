import React from "react";

function ReqBox() {
  return (
    <div className="bg-white border my-2 flex p-4 items-center">
      <div className="p-2 bg-slate-300 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
      <div className="flex flex-col w-full px-3">
            <div className="flex justify-between items-center w-full">
                <label htmlFor="" className="font-bold">درخواست راننده</label>
                <span className="text-slate-400 text-xs">2 دقیقه پیش</span>
            </div>
            <p className="text-slate-600">راننده درخواست حمل بار شما را دارد. همین حالا با او تماس بگیرید</p>
      </div>
    </div>
  );
}

export default ReqBox;
