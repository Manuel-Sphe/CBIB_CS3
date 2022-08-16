import React from 'react'
import Header from '../components/Header'
import UCTLogo from '../University_of_Cape_Town_logo.svg.png'
import {ReactComponent as UCTLogo2} from '../UCT-logo.jpeg'
import Publications from '../components/Publications'
import Group from '../components/Group'

export default function Dashboard() {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];

    return (
        <div>
            <header>
                <Header/>

            </header>
            <div className='flex justify-around mt-10 ' >
                <div className='w-1/4'>
                    <h1 className='text-2xl text-blue-500 text-center'>My Publications</h1>
                    <div className='w-full border text-gray-700 rounded '>
                        <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 mt-5'>
                            <h1 className='flex mt-3 ml-4 text-sm'>
                                Pub 1
                            </h1>
                            <div className='flex flex-row justify-around my-4'>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>View</h1>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>Edit</h1>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>Manage Access</h1>
                            </div>
                        </div>

                        <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 mt-5'>
                        <h1 className='flex mt-3 ml-4 text-sm'>
                                Pub 2
                            </h1>
                            <div className='flex flex-row justify-around my-4'>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>View</h1>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>Edit</h1>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>Manage Access</h1>
                            </div>
                        </div>
                        
                        <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 my-5'>
                            <h1 className='flex mt-3 ml-4 text-sm'>
                                Pub 3
                            </h1>
                            <div className='flex flex-row justify-around my-4'>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>View</h1>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>Edit</h1>
                                <h1 className='text-stone-700 hover:text-sky-400 text-xs'>Manage Access</h1>
                            </div>
                        </div>
                    </div>
                        

                </div>

                <div className='w-1/4'>
                    <h1 className='text-2xl text-blue-500 text-center'>My Group</h1>
                    <div className='w-full border text-gray-700 rounded '>
                        <div className='w-11/12 border text-gray-700 rounded mx-4 my-5'>
                            <img className='mx-20' src='https://everynationcpt.org/wp-content/uploads/2017/06/UCT-logo.jpg' height={150} width={150}/>
                            <h1 className='flex justify-center text-xl'>{university}</h1>
                            <h1 className='flex justify-center text-center font-bold mt-5'>{groupName}</h1>
                            <div className='flex flex-row'>
                                <h1 className='flex mt-5 ml-4'>Admin: </h1>
                                <h1 className='flex mt-5 ml-1 text-base hover:text-sky-400 text-xs'>{groupAdmin}</h1>
                            </div>

                            <div className='flex flex-row'>
                                <h1 className='flex mt-5 ml-4'>Co-ordinator:  </h1>
                                <h1 className='flex mt-5 ml-1 text-base hover:text-sky-400 text-xs'>{groupCoordinator}</h1>
                            </div>

                            <div className='flex flex-row'>
                                <h1 className='flex mt-5 ml-4'>Researchers: </h1>
                                <h1 className='flex mt-5 ml-1 text-base text-xs'>{researchers}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/4 h-5/6'>
                    <h1 className='text-2xl text-blue-500 text-center'>Issues/Requests</h1>
                    <div className='w-full h-5/6 border text-gray-700 rounded'>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}