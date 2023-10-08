import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function CargoBox() {
  return (
    <div className="flex flex-col w-full mx-1 my-2 p-2 bg-white border rounded-lg">
      <div className="flex pb-4">
        <div className="basis-1/2 flex flex-col items-center border-l-2">
          <label htmlFor="">تهران</label>
          <span>تهران</span>
        </div>
        <div className="basis-1/2 flex flex-col items-center">
          <label htmlFor="">تهران</label>
          <span>تهران</span>
        </div>
      </div>
      <div className="flex border-t-2 justify-between pt-2">
        <div className="basis-1/2 flex items-center gap-4">
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
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <span>وانت و نیسان، پراید وانت</span>
        </div>
        <div className="basis-1/2 flex items-center gap-4">
            <div className="text-myblue border-2 border-myblue w-10 h-10 p-0 text-center rounded-full flex items-center justify-center">0</div>
          <span>تعداد در خواست ها</span>
        </div>
      </div>
    </div>
  );
}

export default CargoBox;
