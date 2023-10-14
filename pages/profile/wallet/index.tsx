import React from "react";
import Link from "next/link";
import Image from "next/image";
import wallet from "@/public/wallet.png";
import { useState } from "react";

function index() {
  const [display, setDisplay] = useState("pay");
  const [suggested, setSuggested] = useState("");
  const moneyList = [
    "5,000",
    "10,000",
    "20,000",
    "30,000",
    "40,000",
    "50,000",
    "100,000",
    "200,000",
  ];
  return (
    <div className="w-full h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
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
          <h2>کیف پول</h2>
        </div>
      </div>
      <div className="flex flex-col items-center w-full p-2">
        <div className="flex items-center justify-between bg-myblue text-white mt-5 w-full p-4 rounded-xl">
          <div className="w-1/2">
            <Image src={wallet} alt=""></Image>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <span>موجودی کیف پول شما:</span>
            <span>0 تومان</span>
          </div>
        </div>
        <div className="bg-cyan-100 rounded-xl flex gap-5 p-2 m-4 w-full">
          <button
            onClick={() => setDisplay("pay")}
            className={`${
              display == "pay" ? `bg-white` : ``
            } text-myblue p-2 w-1/2 rounded-md`}
          >
            افزایش اعتبار
          </button>
          <button
            onClick={() => setDisplay("history")}
            className={`${
              display == "history" ? `bg-white ` : ``
            } text-myblue p-2 w-1/2 rounded-md`}
          >
            لیست تراکنش ها
          </button>
        </div>
        {display == "pay" ? (
          <div className="flex flex-col items-start w-full">
            <label htmlFor="">مبالغ پیشنهادی:</label>
            <div className="flex flex-wrap w-full justify-center">
              {moneyList.map((item) => (
                <div
                  className="basis-1/4  p-2"
                  onClick={() => setSuggested(item)}
                >
                  <div
                    className={`${
                      suggested == item ? `bg-teal-600 text-white` : ``
                    } flex flex-col items-center cursor-pointer border border-teal-600 rounded-xl py-2`}
                  >
                    <span className="text-sm">{item}</span>
                    <span className="text-sm">تومان</span>
                  </div>
                </div>
              ))}
            </div>
            <label htmlFor="">مبالغ دلخواه:</label>
            <div className="flex items-stretch w-full gap-2 mt-2">
              <div className="w-1/4 bg-green-200 text-green-600 text-center flex justify-center items-center p-2 rounded-xl">
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
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>
              <div className="w-1/2">
                <input type="number" className="w-full border-2 border-teal-600 rounded-xl text-center h-full" />
              </div>
              <div className="w-1/4 bg-red-200 text-red-600 text-center flex justify-center items-center p-2 rounded-xl">
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
                    d="M18 12H6"
                  />
                </svg>
              </div>
            </div>
            <button className="bg-teal-600 text-white rounded-lg w-full p-2 mt-10">
          پرداخت
        </button>
          </div>
        ) : (
          <>
            <label htmlFor="">لیست تراکنش ها</label>
          </>
        )}
  
      </div>
    </div>
  );
}

export default index;
