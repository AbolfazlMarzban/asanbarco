import CargoBox from "@/components/cargoList/cargoBox";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Link from "next/link";

function CargoList() {
  const [cargos,setCargos]  = useState([])
 useEffect(()=>{
  (async ()=>{
    try{  
     let userID = localStorage.getItem('userID') 
   const result = await axios.get(`/api/cargoManage?userID=${userID}`)
    if(result){
      // if(result.data.length > 0 ){
      //   result.data.forEach(async (item: any)=> {
      //     var data = await axios.get(`/api/requestsManage?id=${item._id}`)
      //     if(data){
      //       console.log('data', data)
      //       reqs.push(data.data)
      //     }
      //   })
      //   console.log('reqs', reqs)

      // }
      // console.log('result', result)
      setCargos(result.data)
    }
  } catch(error){
      console.log(error)
    }
  })()
}, [])
  return (
    <div className="w-full h-screen">
      <Header></Header>
      {cargos.length > 0 ? (
          <div className="w-full min-h-full flex flex-col items-center bg-mybg pt-32 px-3">
            {cargos.map((cargo:any) => (
              <Link href={'/myCargo/' + cargo._id} key={cargo._id} className="w-full">
                <CargoBox data={cargo}></CargoBox>
              </Link>
            ))}
          </div>
      ):
        (
      <div className="w-full min-h-full flex flex-col items-center justify-center">
        <img src="/empty-bg.png" alt="" className="w-36" />
        <p className="text-zinc-400	mt-4 w-72 text-center">
          همین حالا سفارش خودتان را در آسان بار ثبت کنید و از مزایای آن بهره مند
          شوید
        </p>
      </div>
        )
      }
      <Navbar></Navbar>
    </div>
  );
}

export default CargoList;
