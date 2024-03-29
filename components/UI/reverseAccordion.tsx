import React from "react";
import { useState } from "react";

function ReverseAccordion({ title, detail, children, actived, clicked }: any) {
  const [activeElement, setActiveElement] = useState("");
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div>
      <div id="accordionExample">
        <div className="rounded-t-lg ">
          <span className="text-xs text-slate-400">{detail}</span>
          {/* {clicked ? (
            <>{activeElement == "element1" && <div>{children}</div>}</>
          ) : (
            <></>
          )} */}

          {clicked ? (
            <>
              <div>{children}</div>
            </>
          ) : (
            <></>
          )}
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                clicked &&
                `text-primary dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex flex-col w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => {
                actived(true);
                handleClick("element1");
              }}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span
                className={`${
                  clicked
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-[180deg] fill-[#212529]  dark:fill-white`
                } h-5 w-5 text-center shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                {clicked ? (
                  <></>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </>
                )}
              </span>
              {title}
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ReverseAccordion;
