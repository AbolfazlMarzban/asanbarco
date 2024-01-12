import React, { Component, useEffect } from "react"
import {useLayoutEffect} from "react"
import { useRouter } from "next/router"
import axios from "axios";

function Layout({children}: any){
    const router = useRouter();
    useLayoutEffect(()=>{
        (async ()=>{
            const user = localStorage.getItem('userID')
            if(user){
                const result = await axios.post('/api/checkuser', {'user': user})
                // console.log('result', result.data)
                if(result.data.length > 0){
                    if(router.pathname == "/"){
                        router.push("/myCargo")
                    }
                } else {
                    router.push("/")
                }
            } else {            
                router.push("/")
            }
        })()
      }, [])
    return(
        <>
        {children}
        </>
    )
}

export default Layout;