import React, { useEffect, useState } from "react";

function CustomeLink({
  title, 
  value,
  firstIcon,
  secondIcon,
}: any) {

  return (
    <div
      className="bg-white border shadow flex items-center justify-between p-3 rounded-md mt-2 cursor-pointer"
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between" >
          <div className="flex items-center">
            {firstIcon}

            <label htmlFor="" className="mr-1">
              {title}
            </label>
            <span className="mr-1">{value}</span>
          </div>
          {secondIcon}
        </div>
      </div>
    </div>
  );
}

export default CustomeLink;
