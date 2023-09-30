import React from "react";
import Dialog from "../UI/dialog";
import CarrierType from "./carrierType";

function SetCarrier({ title, close }: any) {
var carriers = [
    {
        icon: '/traily.png',
        name: 'تریلی',
        active: 120
    },
    {
        icon: '/tak.png',
        name: 'تک',
        active: 82
    },
    {
        icon: '/joft.png',
        name: 'جفت',
        active: 49
    },
    {
        icon: '/khavar.png',
        name: 'خاور و کامیونت',
        active: 396
    },
    {
        icon: '/neisan.png',
        name: 'وانت و نیسان',
        active: 325
    },
    {
        icon: '/others.png',
        name: 'سایر ناوگان ها',
        active: null
    }
]
  function closeDialog() {
    close();
  }
  return (
    <>
      <Dialog title={title} close={() => closeDialog()}>
        <div className="w-full h-full bg-slate-300 p-6">
          <div className="w-full border border-red-300 flex items-center gap-2 p-2 bg-white rounded-lg text-red-300">
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
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p className="text-black text-sm">
              تعداد ناوگان های فعال زیر براساس ناوگان های پیدا شده در شعاع 100
              کیلومتری مبدأ بار شما می باشند.
            </p>
          </div>
          <div className="flex p-2">
            {carriers.map((item, i)=> (
            <div className="basis-1/3" key={i}>
            <CarrierType
                icon={item.icon}
                name={item.name}
                active={item.active}
            ></CarrierType>
            </div>

            ))}
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default SetCarrier;
