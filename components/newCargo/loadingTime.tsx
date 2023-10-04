import React from 'react';
import Dialog from '../UI/dialog';
import {useState} from "react";

function LoadingTime({title, select, close}:any) {
    const [searchInput, setSearchInput] = useState("");
    var times = [
        "تا ساعت 14",
        "تا ساعت 17",
        "تا ساعت 23",
        "کل روز",
      ];
      function selectTime(ev:any){
        select(ev.target.value)
        close()
      }
      if (searchInput.length > 0) {
        times = times.filter((item) => item.includes(searchInput));
      }
    return (
    <>
        <Dialog
            title={title}
            close={()=>close()}
        >
               <div className="p-6">
          <div className="flex p-2 w-full border border-1 rounded-lg mb-2">
            <input
              type="text"
              placeholder="جستجو کنید"
              className="w-full outline-0"
              onChange={(ev) => setSearchInput(ev.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          {times.map((item, i) => (
            <div className="flex gap-2 my-1" key={i}>
              <input
                type="radio"
                name="cargoType"
                value={item}
                onClick={(ev) => selectTime(ev)}
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
          </div>
        </Dialog>
    </>
    );
}

export default LoadingTime;