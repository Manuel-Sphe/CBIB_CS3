import React, {useState} from 'react'
import Header from '../components/Header'
import RoleAssign from '../components/RoleAssign'
import RoleManagement from '../components/RoleManagement'
import { useRouter } from 'next/router'
import InviteMemberForm from '../components/InviteMemberForm'

/**
 * Processes the manage collaborators sequence of events when called from the researchGroupCollaborators class
 * @returns a full page providing access control to managing users for a specific research group
 */
export default function AccessControl() {

    const [view, setView] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [remove,setRemove] = useState(false);
    const router = useRouter();
    const researchGroup = router.query.researchGroup;
    const img = router.query.img;
    
    return (
    <>

      <header>

        <Header/>

      </header>

      <main>

        <section className="flex flex-col mt-5 justify-center items-center">
            {/* <div className='flex flex-col mt-5 justify-center items-center' > */}
                    <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col'>
                        <img className='m-5' src={img} height={250} width={250}/>
                        <p className='text-2xl text-sky-500 font-bold text-center'>{researchGroup}</p>
                        <div className='flex flex-row mb-2'>
                                    <h1 className='flex text-xl font-semibold text-sky-500'>Co-ordinator:</h1>
                                    <h1 className='flex text-xl font-semibold text-sky-500 ml-2 hover:text-sky-600 cursor-pointer'> Prof. Tommie Meyer</h1>
                        </div>
                        <div className='grid grid-cols-3 space-x-5 text-gray-500 h-10 border-t-2 border-slate-400 w-full'>
                            <div onClick ={()=>{setView(true);setRemove(false)}} className={`col-start-2 justify-center items-center ${view===true? `border-b-2 border-sky-600` : ""} cursor-pointer`}>
                                <p className=" text-sky-600 text-center mt-1.5">Manage Members</p>   
                            </div>
                            
                            
                        
                        </div>
                    </div>

                    <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5'  >
                            
                    </div>

        </section>
        

        <section className='flex flex-col items-center justify-center'>
            <div className="flex rounded-lg cursor-pointer h-16  w-full items-center justify-center space-x-5">
                {/* <button></button> */}
                <button onClick={()=> {
                            router.push({
                                pathname: '/researchGroupAccessControl',
                                query: {researchGroup: researchGroup, img: img}
                            })
                        }} className='w-56 text-tiny bg-sky-400 text-white rounded-md py-2 px-1 hover:shadow-xl active:scale-90 transition duration-150 whitespace-nowrap'>Return to Group Dashboard</button>
                <button onClick ={()=>setShowForm(true)} className='w-56 text-tiny bg-sky-400 text-white rounded-md py-2 px-1  hover:shadow-xl active:scale-90 transition duration-150 whitespace-nowrap'>Add New Member</button>
                {
                    view===true? <button onClick={()=>setRemove(true)} className='w-56 text-tiny bg-sky-400 text-white rounded-md py-2 px-1  hover:shadow-xl active:scale-90 transition duration-150 whitespace-nowrap'>Remove Member</button>:<></>
                }

            </div>
            <div className="flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5">
                {showForm ? <InviteMemberForm />:<></>}
                { view===true ? <RoleAssign remove={remove}/>: <RoleManagement/> }
            </div>
        </section>


       


      </main>

      <footer className="h-10 ">

      </footer>


     
    </>
  )
}