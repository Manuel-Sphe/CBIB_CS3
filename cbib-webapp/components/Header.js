import React from 'react'
import {useRouter} from "next/router"


function Header() {

    const router = useRouter();
    
  return (
    <div className="h-14 border-b bg-gray-100">

     

        <nav className='h-14'>
            <ul className="flex justify-around items-center h-full">
                <li onClick={()=>router.push("/")} className="cursor-pointer ">Home</li>
                <li onClick={()=>router.push("/publication")} className="cursor-pointer">Publication</li>
                <li onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</li>
                <li onClick={()=>router.push("/viewProfile")} className="cursor-pointer">Profile</li>
                <li onClick={ ()=>router.push("/manageResearchG")} className= "cursor-pointer">Research</li>
                <li onClick={ ()=>router.push("/createResearchGroup")} className= "cursor-pointer">Create</li>
                <li onClick={() =>router.push('/manageUsers')}className= "cursor-pointer">ManageUsers</li>
                <li onClick ={()=> router.push('/login')} className= "cursor-pointer">Login</li>
            </ul>
        </nav>

      
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
