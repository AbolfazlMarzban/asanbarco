import React from "react";
import { useState } from "react";

function RadioBtn({ title, btns , exportValue, exportFee, fee, children, timePicker, value  }: any) {
  const [radioValue, setRadioValue] = useState(value || "");
  const [radioFee, setRadioFee] = useState(fee)
    function selectRadio(ev:any){
        setRadioValue(ev.target.value)
        exportValue(ev.target.value)        
    }   
    function isChecked(item: true){
      return radioValue === item
    }

    function getRadioFee(value:any){
      setRadioFee(value)
      exportFee(value)
    }
  return (
    <>
      <div className="bg-white border shadow flex flex-col p-3 rounded-md mt-2">
        <div>{children}</div>
        <label htmlFor="" className="text-sm mb-2">
          {title}
        </label>
        <div className="flex justify-between gap-4 items-center mt-2">

          {btns.map((item: any, i:any) => (
            <div className="flex items-center" key={i}>
              <input type="radio" name={title} key={i} id={item} value={item} checked={isChecked(item)} onClick={(ev) =>selectRadio(ev)}/>
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
      {radioValue == 'سرویسی' && (
            <>
            <div className="flex items-center gap-4 w-full mt-3">
            <input type="number" className="border rounded-lg" value={radioFee} onChange={(ev)=>getRadioFee(ev.target.value)}/>
            <span className="text-xs text-slate-400"> تومان به ازای هر سرویس</span>
            </div>
            </>
)}
{radioValue == 'تنی' && (
            <>
            <div className="flex items-center gap-4 w-full mt-3">
            <input type="number" className="border rounded-lg" value={radioFee} onChange={(ev)=>getRadioFee(ev.target.value)}/>
            <span className="text-xs text-slate-400"> تومان به ازای هر تن</span>
            </div>
            </>
)}
      </div>
    </>
  );
}

export default RadioBtn;
