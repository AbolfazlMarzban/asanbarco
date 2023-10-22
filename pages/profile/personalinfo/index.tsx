import Navbar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/man.png";
import Inputbox from "@/components/UI/inputbox";
import {useState, useEffect} from "react"
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import axios from "axios";

function index() {
  const [editPN, setEditPN] = useState(false)
  const [fullName,setFullName] = useState('')
  const [nationalNumber, setNationalNumber] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [birthDate, setBirthDate] : any = useState(null)
  const [selectedDay, setSelectedDay] : any = useState(null);

  const [bankCard, setBankCard] = useState('')
  const [userID, setUserID] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [profilePic, setProfilePic] = useState([])
  const [profilePicUrl, setProfilePicUrl] = useState('')
  const [nationalCardPic, setNationalCardPic] = useState([])
  const [nationalCardPicUrl, setNationalCardPicUrl] = useState('')
  const [logo, setLogo] = useState([])
  const [logoUrl, setLogoUrl] = useState('')

  useEffect(()=>{
    (async ()=>{
      var id = localStorage.getItem('userID')
      if(id){
        setUserID(id)
        const result = await axios.get(`/api/userManage?id=${id}`)
        console.log('result', result)
        setPhoneNumber(result.data.phoneNumber)
      }
    })()
  }, [])
  function getNationalCard(ev:any){
    setNationalCardPic(ev.target.files[0])
    var url = URL.createObjectURL(ev.target.files[0])
    setNationalCardPicUrl(url)
  }
  function getLogo(ev:any){
    setLogo(ev.target.files[0])
    var url = URL.createObjectURL(ev.target.files[0])
    setLogoUrl(url)
  }
  return (
    <div className="w-full h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
        <div className="flex gap-4">
          <Link href={"/profile"}>
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
          <h2>مشخصات شخصی</h2>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="w-16 h-16 rounded-full border-2 mt-6">
          <Image src={placeholder} alt=""></Image>
        </div>
        <div className="w-1/2 flex items-center justify-between gap-4">
          <div className="flex border border-myblue rounded-lg p-2 text-myblue gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            <span>تغییر عکس پروفایل</span>
          </div>
          <div className="flex border border-myblue rounded-lg p-2 text-myblue gap-2">
            <svg
              onClick={()=>setEditPN(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            {editPN ? 
              (
                <input type="tel" value={phoneNumber} onChange={(ev)=>setPhoneNumber(ev.target.value)} />
                )
              :
              (
                <span style={{direction: "ltr"}}>{phoneNumber}</span>
                
              )  
          }

          </div>
        </div>
        <hr className="w-full m-3"></hr>
        <div className="flex flex-col items-start my-1">
          <label htmlFor="" className="text-md">
            نام و نام خانوادگی
          </label>
          <input type="text" value={fullName} onChange={(ev)=>setFullName(ev.target.value)} className="border p-2 rounded-xl mt-2 w-64" />
        </div>
        <div className="flex flex-col items-start my-1">
          <label htmlFor="" className="text-md">
            کد ملی
          </label>
          <input type="text" value={nationalNumber} onChange={(ev)=>setNationalNumber(ev.target.value)} className="border p-2 rounded-xl mt-2 w-64" />
        </div>
        <div className="flex flex-col items-start my-1">
          <label htmlFor="" className="text-md">
            نام شرکت حمل و نقل
          </label>
          <input type="text" value={businessName} onChange={(ev)=>setBusinessName(ev.target.value)} className="border p-2 rounded-xl mt-2 w-64" />
        </div>
        <div className="flex flex-col items-start my-1">
          <label htmlFor="" className="text-md">
            تاریخ تولد
          </label>
          {/* <input type="text" className="border p-2 rounded-xl mt-2 w-64" /> */}
          <DatePicker
                      value={selectedDay}
                      onChange={setSelectedDay}
                      shouldHighlightWeekends
                      locale="fa"
                    />
        </div>
        <div className="flex flex-col items-start my-1">
          <label htmlFor="" className="text-md">
            شماره کارت بانکی
          </label>
          <input type="text" value={bankCard} onChange={(ev)=>setBankCard(ev.target.value)} className="border p-2 rounded-xl mt-2 w-64" />
        </div>
        <div className="flex flex-col my-1 w-72">
          <div className="flex justify-between items-center ">
            <label htmlFor="">تصویر کارت ملی</label>
            <span className="text-green-600 text-sm">تغییر تصویر کارت ملی</span>
          </div>
          <div className="w-full h-32 border-2 border-dashed mt-2 rounded-lg flex justify-center items-center relative">
            {nationalCardPicUrl.length > 0 ?
              (
                // <Image src={nationalCardPicUrl} alt={''} width={32} ></Image>
                <img src={nationalCardPicUrl} alt="" className="w-full h-32 rounded-lg" />
              )
              : (
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
              )  
          }
            <input type="file" accept="[.png, .jpg, .jepg]" className="w-full h-full opacity-0 absolute" onChange={(ev)=>getNationalCard(ev)} />
          </div>
        </div>

        <div className="flex flex-col my-1 w-72">
          <div className="flex justify-between items-center ">
            <label htmlFor="">لوگوی اختصاصی</label>
            <span className="text-green-600 text-sm">تغییر لوگوی اختصاصی</span>
          </div>
          <div className="w-full h-32 border-2 border-dashed mt-2 rounded-lg flex justify-center items-center relative">
            {logoUrl.length > 0 ?
            (
              <img src={logoUrl} alt="" className="w-full h-32 rounded-lg" />
            )
            :
            (
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            )  
          }
            <input type="file" accept="[.png, .jpg, .jepg]" className="w-full h-full opacity-0 absolute" onChange={(ev)=>getLogo(ev)}/>
          </div>
        </div>

        <button className="w-72 border border-green-600 p-2 rounded-lg text-green-600 my-3">
            ثبت مشخصات
        </button>
      </div>
    </div>
  );
}

export default index;
