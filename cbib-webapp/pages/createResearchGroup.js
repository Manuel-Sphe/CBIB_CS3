import React,{useState} from "react";
import Header from '../components/Header';
import InviteMemberForm from "../components/InviteMemberForm";

export default function CreateResearchGroup(){
    const university = 'University of Cape Town';
    const groupCoordinator = 'Prof. Tommie Meyer';

    const [showForm,setShowForm] = useState(false);
    const toggleForm =()=>{
        setShowForm(!showForm)
    }   

    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className='flex flex-col mt-5  items-center ' >
                <div className='flex w-2/3 justify-between border rounded-sm  bg-gray-100 flex-row p-20' >
                    
                    <img className='shadow-xl object-cover mr-5  w-40 h-40 rounded-full' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'/>
                    
                    <div className='flex flex-col w-full overflow-scroll'>
                        <div className="text-sky-900  w-full pt-5">
                            <strong className="text-4xl font-medium text-slate-900 group-hover:text-slate-900 ">{university}</strong>
                            <p className="text-sm font-medium text-slate-500 pr-1 ">Group Co-ordinator: 
                                <a href="#" className="pl-2 text-blue-500 no-underline hover:underline">{groupCoordinator}</a>
                            </p>
                        </div>  

                        <div className='border border-slate-300 h-32  bg-white  mt-2 p-2 overflow-scroll'>
                            Description
                        </div>
                    
                    </div>
                </div>

                <p className='mt-5 text-3xl  '>Research Group(s) </p>
                <div className='flex w-2/3 border justify-center rounded-sm bg-gray-100 items-center h-32 '>
                    <a href="#" className="text-xl text-bold no-underline hover:underline hover:text-indigo-500" onClick={toggleForm}>Create Research Group</a>
                    {
                        showForm &&(
                            <InviteMemberForm/>
                        )
                    }
                </div>

            </div>
        </div>
       
    );
}