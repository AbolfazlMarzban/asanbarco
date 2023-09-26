import Link from "next/link";
import React from "react";
import Select from "@/components/UI/select";
import Checkbox from "@/components/UI/checkbox";
import DialogBtn from "@/components/UI/dialogBtn";
import RadioBtn from "@/components/UI/radioBtn";
import Accordion from "@/components/UI/accardion";
import Textbox from "@/components/UI/textbox";

function NewCargo() {
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
          <Select
            title={"مبدأ"}
            data={[]}
            getLocation={true}
            placeholder={"استان و شهر موردنظر خود را وارد کنید"}
          >
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
          </Select>
          <Select
            title={"مقصد"}
            data={[]}
            placeholder={"استان و شهر موردنظر خود را وارد کنید"}
          >
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
          </Select>
          <Checkbox title={"صدور بارنامه از طرف آسان بار"} />
          <DialogBtn title={"نوع ناوگان و بارگیر"} target={""}></DialogBtn>
          <RadioBtn
            title={"کرایه موردنظر شما:"}
            btns={["توافقی", "سرویسی", "تنی"]}
          ></RadioBtn>
          <hr className="w-full my-3 border-1 border-neutral-300	" />
          <Accordion
            title="وارد کردن اطلاعات بیشتر (اختیاری)"
            detail="با وارد کردن اطلاعات بیشتر راننده ی مناسب خود را سریعتر پیدا کنید"
          >
            <DialogBtn title={"نوع بار"} target={""}></DialogBtn>
            <DialogBtn title={"وزن بار"} target={""}></DialogBtn>
            <DialogBtn title={"زمان بارگیری"} target={""}></DialogBtn>
            <DialogBtn title={"زمان تخلیه"} target={""}></DialogBtn>
            <DialogBtn
              title={"شماره اعلام کننده بار"}
              target={""}
            ></DialogBtn>
            <RadioBtn
              title={"تاریخ بارگیری"}
              btns={["بار امروز", "بار فردا", "بار همه روزه"]}
            ></RadioBtn>
            <Textbox
              title={'توضیحات (اختیاری)'}
              placeholder={'در این قسمت میتوانید به ابعاد، بار، ارزش بار و یا هر نوع اطلاعات دیگر بپردازید'}
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
    </div>
  );
}

export default NewCargo;
