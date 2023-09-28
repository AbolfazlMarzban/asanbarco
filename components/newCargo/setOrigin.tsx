import React from "react";
import Dialog from "../UI/dialog";
import {useLayoutEffect} from "react";
import axios from "axios";

function SetOrigin({ close }: any) {
  function closeDialog() {
    close();
  }
  useLayoutEffect( ()=>{
    fetch('https://iran-locations-api.vercel.app/api/v1/cities?state=تهران')
    .then(response => response.json())
    .then(json => console.log(json));
   
}, [])
  return (
    <>
      <Dialog
        title={"شهر مبدأ مورد نظر خود را انتخاب کنید"}
        close={() => closeDialog()}
      >
        <div className="flex p-2 w-full border border-1 rounded-lg mb-2">
          <input type="text" placeholder="جستجو کنید" className="w-full outline-0"/>
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

      </Dialog>
    </>
  );
}

export default SetOrigin;
