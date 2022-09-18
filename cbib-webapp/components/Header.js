import React from 'react'
import {useRouter} from "next/router"

function Header() {

    const router = useRouter()
  return (
    <div className="h-14 border-b bg-gray-100">

     

        <nav className='h-14'>
            <ul className="flex justify-around items-center h-full">
                <li onClick={()=>router.push("/")} className=" cursor-pointer ">Home</li>
                <li onClick={()=>router.push("/publication/publication1")} className="cursor-pointer">Publication</li>
                <li onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</li>
                <li onClick={()=>router.push("/viewProfile")} className="cursor-pointer">View Profile</li>
                <li onClick={()=>router.push("/profile")} className="cursor-pointer">Edit Profile</li>
                <li onClick={ ()=>router.push("/viewResearchGroups")} className= "cursor-pointer">Research Groups</li>
                <li onClick={ ()=>router.push("/viewUniversities")} className= "cursor-pointer">Universities</li>
            </ul>
        </nav>

      
    </div>
  )
}

export default Header
