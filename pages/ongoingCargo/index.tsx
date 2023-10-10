import React from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

function index() {
  return (
    <div className="w-full h-screen">
      <Header></Header>
      <div className="w-full min-h-full flex flex-col items-center justify-center">
        <img src="/empty-bg.png" alt="" className="w-36" />
        <p className="text-zinc-400	mt-4 w-72 text-center">
          همین حالا سفارش خودتان را در آسان بار ثبت کنید و از مزایای آن بهره مند
          شوید
        </p>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default index;
