import React, {useEffect, useState} from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import axios from "axios";
import CargoBox from "@/components/cargoList/cargoBox";

function index() {
  const [list, setList] = useState([])
  useEffect(()=>{
    (async()=>{
      const id = localStorage.getItem('userID')
      const result = await axios.get(`/api/cargoManage?userID=${id}`)
      if(result.data.length > 0){
        // console.log('data', result.data)
        var clist = result.data.filter((item:any) => item.loadingDate[0] == "بار همه روزه")
        setList(clist)
      }
    })()
  }, [])
  return (
    <div className="w-full h-screen">
      <Header></Header>
      {list.length > 0 ?
        (
          <div className="w-full min-h-full flex flex-col items-center bg-mybg pt-32 px-3">
            {list.map(item => (
              <>
                <CargoBox data={item}></CargoBox>
              </>
            ))}
          </div>
        )
        :
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

export default index;
