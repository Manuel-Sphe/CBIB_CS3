import React from 'react'
import {useRouter} from "next/router"


function Header() {

    const router = useRouter();
    
  return (
    <div className="h-14 border-b bg-gray-100">

     

        <nav className='h-14'>
            <ul className="flex justify-around items-center h-full">
                <li onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</li>
<<<<<<< HEAD
                <li onClick={()=>router.push("/viewProfile")} className="cursor-pointer">View Profile</li>
                <li onClick={()=>router.push("/profile")} className="cursor-pointer">Edit Profile</li>
                <li onClick={ ()=>router.push("/viewResearchGroups")} className= "cursor-pointer">Research Groups</li>
                
=======
                <li onClick={()=>router.push("/viewProfile")} className="cursor-pointer">Profile</li>
                <li onClick={ ()=>router.push("/manageResearchG")} className= "cursor-pointer">Research</li>
                <li onClick={ ()=>router.push("/createResearchGroup")} className= "cursor-pointer">Create</li>
                <li onClick={() =>router.push('/manageUsers')}>ManageUsers</li>
>>>>>>> 1d3fb84b32669d6eccef282bfafc782bb761d9c4
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
