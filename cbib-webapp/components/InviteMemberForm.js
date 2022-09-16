import React, {useState} from 'react';

import {RolesData} from './RolesData';
function InviteMemberForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [rGCode, setRGCode] = useState("");


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
    const rGCodeChange = event => {
        let val = event.target.value
        setRGCode(event.target.value)
        console.log(`lastname: ${val}`)
    }

    const onSubmit = {
        "first_name":{firstName},
        "last_name": {lastName},
        "email": {email},
        //"organisation": {rGCode}
    } 

    const refreshPage = () => {
        window.location.reload();
    }
  return (
    <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-30 items-center justify-center align-center">
        
        <div className="relative top-1/4 mx-auto border w-2/5 space-y-5 p-5 rounded-lg bg-white ">

            <h2 className="text-xl flex justify-center"> Add New Member to CAIR  </h2>
            <div className="flex justify-between items-center">
                <p className="">First Name: </p>
                <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Jane' onChange={firstNameChange} />
            </div>

            <div className="flex justify-between items-center">
                <p className="">Last Name: </p>
                <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Doe' onChange={lastNameChange}/>
            </div>

            <div className="flex justify-between items-center">
                <p className="">Email: </p>
                <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='example@cair.org' onChange={emailChange} />
            </div>

            <div className="flex justify-between items-center">
                <p className="">Role</p>
                <select className="w-2/3"> 

                    {RolesData.map((item,index)=>{
                        console.log(item)
                        return(
                            <option key={index}>{item.role}</option>
                        )
                    })}

                </select>
            </div>

                    

            <div className="flex justify-between items-center">
                <p className="">Research Group Code: </p>
                <div className="w-2/3">
                    <input type="text" className="border border-black p-5 w-full h-8" placeholder='enter alphanumeric group code...' onChange={rGCodeChange}/>
                    <p className="text-xs text-gray-500"></p>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button type="button" onClick={getStaticProps} className="bg-blue-300 px-3 py-1 rounded-lg hover:shadow-xl active:scale-90 transition duration-150 " > Invite New Member </button>
                <button type="button" className="px-3 py-1 rounded-lg hover:shadow-xl active:scale-90 transition duration-150" onClick={refreshPage}> Exit </button>
            </div>



        </div>
      
    </div>
  )
}

export default InviteMemberForm;

export async function getStaticProps() {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {onSubmit}
        )
    }
    const res = await fetch("http://localhost:8000/users/tshiamo123")
    const userData = await res.json()
    // console.log(userData)

    return {
        props:{
            userData
        }
       
    }
}