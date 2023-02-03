import React from 'react'
import {useRouter} from "next/router"
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Header(props) {

    const router = useRouter();
    const name = router.query.name
  return (
    <div className="flex h-28 border-b bg-white text-gray-700 items-center justify-around">
        <img className='mx-20' src='https://sacair.org.za/wp-content/uploads/elementor/thumbs/cair-logo-hires-p6pxr3xpjjeyisuxlv0dyn3w2sxcclbk2143kpwdzc.png' height={25} width={100}/>                    
                <p onClick={ ()=>router.push("/viewResearchGroups")} className= "cursor-pointer">Research Groups</p>
                <p onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</p>
                <p onClick={()=> {
                  router.push({
                      pathname: '/viewProfile',
                      query: {name: name}
                  })
                }} className="cursor-pointer">View Profile</p>
                <p onClick={()=>router.push("/profile")} className="cursor-pointer">Edit Profile</p>
                <p onClick={()=>router.push("/login")} className="cursor-pointer">Log In</p>   
    </div>
  )
}

export default Header;

export const  Footer = () =>{

  return (
    <div className="h-14 border-b bg-gray-100">
        <nav className='h-14'>
            <ul className="flex justify-around items-center h-full">
                <li onClick={ ()=>router.push("/manageResearchG")} className= "cursor-pointer">Research</li>
                <li onClick={ ()=>router.push("/createResearchGroup")} className= "cursor-pointer">Create</li>

            </ul>
        </nav>

      
    </div>
  )

}
