import React, { useState } from "react";
import Link from "next/link";
import CargoBox from "@/components/cargoList/cargoBox";
import Dialog from "@/components/UI/dialog";

function index() {
  const [display, setDisplay] = useState("cargo");
  const [confirm, setConfirm] = useState(false)
  return (
    <div className="bg-[#f1f5f8] h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
        <div className="flex gap-4">
          <Link href={"/myCargo"}>
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
          <h2>بار</h2>
        </div>
      </div>
      <div className="bg-white flex gap-5 p-4 m-4">
        <button
          onClick={() => setDisplay("cargo")}
          className={`${
            display == "cargo" ? `bg-myblue text-white` : `bg-white text-myblue`
          } p-2 w-1/2 rounded-md`}
        >
          مشخصات بار
        </button>
        <button
          onClick={() => setDisplay("reqs")}
          className={`${
            display == "reqs" ? `bg-myblue text-white` : `bg-white text-myblue`
          } p-2 w-1/2 rounded-md`}
        >
          درخواست ها
        </button>
      </div>
      {display == "cargo" ? (
        <>
          <div className="mx-4">
            <CargoBox></CargoBox>
          </div>
          <div>
            <div className=" mx-4 bg-white border-[1px] rounded-md  ">
              <div className="small_details grid grid-cols-2 justify-items-stretch ">
                <div className="border-b-[1px] border-l-[1px] border-slate-100  px-2 py-3">
                  <h3 className="text-gray-400 text-sm">شماره بار</h3>
                  7702390
                </div>
                <div className="border-b-[1px]  border-slate-100 px-2 py-3 ">
                  <h3 className="text-gray-400 text-sm pb-2">مسافت کل</h3>
                  95 کیلومتر
                </div>
                <div className="border-b-[1px] border-l-[1px] border-slate-100 px-2 py-3 ">
                  <h3 className="text-gray-400 text-sm pb-2">بارگیری</h3>امروز
                </div>
                <div className="border-b-[1px]  border-slate-100  px-2 py-3">
                  <h3 className="text-gray-400 text-sm pb-2">ناوگان</h3>
                  وانت و نیسان، پراید وانت
                </div>
                <div className="border-b-[1px] border-l-[1px] border-slate-100 px-2 py-3 ">
                  <h3 className="text-gray-400 text-sm ">نوع بار</h3>
                  سایر
                </div>
                <div className="border-b-[1px]  border-slate-100  px-2 py-3">
                  <h3 className="text-gray-400 text-sm ">وزن</h3>
                  ظرفیت
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5 align-center bg-[#f1f5f8] p-4">
            <button className="flex gap-2 px-3 py-2 bg-myblue text-white rounded-xl mx-2 w-1/2 justify-center">
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <span>ویرایش بار</span>
            </button>
            <button className="flex gap-2 px-3 py-2 bg-slate-400 text-black rounded-xl mx-2 w-1/2 justify-center">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <span>لغو بار</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className=" mx-4 bg-white border-[1px] rounded-md  ">
            <div className="small_details grid grid-cols-2 justify-items-stretch ">
              <div className="border-b-[1px] border-l-[1px] border-slate-100  px-2 py-3">
                <h3 className="text-gray-400 text-sm">نام راننده</h3>
                علی مرادی
              </div>
              <div className="border-b-[1px]  border-slate-100 px-2 py-3 ">
                <h3 className="text-gray-400 text-sm pb-2">شماره راننده</h3>
                0918341441
              </div>
              <div className="border-b-[1px] border-l-[1px] border-slate-100 px-2 py-3 ">
                <div className="flex items-center gap-4 cursor-pointer" onClick={()=>setConfirm(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 border-2 border-myblue p-1 rounded-full text-myblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-myblue">تأیید راننده</span>
                </div>
              </div>
              <div className="border-b-[1px]  border-slate-100  px-2 py-3">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 border-2 border-myblue p-1 rounded-full text-myblue"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <span className="text-myblue">تماس با راننده</span>
                </div>
              </div>
            </div>
          </div>
          {confirm && (
            <Dialog
                title={'تأیید راننده'}
                close={()=>setConfirm(false)}
            >
              <div className="flex flex-col px-3 py-2">
                <span>آیا این بار را حمل خواهد کرد؟</span>
                <div className="flex gap-3 mx-3 my-2">
                  <button className="bg-slate-300 rounded-mdc w-1/2">خیر</button>
                  <button className="bg-myblue text-white rounded-md w-1/2">بله</button>
                </div>
              </div>
            </Dialog>
          )}
        </>
      )}
    </div>
  );
}

export default index;
