import Link from "next/link";
import React from "react";
import Checkbox from "@/components/UI/checkbox";
import DialogBtn from "@/components/UI/dialogBtn";
import RadioBtn from "@/components/UI/radioBtn";
import Accordion from "@/components/UI/accardion";
import Textbox from "@/components/UI/textbox";
import { useState } from "react";
import SetLocation from "@/components/newCargo/setLocation";
import SetCarrier from "@/components/newCargo/setCarrier";
import CargoType from "@/components/newCargo/cargoType";

function NewCargo() {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showDest, setShowDest] = useState(false);

  const [origin, setOrigin] = useState('')
  const [dest, setDest] = useState('')


  const [showCarrier, setShowCarrier] = useState(false)
  const [carrier, setCarrier] = useState([])

  const [showCargo, setShowCargo] = useState(false)
  const [cargoType, setCargoType] = useState('')

  function selectCarrier(value:any){
    console.log('carrier', value)
    setCarrier(value)
  }
  return (
    <div className="bg-[#f1f5f8] h-screen">
      <div className="top flex flex-row bg-white font-[vazir] p-4 justify-start gap-5 border-b-2 shadow ">
        <Link href={"/cargolist"}>
          <svg
            className="inline-block w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            !--! Font Awesome Free 6.4.2 by @fontawesome -
            https://fontawesome.com License - https://fontawesome.com/license
            (Commercial License) Copyright 2023 Fonticons, Inc. --
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </Link>
        <span>ثبت بار</span>
      </div>
      <div className="flex flex-col items-center bg-[#f1f5f8] justify-start p-2">
        <div className="w-96">
          <DialogBtn
           open={() => setShowOrigin(true)}
           close={() => setShowOrigin(false)}
            title={"مبدأ"}
            value={origin}
            firstIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-myblue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            }
            secondIcon={
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
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          ></DialogBtn>
          <DialogBtn
            title={"مقصد"}
            open={() => setShowDest(true)}
            close={() => setShowDest(false)}
            value={dest}
            firstIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-myblue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            }
            secondIcon={
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            }
          ></DialogBtn>
          <Checkbox title={"صدور بارنامه از طرف آسان بار"} />
          <DialogBtn
            title={"نوع ناوگان و بارگیر"}
            open={()=>setShowCarrier(true)}
            close={()=>setShowCarrier(false)}
            selected={carrier}
            secondIcon={<svg
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>}
          ></DialogBtn>
          <RadioBtn
            title={"کرایه موردنظر شما:"}
            btns={["توافقی", "سرویسی", "تنی"]}
          >
            <div className="flex flex-col">
              <div className="flex items-center">
                  <span className="min-w-max ml-2">کرایه پیشنهادی آسان بار:</span>
                  <div className="flex flex-wrap">
                  {carrier.map((item:any,i) => (
                                      <p className="text-sm text-myblue" key={i}>- {item.parent} , {item.child}</p>
                  ))}
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
</svg>
                      <p className="mr-1">
                        <span className="text-myblue ml-1">1034000</span>
                       تومان
                      </p>
                    </div>
                    <span className="text-xs text-slate-400">
                      به ازای هر سرویس
                    </span>
                </div>
            </div>
          </RadioBtn>
          <hr className="w-full my-3 border-1 border-neutral-300	" />
          <Accordion
            title="وارد کردن اطلاعات بیشتر (اختیاری)"
            detail="با وارد کردن اطلاعات بیشتر راننده ی مناسب خود را سریعتر پیدا کنید"
          >
            <DialogBtn 
               open={() => setShowCargo(true)}
               close={() => setShowCargo(false)}
            title={"نوع بار"} 
            secondIcon={<svg
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>}>
              
            </DialogBtn>
            <DialogBtn title={"وزن بار"} secondIcon={<svg
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>}>
            </DialogBtn>
            <DialogBtn title={"زمان بارگیری"} secondIcon={<svg
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>}>
            </DialogBtn>
            <DialogBtn title={"زمان تخلیه"} secondIcon={<svg
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>}>
            </DialogBtn>
            <DialogBtn title={"شماره اعلام کننده بار"} secondIcon={<svg
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>}>
            </DialogBtn>
            <RadioBtn
              title={"تاریخ بارگیری"}
              btns={["بار امروز", "بار فردا", "بار همه روزه"]}
            ></RadioBtn>
            <Textbox
              title={"توضیحات (اختیاری)"}
              placeholder={
                "در این قسمت میتوانید به ابعاد، بار، ارزش بار و یا هر نوع اطلاعات دیگر بپردازید"
              }
            ></Textbox>
          </Accordion>
          <div className="w-full flex justify-center align-center bg-[#f1f5f8] p-4">
            <button className="flex gap-2 px-3 py-2 bg-orange-400 text-white rounded-xl mx-2">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span>ثبت بار ویژه</span>
            </button>
            <button className="flex gap-2 px-3 py-2 bg-teal-400 text-white rounded-xl mx-2">
              <span>ثبت بار عادی</span>
            </button>
          </div>
        </div>
      </div>
      {showOrigin && (
        <SetLocation
        title={'شهر مبدأ مورد نظر خود را انتخاب کنید'}
          close={()=>setShowOrigin(false)}
          select={(value:any)=>setOrigin(value)}
        ></SetLocation>
      )}
           {showDest && (
        <SetLocation
            title={'شهر مقصد مورد نظر خود را انتخاب کنید'}
          close={()=>setShowDest(false)}
          select={(value:any)=>setDest(value)}
        ></SetLocation>
      )}
      {showCarrier && (
        <SetCarrier
          title={'انتخاب ناوگان مورد نظر'}
          close={()=>setShowCarrier(false)}
          select={(value:any)=>selectCarrier(value)}
        ></SetCarrier>
      )}
      {showCargo && (
        <CargoType
        title={'انتخاب ناوگان مورد نظر'}
        close={()=>setShowCargo(false)} 
        select={(value:any)=>setCargoType(value)}
        ></CargoType>
      )}
    </div>
  );
}

export default NewCargo;
