import React from 'react'
import {useRouter} from "next/router"

function Header() {

    const router = useRouter()
  return (
    <div className=" bg-gray-50">

     

        <nav className='text-pink-300'>
            <ul className="flex justify-around ">
                <li onClick={()=>router.push("/")} className="cursor-pointer ">Home</li>
                <li onClick={()=>router.push("/publication")} className="cursor-pointer">Publication</li>
                <li onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</li>
            </ul>
        </nav>

      
    </div>
  )
}

export default Header
