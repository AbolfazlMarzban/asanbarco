import React, { useState } from "react";

function Select({ data, title, getLocation,children, placeholder, value, exportValue }: any) {
  return (
    <div className="bg-white border shadow flex items-center justify-between p-3 rounded-md mt-2">
      <div className="flex w-full max-w-fit">

      {children}
      <label htmlFor="" className="mr-1">{title}</label>
      </div>
      <select name="location" id="location" className="mx-3 w-full" value={value} onChange={(ev)=>exportValue(ev.target.value)}>
        <option value="">{placeholder}</option>
        {data.map((item: any, i: any) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      {getLocation && (
        <button>
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
              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Select;
