import Link from "next/link";

function index(){
    return(
        <div className="w-full h-screen bg-mybg">
        <div className="bg-myblue text-white py-5 px-2 flex justify-between w-full">
          <div className="flex gap-4">
            <Link href={"/profile/support"}>
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <h2>پشتیبانی</h2>
          </div>
        </div>
        </div>
    
    )
}

export default index;