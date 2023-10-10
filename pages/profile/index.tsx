import React from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

function index() {
  return (
    <div className="w-full h-screen">
      <div className="h-full bg-myblue">
            <div className="flex flex-col items-center pt-6">
                <div className="w-16 h-16 rounded-full border-2 ">

                </div>
            </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default index;
