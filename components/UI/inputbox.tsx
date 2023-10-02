import React, { Children } from "react";
import { useState } from "react";

function Inputbox({ title, value, firstIcon, secondIcon }: any) {
  const [inputValue, setInputValue] = useState(value);


  return (
    <div className="bg-white border shadow flex items-center justify-between p-3 rounded-md mt-2">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            {firstIcon}

            <label htmlFor="" className="mr-1">
              {title}:
            </label>
            <input type="tel" value={inputValue} onChange={(ev)=>setInputValue(ev.target.value)}/>
          </div>
          {secondIcon}
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
