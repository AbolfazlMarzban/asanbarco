import React from "react";

function CargoBox({data}:any) {
  function isSpecial(){
    console.log('data', data)
    return true
  }
  return (
    <div className="flex flex-col w-full mx-1 my-2 p-2 bg-white border rounded-lg relative">
      <div className="flex pb-4">
        <div className="basis-1/2 flex flex-col items-center border-l-2 py-3">
          <label htmlFor="">{data.origin.split(',')[1]}</label>
          <span>{data.origin.split(',')[0]}</span>
        </div>
        <div className="basis-1/2 flex flex-col items-center py-3">
          <label htmlFor="">{data.desination.split(',')[1]}</label>
          <span>{data.desination.split(',')[0]}</span>
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
          {data.carrier.map((item:any, i:any) => (            
          <span key={i}>{item.parent}, {item.child}</span>
          ))}
        </div>
        <div className="basis-1/2 flex items-center gap-4">
          <div className="text-myblue border-2 border-myblue w-10 h-10 p-0 text-center rounded-full flex items-center justify-center">
            0
          </div>
          <span>تعداد در خواست ها</span>
        </div>
      </div>
      <div className="absolute middle border-2 border-myblue p-1 left-[49%] top-[18%] z-10 rounded-md bg-white">
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      {isSpecial() && (
      <div className="flex items-center p-2 gap-2 text-yellow-400 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>

          <span>ویژه</span>
        </div>
      )}
    </div>
  );
}

export default CargoBox;
