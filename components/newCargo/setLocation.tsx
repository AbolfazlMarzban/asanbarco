import React from "react";
import Dialog from "../UI/dialog";
import {useLayoutEffect, useState} from "react";
import provinces from "@/helpers/provinces.json"
import cities from "@/helpers/cities.json"

function SetLocation({ close, select, title }: any) {
    const [city, setCity] = useState([])
    const [searchInput, setSearchInput] = useState('')
    function selectCity(ev:any){
        setCity(ev.target.value)
        select(ev.target.value)
        close()
    }
  function closeDialog() {
    close();
  }
  let cityList: any = cities.map(item => {
    return{
        id: item.id, 
        name: item.name,
        province: provinces.find(pr => pr.id == item.province_id)?.name
    }
})
if(searchInput.length > 0){
  cityList = cityList.filter((item:any) => item.name.includes(searchInput))
}
  return (
    <>
      <Dialog
        title={title}
        close={() => closeDialog()}
      >
        <div className="p-6">
        <div className="flex p-2 w-full border border-1 rounded-lg mb-2">
          <input type="text" placeholder="جستجو کنید" className="w-full outline-0" onChange={(ev)=>setSearchInput(ev.target.value)}/>
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
        {cityList.map((item:any) => (
            <div className="flex gap-2 my-1">
                <input type="radio" name='radio' id={item.id} value={[item.name, item.province]} onClick={(ev) => selectCity(ev)}/>
                <p>
                    <span>{item.province}</span>,<span>{item.name}</span>
                </p>
            </div>
        ))}
        </div>
      </Dialog>
    </>
  );
}

export default SetLocation;
