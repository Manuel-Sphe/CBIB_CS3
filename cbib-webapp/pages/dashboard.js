import React, {useState} from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"


export default function Dashboard() {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter()

    
    function PubCard({publicationName}) {
        const router = useRouter();
        return (
            <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 my-5'>
                <h1 className='flex mt-3 ml-4 text-sm'>
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
                    <h1 onClick={()=> {
                        router.push({
                            pathname: '/accesscontrol',
                            query: {pubName: publicationName}
                        })
                    }} className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>Manage Access</h1>
                </div>
            </div>
        );
    }


    return (
        <div className='h-screen w-screen'>
            <header>
                <Header/>
            </header>

            <div className='flex justify-around mt-10' >
                <div className='w-1/4'>
                    <h1 className='text-2xl text-sky-400 text-center'>My Publications</h1>
                    <div className='w-full border bg-gray-100 text-gray-700 rounded '>
                            {Publications.map( (title) => <PubCard publicationName={title}/>)}
                    </div>
                    
                </div>

                <div className='w-1/4'>
                    <h1 className='text-2xl text-sky-400 text-center'>My Group</h1>
                    <div className='w-full border bg-gray-100 text-gray-700 rounded '>
                        <div className='w-11/12 border text-gray-700 rounded mx-4 my-5'>
                            <img className='mx-20 mt-5' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg' height={150} width={150}/>
                            <h1 className='flex justify-center text-xl'>{university}</h1>
                            <h1 onClick={()=>router.push("/researchGroupAccessControl")} className='flex justify-center text-center font-bold mt-5 hover:text-sky-400 cursor-pointer'>{groupName}</h1>
                            <div className='flex flex-row'>
                                <h1 className='flex mt-5 ml-4'>Admin: </h1>
                                <a className='cursor-pointer flex mt-5 ml-1 text-base hover:text-sky-400 '>{groupAdmin}</a>
                            </div>

                            <div className='flex flex-row'>
                                <h1 className='flex mt-5 ml-4'>Co-ordinator:  </h1>
                                <h1 className='flex mt-5 ml-1 text-base hover:text-sky-400 cursor-pointer'>{groupCoordinator}</h1>
                            </div>

                            <div className='flex flex-row'>
                                <h1 className='flex mt-5 ml-4'>Researchers: </h1>
                                <h1 className='flex mt-5 ml-1 text-base cursor-pointer'>{researchers}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/4 h-5/6'>
                    <h1 className='text-2xl text-sky-400 text-center'>Issues/Requests</h1>
                    <div className='flex w-full h-5/6 border bg-gray-100 text-gray-700 justify-center rounded'>
                        <div className='flex'>
                            <button type='button' onClick={()=>router.push("/generateReport")} className='flex justify-center rounded bg-sky-400 px-5 py-1 hover:bg-sky-500'>
                                Generate report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}