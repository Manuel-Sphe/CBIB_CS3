import React from 'react'

function InviteMemberForm() {

    const refreshPage = () => {
        window.location.reload();
    }
  return (
    <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-30 items-center justify-center align-center h-screen">
        
        <div className="relative top-1/4 mx-auto border w-2/5 space-y-5 p-5 rounded-lg bg-white ">

            <h2 className="text-xl flex justify-center"> Add New Member to CAIR  </h2>
            <div className="flex justify-between items-center">
                <p className="">First Name: </p>
                <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Jane' />
            </div>

            <div className="flex justify-between items-center">
                <p className="">Last Name: </p>
                <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Doe' />
            </div>

            <div className="flex justify-between items-center">
                <p className="">Email: </p>
                <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='example@cair.org' />
            </div>

            <div className="flex justify-between items-center">
                <p className="">Role</p>
                <select className="w-2/3"> 
                    <option>Student</option>
                    <option>Researcher</option>
                    <option>Group Admin</option>
                    <option>Group Leader</option>
                </select>
            </div>

                    

            <div className="flex justify-between items-center">
                <p className="">Research Group Code: </p>
                <div className="w-2/3">
                    <input type="text" className="border border-black p-5 w-full h-8" placeholder='enter alphanumeric group code...' />
                    <p className="text-xs text-gray-500"></p>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button type="button" className="bg-blue-300 px-3 py-1 rounded-lg hover:shadow-xl active:scale-90 transition duration-150 "> Invite New Member </button>
                <button type="button" className="px-3 py-1 rounded-lg hover:shadow-xl active:scale-90 transition duration-150" onClick={refreshPage}> Exit </button>
            </div>



        </div>
      
    </div>
  )
}

export default InviteMemberForm;
