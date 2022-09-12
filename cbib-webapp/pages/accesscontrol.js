import React, {useState} from 'react'
import Header from '../components/Header'
import RoleAssign from '../components/RoleAssign'
import RoleManagement from '../components/RoleManagement'

export default function AccessControl() {

    const [view, setView] = useState(true)
    return (
    <>

      <header>

        <Header/>

      </header>

      <main>

        <section className="flex flex-col mt-5 justify-center items-center">
            {/* <div className='flex flex-col mt-5 justify-center items-center' > */}
                    <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col'>
                        <img className='m-5' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg' height={250} width={250}/>
                        <p className='text-2xl text-sky-500 font-bold text-center'>Knowledge Representation and Reasoning (KRR)</p>
                        <div className='flex flex-row mb-2'>
                                    <h1 className='flex text-xl font-semibold text-sky-500'>Co-ordinator:</h1>
                                    <h1 className='flex text-xl font-semibold text-sky-500 ml-2 hover:text-sky-600 cursor-pointer'> Prof. Tommie Meyer</h1>
                        </div>
                        <div className='flex flex-row space-x-5 text-gray-500 h-10 border-t-2 border-slate-400 w-full'>
                            <div onClick ={()=>setView(true)} className={`flex w-1/3 justify-center items-center ${view===true? `border-b-2 border-sky-600` : ""} cursor-pointer`}>
                                <p className=" text-sky-600">Manage Members</p>   
                            </div>
                            <div onClick ={()=>setView(false)} className={`flex w-1/3 justify-center items-center ${view===false ? `border-b-2 border-sky-600` : ""} cursor-pointer`}>
                                <p className=" text-sky-600">Manage Roles</p>   
                            </div>
                            
                        
                        </div>
                    </div>

                    <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5'  >
                            
                    </div>
                    
                {/* </div> */}

        </section>
        

        <section className='flex flex-col items-center justify-center'>
            <div className="flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5">

                { view===true ? <RoleAssign/> : <RoleManagement/> }
                {/* <RoleAssign/> */}
            </div>
        </section>


       


      </main>

      <footer className="h-56">

      </footer>


     
    </>
  )
}