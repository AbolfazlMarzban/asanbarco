import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
function index() {
  const [display, setDisplay] = useState("score")
  const [userID, setUserID] = useState(null)
  const [scoreItems, setScoreItems] = useState([])
  useEffect(()=>{
    (async ()=>{
      try{
        var id:any = localStorage.getItem('userID')
        if(id){
          setUserID(id)
        }
        const result = await axios.get(`/api/scoreManage?userID=${userID}`)
        console.log('score result', result)
        setScoreItems(result.data)
      }catch(err){
        console.log(err)
      }
    })()
  },[])
  return (
    <div className="w-full h-screen bg-mybg">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between w-full">
        <div className="flex gap-4">
          <Link href={"/club"}>
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
          <h2>تاریخچه امتیازات و جوایز</h2>
        </div>
      </div>
      <div className="bg-white rounded-xl flex gap-5 p-2 mt-3 mx-2">
          <button
            onClick={() => setDisplay("score")}
            className={`${
              display == "score" ? `bg-myblue text-white` : `bg-white text-myblue`
            } p-2 w-1/2 rounded-md`}
          >
            تاریخچه امتیازات
          </button>
          <button
            onClick={() => setDisplay("bonus")}
            className={`${
              display == "bonus" ? `bg-myblue text-white` : `bg-white text-myblue`
            } p-2 w-1/2 rounded-md`}
          >
            تاریخچه جوایز
          </button>
        </div>
        <div className="bg-white h-full m-3 rounded-lg p-3">
          {display == 'score' 
            ?
            (
              <>    
              {scoreItems.length > 0 ? (
                <>  
                {scoreItems.map((item:any)=> {
                  <>
                <div className="flex justify-between items-center" key={item._id}>
                  <div className="flex flex-col justify-start">
                    <span className="">{item.reason}</span>
                    <span className="text-myblue mt-3">{item.score} امتیاز</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-myblue">افزایش</span>
                    <span className="mt-3">{item.date} {item.time}</span>
                  </div>
                </div>
                <hr className="mt-2"></hr>
                </>
                })}
                </>
              )
                :
                (
                  <>
                    <span className="text-red-600 w-full text-center">هنوز امتیازی دریافت نکرده اید!</span>
                  </>
                )
            }
              </>
            )
            :
            (
              <></>
            )
          }
        </div>
    </div>
  );
}

export default index;
