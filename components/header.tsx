import React from "react";
import Link from "next/link";

function Header() {
    const menu  = [
        {
            name: 'بار های من',
            link: 'myCargo'
        },
        {
            name: 'بار های در حال حمل',
            link: 'myCargo'
        },
        {
            name: 'بار های همه روزه',
            link: 'myCargo'
        },
        {
            name: 'آماروارقام بارها',
            link: 'myCargo'
        },
        {
            name: 'سوابق حمل',
            link: 'myCargo'
        },
    ]
  return (
    <div>
        <div className="w-full h-14 bg-myblue p-4 text-center">
            <label className="text-white">آسان بار</label>
        <button className="float-left mr-3 text-white " >
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
            </svg>
        </button>
        <Link href={"/"} className="float-left mr-2 text-white">
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
            </svg>
        </Link>
        </div> 
        
<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        {menu.map((item, i) => (

        <li className="mr-2" key={i}>
            <a href={'/cargolist/'+item.link} className="inline-block p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">
                {item.name}</a>
        </li>
        ))}
       
    </ul>
</div>

    </div>
  );
}

export default Header;
