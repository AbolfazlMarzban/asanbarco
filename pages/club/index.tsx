import Navbar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import axios from "axios";
import {useEffect, useState} from "react"

function index() {
  const [userID, setUserID] = useState(null)
  const [totalScore, setTotalScore] :any = useState(0)
  useEffect(()=>{
    (async ()=>{
      try{
        var id:any = localStorage.getItem('userID')
        if(id){
          setUserID(id)
        }
        const result = await axios.get(`/api/scoreManage?userID=${userID}`)
        console.log('score result', result)
        let total = 0
        if(result.data.length > 0){
          for(var i=0; i < result.data.length; i++){
            total += result.data[i].score
          }
          setTotalScore(total)
        }
      }catch(err){
        console.log(err)
      }
    })()
  },[])
  return (
    <div className="w-full h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
        <div className="flex gap-4">
          <h2>باشگاه مشتریان</h2>
        </div>
      </div>
      <div className="w-full h-full bg-mybg flex flex-col pt-3 px-3">
        <div className="flex gap-2 items-center ">
          <div className="w-1/2 bg-white border rounded-lg  p-2 ">
            <Link href={'/club/scoresHistory'} className="flex items-center justify-center gap-2">            
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>تاریخچه امتیازات و جوایز</span>
            </Link>
          </div>
          <div className="w-1/2 bg-white border rounded-lg p-2">
          <Link href={'/club/scoresGuide'} className="flex items-center justify-center gap-2">            

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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            <span>راهنمای امتیازات</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-lg w-full p-2 mt-3">
          <div className="text-yellow-300">
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
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
          </div>
          <div className="text-center w-full">
            <span>{totalScore} امتیاز</span>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default index;
