import React from 'react'
import {useRouter} from "next/router"


function Header(props) {

    const router = useRouter();
    const name = router.query.name
  return (
    <div className="h-14 border-b bg-gray-100">

     

        <nav className='h-14'>
            <ul className="flex justify-around items-center h-full">
                <li onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</li>
                <li onClick={()=> {
                  router.push({
                      pathname: '/viewProfile',
                      query: {name: name}
                  })
                }} className="cursor-pointer">View Profile</li>
                <li onClick={()=>router.push("/profile")} className="cursor-pointer">Edit Profile</li>
                <li onClick={ ()=>router.push("/viewResearchGroups")} className= "cursor-pointer">Research Groups</li>
                
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
