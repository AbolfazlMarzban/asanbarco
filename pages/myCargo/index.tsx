import CargoBox from "@/components/cargoList/cargoBox";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

function CargoList() {
  const [cargos,setCargos]  = useState([])
 useEffect(()=>{
  (async ()=>{
    try{  
     let userID = localStorage.getItem('userID') 
   const result = await axios.get(`/api/cargoManage?userID=${userID}`)
    if(result){
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
            <CargoBox key={cargo._id}></CargoBox>
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
