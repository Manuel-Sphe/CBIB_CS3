import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import {useRouter} from "next/router";

/**
 * display a users' profile information
 * @param {*} props 
 * @returns 
 */
export default function ViewProfile(props) {
    
   

    const router = useRouter()
    const name = router.query.name;

  return (
    <div>
        <header>
            <Header/>
        </header>

        <main className="space-y-12 mt-8">
            
            {/* Profile Summary Section */}
            <div className='grid grid-cols-8'>
                <section className="flex col-start-3 col-span-4 justify-center items-center space-x-8">
                    <div className="bg-gray-400 w-48 h-36 rounded-full">
                        
                        
                    </div>
                    
                    <div className="w-full space-y-2">
                        <h2 className="border-b text-xl font-semibold col-span-2">Basic Information</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Name: </p>
                            <p className="w-2/3">{name}</p>
                        </div>


                        <div className="border-b"/>
                            <div className="flex justify-between items-center">
                                <p className="text-sm">Organisation: </p>
                                <p className="w-2/3">University of Cape Town</p>
                            </div>
                        <div className="border-b"/>

                        <div className="flex justify-between items-center">
                            <p className="text-sm">Research Interests: </p>
                            <p className="w-2/3"></p>
                        </div>
                        <div className="border-b"/>


                        <div className="flex justify-between items-center">
                            <p className="text-sm">Research Groups: </p>
                            <p className="w-2/3">Knowledge Representation and Reason (KRR) <br/> Application of Bayesian Networks to ECG Interpretation</p>
                        </div>
            
                    </div>
                </section>

                <div className='col-start-8'>
                    <button onClick={()=>router.push("/profile")} className='border rounded py-1 px-4 text-center justify-center bg-sky-400 cursor-pointer'>Edit Profile</button>
                </div>
            </div>
            


            {/* Research Papers and Contributions */}
            <section className=" w-3/5 mx-auto">

                <div className="w-full">
                    <PubCard publicationName="Whatever You Want 1"/>
                    <PubCard publicationName="Whatever You Want 2"/>
                    <PubCard publicationName="Whatever You Want 3"/>
                    <PubCard publicationName="Whatever You Want 4"/>

                </div>
                

            </section>


        </main>
       
    </div>
  )
}

 /**
 * Organize a publication with collaborators, publication name, conference and link
 * @param {*} param0 
 * @returns 
 */
function PubCard({publicationName}) {
    const router = useRouter();
    return (
        <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 my-5'>
            <h1 className='flex justify-center mt-3 ml-4 text-sm'>
                {publicationName}
            </h1>
            <div className='flex flex-row justify-around my-4'>
            <h1 onClick={()=> {
                router.push({
                    pathname: '/publication/publication1',
                    query: {pubName: publicationName}
                })
            }} className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>View</h1>
            <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>Edit</h1>

            </div>
        </div>
    );
}
