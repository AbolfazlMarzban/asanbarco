import React from "react"
import {useLayoutEffect} from "react"
import { useRouter } from "next/router"

function Layout({children}: any){
    const router = useRouter();
    useLayoutEffect(()=>{
        const user = localStorage.getItem('userID')
        if(user && router.pathname == "/"){
            router.push("/myCargo")
        } else {            
            router.push("/")
        }
      }, [])
    return(
        <>
        {children}
        </>
    )
}

export default Layout;