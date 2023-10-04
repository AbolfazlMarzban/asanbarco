import React, { Children, useState } from "react";

function DialogBtn({
  title,
  value,
  open,
  firstIcon,
  secondIcon,
  selected,
  remove,
}: any) {
  function openDialog() {
    open();
  }
  function removeChild(i: any) {
    remove(i);
  }
  return (
    <div
      className="bg-white border shadow flex items-center justify-between p-3 rounded-md mt-2 cursor-pointer"
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between" onClick={() => openDialog()}>
          <div className="flex items-center">
            {firstIcon}

            <label htmlFor="" className="mr-1">
              {title}:
            </label>
            <span className="mr-1">{value}</span>
          </div>
          {secondIcon}
        </div>
        <div>
          {selected?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {selected.map((item: any, i: any) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={i}
                >
                  <span>{item.parent}</span>
                  <div className="flex gap-2 border rounded-xl items-center justify-center p-1">
                    <span>{item.child}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => removeChild(i)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DialogBtn;
