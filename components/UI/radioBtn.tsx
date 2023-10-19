import React from "react";
import { useState } from "react";

function RadioBtn({ title, btns , exportValue, children, timePicker  }: any) {
  const [radioValue, setRadioValue] = useState("");
    function selectRadio(ev:any){
        setRadioValue(ev.target.value)
        exportValue(ev.target.value)        
    }   

  return (
    <>
      <div className="bg-white border shadow flex flex-col p-3 rounded-md mt-2">
        <div>{children}</div>
        <label htmlFor="" className="text-sm mb-2">
          {title}
        </label>
        <div className="flex justify-start gap-4 items-center mt-2">
          {btns.map((item: any) => (
            <div className="flex items-center">
              <input type="radio" name="radio" id={item} value={item} onClick={(ev) => selectRadio(ev)}/>
              <label htmlFor="" className="mr-1">
                {item}
              </label>
            </div>
          ))}
        </div>
        {radioValue == 'بار همه روزه' && (
            <>
        {timePicker}
            </>
)}
      </div>
    </>
  );
}

export default RadioBtn;
