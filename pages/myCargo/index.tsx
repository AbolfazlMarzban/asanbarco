import CargoBox from "@/components/cargoList/cargoBox";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import React from "react";
import { useState } from "react";

function CargoList() {
  const [hasCargo, setHasCargo] = useState(true)
  return (
    <div className="w-full h-screen">
      <Header></Header>
      {hasCargo ? (
          <div className="w-full min-h-full flex flex-col items-center bg-mybg pt-32 px-3">
            <CargoBox></CargoBox>
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
