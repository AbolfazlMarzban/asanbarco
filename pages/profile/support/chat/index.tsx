import RadioBtn from "@/components/UI/radioBtn";
import Select from "@/components/UI/select";
import Textbox from "@/components/UI/textbox";
import Link from "next/link";
import {useState} from "react"

function index() {
    const [display, setDisplay] = useState('send')
  return (
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
      <div className="bg-white rounded-xl flex gap-5 p-2 mt-3 mx-2">
          <button
            onClick={() => setDisplay("send")}
            className={`${
              display == "send" ? `bg-myblue text-white` : `bg-white text-myblue`
            } p-2 w-1/2 rounded-md`}
          >
            ارسال پیام
          </button>
          <button
            onClick={() => setDisplay("list")}
            className={`${
              display == "list" ? `bg-myblue text-white` : `bg-white text-myblue`
            } p-2 w-1/2 rounded-md`}
          >
            پیام ها
          </button>
        </div>
        {display == 'send' 
            ?
            (<>
            <div className="bg-white p-3 rounded-lg m-3 flex flex-col"> 
            <RadioBtn
                title={'اهمیت پیام:'}
                btns={['معمولی', 'فوری']}
            >

            </RadioBtn>
                <Select
                    title={'واحد مربوطه:'}
                    data={['مالی', 'هماهنگی', 'پشتیبانی سامانه ' , 'فنی']}
                ></Select>
            </div>  
            <hr className="my-6 mx-3"></hr>
            <div className="m-3">
            <Textbox
                title={"متن پیام:"}
            ></Textbox>
            <button className="bg-myblue text-white  rounded-lg flex items-center justify-center gap-4 mt-10 w-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
                <span>ارسال پیام</span>
            </button>
            </div>
            </>)
            : 
            (
                <>
                    <div className="flex flex-col items-center justify-center m-3 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-32 h-32 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
                    <span>هنوز هیچ پیامی وجود ندارد</span>
                    </div>
                </>
            )
        }
    </div>
  );
}

export default index;
