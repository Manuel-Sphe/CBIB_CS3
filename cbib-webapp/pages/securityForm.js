import React, {useState} from 'react';
import { useRouter } from 'next/router';



export default function SecurityForm() {

    const router = useRouter();
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [university, setUniversity] = useState("");


    const firstNameChange = event => {
        let val = event.target.value
        setFirstName(val)
        console.log(`firstname: ${val}`)
    }
    const lastNameChange = event => {
        let val = event.target.value
        setLastName(event.target.value)
        console.log(`lastname: ${val}`)
    }
    const emailChange = event => {
        let val = event.target.value
        setEmail(val)
        console.log(`email: ${val}`)
    }
    const universityChange = event => {
        let val = event.target.value
        setUniversity(event.target.value)
        console.log(`lastname: ${val}`)
    }

    const onSubmit = {
        "first_name":{firstName},
        "last_name": {lastName},
        "email": {email},
        "organisation": {university}
    } 

    const refreshPage = () => {
        window.location.reload();
    }
  return (
    <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-30 items-center justify-center align-center">
        
        <div className="relative top-1/4 mx-auto border w-2/5 space-y-5 p-5 rounded-lg bg-white ">

            <h2 className="text-xl flex justify-center">Security</h2>

            <div className="flex justify-between items-center">
                <p className="">Email: </p>
                <input type="text" className="border border-black p-5 w-4/5 h-8" placeholder='example@cair.org' />
            </div>
            <div className='flex justify-center'>
                <button type="button" className="flex justify-center bg-blue-300 px-3 py-1 rounded-lg hover:shadow-xl active:scale-90 transition duration-150 ">
                    Change Email Address
                </button>
            </div>
            

            <div className='flex flex-col gap-y-2'>
                <div className="flex justify-between items-center">
                    <p className="">Current Password: </p>
                    <input type="text" className="border border-black p-5 w-2/3 h-8" />
                </div>

                <div className="flex justify-between items-center">
                    <p className="">New Password: </p>
                    <input type="text" className="border border-black p-5 w-2/3 h-8" />
                </div>

                <div className="flex justify-between items-center">
                    <p className="">Confirm New Password: </p>
                    <input type="text" className="border border-black p-5 w-2/3 h-8" />
                </div>
            </div>
            <div className="flex justify-center">

                <button type="button" className="bg-blue-300 px-3 py-1 rounded-lg hover:shadow-xl active:scale-90 transition duration-150 ">
                    Change Password
                </button>
            </div>

            <div className="w-full flex justify-center">
                <button type="button" className="px-3 py-1 rounded-lg border border-black hover:shadow-xl active:scale-90 transition duration-150" onClick = {()=>router.push("/profile")}> Exit </button>
            </div>



        </div>
      
    </div>
  )
}
{/**
export async function getStaticProps() {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {onSubmit}
        )
    }
    const res = await fetch("http://localhost:8000/users",requestOptions)
    const userData = await res.json()
    // console.log(userData)

    return {
        props:{
            userData
        }
       
    }
}


*/}
