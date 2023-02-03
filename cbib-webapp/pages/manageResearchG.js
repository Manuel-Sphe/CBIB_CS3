import React, { useState } from "react";
import {useRouter} from "next/router";
import Header from '../components/Header';

export default function ResearchGroup(props){
    
    const university = 'University of Cape Town';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const router = useRouter();
    const name = router.query.name;

    // Pull from the mango db
    const desc = "We are always looking for good postgraduate students to join the group. If you have an interest in logic-based Artificial Intelligence, please contact Prof Tommie Meyer at tmeyer@cair.org.za. Details about postgraduate admission in Computer Science at UCT ";
    const [description, setDescription] = useState(desc);
    return (

        <div className='w-screen h-screen bg-slate-100'>
            <header>
                <Header/>
            </header>

            <div className='flex flex-col mt-5 justify-center items-center items-strech ' >
                <div className='flex w-2/3 justify-between border rounded-sm  bg-gray-100 flex-row p-20' >
                    
                    <img className='shadow-xl object-cover mr-5  w-40 h-40 rounded-full' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'/>
                    
                    <div className='flex flex-col w-full overflow-scroll'>
                        <div className="text-sky-900  w-full pt-5">
                            <strong className="text-4xl font-medium text-slate-900 group-hover:text-slate-900 ">{university}</strong>
                            <p className="text-sm font-medium text-slate-500 pr-1 ">Group Co-ordinator: 
                                <a href="#" className="pl-2 text-blue-500 no-underline hover:underline">{groupCoordinator}</a>
                            </p>
                        </div>  

                        <textarea className='border border-slate-300 h-32  bg-white  mt-2 p-2 overflow-scroll' value ={desc} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>

                  
                </div>

                <h2 className="mt-5 text-3xl text-bold">Research Groups</h2>
                <div className='flex w-2/3 justify-content content-between border rounded-lg  bg-gray-100  items-center flex-row  '>
                   
                   <ul className="p-6 divide-y divide-slate-400 w-full h-72 overflow-scroll">
                        <li className="flex flex-row py-2 first:pt-0 last:pb-0 ">
                           
                            <img className='shadow-xl relative w-20 h-20 rounded-full' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'/>

                            <div className="text-sky-900 font-semibold mb-12 ml-3 overflow-hidden">
                                <a href='#' className="text-lg font-medium text-slate-900 hover:text-indigo-500">Adaptive and Cognitive Systems Lab</a>
                                <p className="text-sm font-medium text-slate-500 pr-1 ">Research Co-ordinator:
                                    <a href='#' className="pl-2 text-blue-500 no-underline hover:underline">
                                        {groupCoordinator}
                                    </a>
                                </p>
                            </div>  
                        </li>

                        <li className="flex flex-row py-4 first:pt-0 last:pb-0  ">
                           
                            <img className='shadow-xl relative w-20 h-20 rounded-full' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'/>

                            <div className="text-sky-900 font-semibold mb-12 ml-3 overflow-hidden">
                                <a href='#' className="text-lg font-medium text-slate-900 hover:text-indigo-500">Natural Language Processing of Multilingual Text</a>
                                <p className="text-sm font-medium text-slate-500 pr-1 ">Research Co-ordinator:
                                    <a href='#' className="pl-2 text-blue-500 no-underline hover:underline">
                                        José Patricio
                                    </a>
                                </p>
                            </div>  
                        </li>
                   </ul>
               </div>
            </div>
           
            
        </div>
       
    );
}
