import React from "react";
import Link from "next/link";
import HistoryIcon from "@mui/icons-material/History";

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
          <h2>آسان بار پلاس</h2>
        </div>
        <HistoryIcon></HistoryIcon>
      </div>
      <div className="flex flex-col  mt-4 mx-3">
        <h3>با آسان بار پلاس سریعتر به راننده برس!</h3>
        <span className="mt-3">
          با فعال کردن آسان بار پلاس بارهات بهتر دیده میشن و سریعتر میتونی به
          راننده برسی.
        </span>
        <div className="flex flex-col">
          <div className="bg-myblue text-white text-center p-2 mt-3 rounded-t-lg">
            پکیج ثبت بار ویژه
          </div>
          <div className="bg-white p-3 flex flex-col items-start gap-3 rounded-b-lg">
            <div className="flex items-center gap-3">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                ارسال بار های شما به صورت پیامکی به تمام رانندگانی که مناسب حمل
                بار شما هستند
              </span>
            </div>
            <div className="flex items-center gap-3">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                ارسال بار های شما به صورت پیامکی به تمام رانندگانی که مناسب حمل
                بار شما هستند
              </span>
            </div>
            <div className="flex items-center gap-3">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                ارسال بار های شما به صورت پیامکی به تمام رانندگانی که مناسب حمل
                بار شما هستند
              </span>
            </div>
            <div className="flex justify-center w-full">
            <button className="bg-myblue text-white py-2 px-3 rounded-lg w-1/4">مشاهده پکیج</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default index;
