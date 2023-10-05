import React from "react";
import Dialog from "../UI/dialog";
import CarrierType from "./carrierType";
import { useState } from "react";

function SetCarrier({ title, close, select }: any) {
  const [carrierType, setCarrierType]: any = useState(null);
  const [carrierChildren, setcarrierChildren] = useState([]);
  function selectCarrierType(id: any) {
    var cari: any = carriers.find((item) => item.id == id);
    setCarrierType(cari);
  }
  function selectChildren(ev: any, child: any) {
    if (ev.target.checked) {
      var parent = carriers.find(item => item.children.includes(child))?.name 
      let item = {
        parent: parent,
        child: child
      }
      var arr:any = carrierChildren
      arr.push(item)
      setcarrierChildren(arr)
    }
  }
  function saveAndSelect(){
    select(carrierChildren)
    close()
  }
  var carriers = [
    {
      icon: "/traily.png",
      name: "تریلی",
      active: 120,
      id: 0,
      children: [
        "کفی",
        "بغلدار",
        "کانتینردار",
        "کمپرسی",
        "ترانزیت",
        "یخچال دار",
        "تیغه دار(کانتینر بر)",
        "تانکر مخزن دار",
      ],
    },
    {
      icon: "/tak.png",
      name: "تک",
      active: 82,
      id: 1,
      children: ["اطاقدار", "کمپرسی", "مسقف", "یخچال دار", "تانکر مخزن دار"],
    },
    {
      icon: "/joft.png",
      name: "جفت",
      active: 49,
      id: 2,
      children: ["اطاق دار", "کمپرسی", "مسقف", "تانکر مخزن دار", "یخچال دار"],
    },
    {
      icon: "/khavar.png",
      name: "خاور و کامیونت",
      active: 396,
      id: 3,
      children: [
        "اطاقدار",
        "کمپرسی",
        "مسقف",
        "یخچال دار",
        "تانکر مخزن دار",
        "911",
      ],
    },
    {
      icon: "/neisan.png",
      name: "وانت و نیسان",
      active: 325,
      id: 4,
      children: [
        "پراید وانت",
        "پیکان وانت ",
        "نیسان",
        "آریسان",
        "نیسان یخچالی",
      ],
    },
    {
      icon: "/others.png",
      name: "سایر ناوگان ها",
      active: null,
      id: 5,
      children: [
        "تانکر مخزن دار",
        "بوژی",
        "کمرشکن",
        "بونکر",
        "جرثقیل دار",
        "جانبو",
        "میکسر",
      ],
    },
  ];
  function closeDialog() {
    close();
  }
  return (
    <>
      <Dialog title={title} close={() => closeDialog()}>
        <div className="w-full h-full bg-slate-300 p-6 overflow-auto">
          <div className="w-full border border-red-300 flex items-center gap-2 p-2 bg-white rounded-lg text-red-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p className="text-black text-sm">
              تعداد ناوگان های فعال زیر براساس ناوگان های پیدا شده در شعاع 100
              کیلومتری مبدأ بار شما می باشند.
            </p>
          </div>
          <div className="flex flex-wrap items-stretch p-2">
            {carriers.map((item, i) => (
              <div className="basis-1/3 my-2 cursor-pointer" key={i}>
                <CarrierType
                  icon={item.icon}
                  name={item.name}
                  active={item.active}
                  id={item.id}
                  selectItem={(id: any) => selectCarrierType(id)}
                ></CarrierType>
              </div>
            ))}
          </div>
          <hr className="w-full" />
          <div>
            {carrierType?.children.map((child: any, i: any) => (
              <div
                className="flex p-2 bg-white my-2 rounded-lg justify-between items-center"
                key={i}
              >
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="ml-2"
                    onChange={(ev: any) =>
                      selectChildren(ev, child)
                    }
                  />
                  <label htmlFor="">{child}</label>
                </div>
                <span className="text-xs text-slate-400">21 ناوگان فعال</span>
              </div>
            ))}
          </div>
          {carrierType && (
            <div className="flex justify-center items-center mt-5">
              <button className="w-full px-4 py-2 bg-green-300 text-white rounded-lg" onClick={()=>saveAndSelect()}>
                ثبت و ادامه
              </button>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}

export default SetCarrier;
