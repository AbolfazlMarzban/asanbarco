import React from "react";
import Link from "next/link";
import CargoBox from "@/components/cargoList/cargoBox";

function index() {
  return (
    <div className="bg-[#f1f5f8] h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
        <div className="flex gap-4">
          <Link href={"/myCargo"}>
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
          <h2>بار</h2>
        </div>
      </div>
      <div className="bg-white flex gap-5 p-4 m-4">
        <button className="bg-myblue text-white p-2 w-1/2 rounded-md">مشخصات بار</button>
        <button className="bg-white text-myblue p-2 w-1/2 rounded-md">درخواست ها</button>
      </div>
      <div className="mx-4">
        <CargoBox></CargoBox>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default index;
