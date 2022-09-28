import React from 'react'
import {useRouter} from "next/router"
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";


/**
 * Header for the pages where the user is signed in
 * @param {*} props 
 * @returns div containing the CAIR logo, and essential navigation routes 
 */
function Header(props) {

    const router = useRouter();
    const name = router.query.name
  return (
    <div className="flex h-28 border-b bg-white text-gray-700 items-center justify-around">
        <img onClick={()=>router.push("/landingPage")} className='mx-20 cursor-pointer' src='https://sacair.org.za/wp-content/uploads/elementor/thumbs/cair-logo-hires-p6pxr3xpjjeyisuxlv0dyn3w2sxcclbk2143kpwdzc.png' height={25} width={100}/>                    
                <p onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</p>
                <p onClick={()=> {
                  router.push({
                      pathname: '/viewProfile',
                      query: {name: name}
                  })
                }} className="cursor-pointer">Profile</p>
                <p onClick={()=>router.push("/login")} className="cursor-pointer">Log out</p>   
    </div>
  )
}

export default Header;