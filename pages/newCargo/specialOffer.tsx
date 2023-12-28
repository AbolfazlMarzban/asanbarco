import React from "react";
import Link from "next/link";
import HistoryIcon from "@mui/icons-material/History";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Inputbox from "@/components/UI/inputbox";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ReverseAccordion from "@/components/UI/reverseAccordion";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function SpecialOffer() {
  const [data, setData] = useState({});
  const [subscription, setSubscription] = useState("");
  const [payAmount, setPayAmount]: any = useState(null);
  const [offCode, setOffode] = useState("");
  const [cargoData, setCargoData] = useState({});
  const [total, setTotal] = useState(0);
  const [getFromWallet, setGetFromWallet] = useState(false);
  const [acclikced, setAcclicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let cargo: any = localStorage.getItem("cargoData");
    if (cargo) {
      setCargoData(cargo);
    }
    (async () => {
      const id = localStorage.getItem("userID");
      const result = await axios.get(`/api/wallet?userID=${id}`);
      let sum = 0;
      result.data.forEach((item: any) => (sum += item.amount));
      setTotal(sum);
    })();
  }, []);
  function selectMonthly() {
    setSubscription("monthly");
    setPayAmount(120000);
    if (total > 120000) {
      setGetFromWallet(true);
    }
  }
  function selectWeekly() {
    setSubscription("weekly");
    setPayAmount(40000);
    if (total > 40000) {
      setGetFromWallet(true);
    }
  }
  async function buyPackage() {
    try {
      const id = localStorage.getItem("userID");
      let data: any = {
        duration: subscription,
        userID: id,
        cargoData: cargoData,
      };

      if (total > payAmount) {
        data.walletPay = payAmount;
      } else {
        data.payAmount = payAmount - total;
        data.walletPay = total;
      }
      localStorage.setItem("packageDuration", subscription);
      const result = await axios.post(`/api/packageManage`, data);
      if (result.data.path) {
        console.log("result", result);
        router.push(result.data.path);
      }
    } catch (error) {
      console.log(error);
    }
  }
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
        <div
          className="bg-white hover:bg-myblue hover:text-white border-2 rounded-lg flex flex-col px-8 py-6 justify-center items-center cursor-pointer"
          onClick={() => selectMonthly()}
        >
          <span className="text-xs mb-3">120,000 تومان</span>
          <p className="text-lg">اشتراک ماهیانه</p>
        </div>
        <div
          className="rounded-lg flex flex-col px-8 py-6 justify-center items-center border-2 bg-white cursor-pointer hover:bg-myblue hover:text-white"
          onClick={() => selectWeekly()}
        >
          <span className="text-xs mb-3">40,000 تومان</span>
          <p className="text-lg">اشتراک هفتگی</p>
        </div>
      </div>
      <div className="flex flex-col px-3 mt-4">
        <label htmlFor="" className="text-lg">
          توضیحات:
        </label>
        <p className="text-slate-600 text-sm my-2">
          با خرید پکیج بارهای شما بهتر به دست رانندگان خواهد رسید و شانس دیده
          شدن بار شما 10 برابر خواهد شد
        </p>
        <div className="border border-blue-600 p-3 mt-2 rounded-lg flex flex-col bg-white">
          <label htmlFor="" className="text-lg text-myblue">
            ویژگی ها و امکانات:
          </label>
          <ul className="mt-2">
            <li className="my-2">
              <TaskAltIcon className="text-myblue ml-2"></TaskAltIcon>
              <span className="text-sm">
                ارسال بارهای شما به صورت پیامکی به تمام رانندگانی که مناسب حمل
                بار شما هستند
              </span>
            </li>
            <li className="my-2">
              <TaskAltIcon className="text-myblue ml-2"></TaskAltIcon>
              <span className="text-sm">
                نمایش فاصله حدودی رانندگان تا مبدأ بارهای شما
              </span>
            </li>
            <li className="my-2">
              <TaskAltIcon className="text-myblue ml-2"></TaskAltIcon>
              <span className="text-sm">
                اضافه شدن لوگو و عکس اختصاصی شما به بارها
              </span>
            </li>
          </ul>
        </div>
        <Inputbox
          firstIcon={
            <ConfirmationNumberIcon className="text-green-600"></ConfirmationNumberIcon>
          }
          secondIcon={
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          }
          title={"کد تخفیف"}
          exportValue={(value: any) => setOffode(value)}
        ></Inputbox>
      </div>
      {subscription.length > 0 && (
        <div className="absolute bottom-0 bg-white w-full">
          <ReverseAccordion
            actived={(value: any) => setAcclicked(true)}
            clicked={acclikced}
            title={
              <>
                {acclikced ? (
                  <>
                    <button
                      className="bg-emerald-300 text-white rounded-lg px-10 w-full p-3"
                      onClick={() => buyPackage()}
                    >
                      خرید پکیج
                    </button>
                  </>
                ) : (
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center items-start">
                      <label htmlFor="" className="text-sm">
                        مبلغ قابل پرداخت:
                      </label>
                      <span className="text-xs text-slate-400">
                        {Math.round(1.09 * payAmount).toLocaleString("en-us")}{" "}
                        تومان
                      </span>
                    </div>
                    <button
                      className="bg-emerald-300 text-white rounded-lg px-10"
                      onClick={() => buyPackage()}
                    >
                      خرید پکیج
                    </button>
                  </div>
                )}
              </>
            }
          >
            <div className="flex flex-col pt-3 px-4 gap-2  border-t-2">
              <span
                className="cursor-pointer w-full fill-[#212529]  dark:fill-white h-5 w-5 flex justify-center shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300"
                onClick={() => setAcclicked(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <span className="text-center text-sm text-emerald-400">
                پرداختی های شما:
              </span>
              <div className="flex justify-between my-2">
                <span className="text-slate-400 text-sm">مبلغ کل</span>
                <span className="text-black text-sm">{payAmount} تومان</span>
              </div>
              {offCode.length > 0 && (
                <div className="flex justify-between my-2">
                  <span className="text-slate-400 text-sm">تخفیف شما</span>
                  <span className="text-black text-sm">0 تومان</span>
                </div>
              )}

              <div className="flex justify-between my-2">
                <span className="text-slate-400 text-sm">ارزش افزوده</span>
                <span className="text-black text-sm">
                  {0.09 * payAmount} تومان
                </span>
              </div>
              <div className="flex justify-between my-2">
                <span className="text-slate-400 text-sm">کسر از کیف پول</span>
                <span className=" text-smtext-black">
                  {getFromWallet
                    ? Math.round(1.09 * payAmount).toLocaleString("en-us")
                    : total}{" "}
                  تومان
                </span>
              </div>
              <hr />
              <div className="flex justify-between mt-2">
                <span className="text-slate-400 text-sm">مبلغ قابل پرداخت</span>
                <span className="text-emerald-300 text-sm">
                  {Math.round(1.09 * payAmount).toLocaleString("en-us")} تومان
                </span>
              </div>
            </div>
          </ReverseAccordion>
        </div>
      )}
    </div>
  );
}

export default SpecialOffer;
