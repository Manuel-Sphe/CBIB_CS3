import React, {useState} from 'react'
import { useRouter } from 'next/router'
import SecurityForm from '../pages/SecurityForm';


function SideNav() { 

  const [showForm, setShowForm] = useState(false);

  const router = useRouter()
  
  return (
    <div className=" w-64 border-r h-screen px-8 space-y-5 pt-16">
        <h2 className="font-semibold cursor-pointer ">Personal Information</h2>      
        <h2 onClick={()=> {
            router.push({
                pathname: '/securityForm',
                //query: {pubName: publicationName}
            })
        }} className="cursor-pointer">Security</h2>      
    </div>
  )
}

export default SideNav
