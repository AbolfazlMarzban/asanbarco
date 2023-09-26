import React from 'react';

function Dialog({
    title,
    children,
    close
} : any) {
  function closedialog(){
    close();
  }
    return (
        <>
          <div className="animate__animated animate__fadeInUp justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-0 bottom-0 z-50 outline-none focus:outline-none h-2/5">
            <div className="relative w-full max-w-3xl h-full">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-myblue">
                  <h3 className="text-xl text-white font-semibold">{title}</h3>
                  <button
                    onClick={()=>closedialog()}
                    className="p-1 border-0 text-white text-lg font-semibold outline-none focus:outline-none"
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-full">
                  {children}
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Dialog;