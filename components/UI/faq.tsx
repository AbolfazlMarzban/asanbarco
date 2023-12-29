import React from "react";
import { useState } from "react";

function Faq({ title, answer }: any) {
  const [display, setDisplay] = useState(false);
  return (
    <div className="bg-white flex flex-col my-2">
      <div
        className="border border-teal-300 flex justify-between p-3"
        onClick={() => setDisplay(!display)}
      >
        <label htmlFor="" className={ display ? `text-teal-300 font-bold` : ``}>
          {title}
        </label>
        {display ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-teal-300 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </>
        ) : (
          <>
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </>
        )}
      </div>
      {display && (
        <div className="border border-green-600 p-3">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;
