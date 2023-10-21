import React from "react";
import { useState } from "react";

function RadioBtn({ title, btns , exportValue, exportFee, fee, children, timePicker, value  }: any) {
  const [radioValue, setRadioValue] = useState(value ? value : "");
    function selectRadio(ev:any){
        setRadioValue(ev.target.value)
        exportValue(ev.target.value)        
    }   
    function isChecked(item: true){
      if(value && value == item){
        return true
      }
    }
  return (
    <>
      <div className="bg-white border shadow flex flex-col p-3 rounded-md mt-2">
        <div>{children}</div>
        <label htmlFor="" className="text-sm mb-2">
          {title}
        </label>
        <div className="flex justify-start gap-4 items-center mt-2">
          {btns.map((item: any, i:any) => (
            <div className="flex items-center" key={btns[i]}>
              <input type="radio" name="radio" key={item} id={item} value={item}  onClick={(ev:any) => selectRadio(ev)}/>
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
            <input type="number" className="border rounded-lg" value={fee} onChange={(ev)=>exportFee(ev.target.value)}/>
            <span className="text-xs text-slate-400"> تومان به ازای هر سرویس</span>
            </div>
            </>
)}
{radioValue == 'تنی' && (
            <>
            <div className="flex items-center gap-4 w-full mt-3">
            <input type="number" className="border rounded-lg" value={fee} onChange={(ev)=>exportFee(ev.target.value)}/>
            <span className="text-xs text-slate-400"> تومان به ازای هر تن</span>
            </div>
            </>
)}
      </div>
    </>
  );
}

export default RadioBtn;
