import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import {useRouter} from "next/router";
import  {ProfileDetailsContext, ProfileDetailsProvider}  from '../Global/ProfileDetailsContext';

export default function ViewProfile(props) {
    
   

    const router = useRouter()
    
    //const [pic, setPic] = useState(img='');

  return (
    <div>
        <header>
            <Header/>
        </header>
        
        <div className='flex flex-row mt-10'>
            <div className='flex basis-1/4 justify-center'>
                <div className='flex w-72 h-72 justify-center'>
                    <img className='rounded' src={'https://media.npr.org/assets/img/2015/10/22/gettyimages-475425810-c4f2d327fc8a7a2f39098dfbae1012cc9040f1d2-s600-c85.webp'}/>
                </div>
            </div>

            <div className='flex basis-1/2 justify-start flex-col h-screen space-y-10'>
                <h1 className='flex text-5xl ml-20'>
                    name
                </h1>
                <h1 className='flex text-4xl mx-20 '>
                    university
                </h1>
                <h1 className='flex text-4xl mx-20'>
                    groupName
                </h1>
                <h1 className='flex text-4xl mx-20'>
                    Bio
                </h1>
                <h1 className='flex text-xl mx-20'>
                    bio
                </h1>
                
            </div>

            <div className='flex basis-1/4 justify-end'>
                <button type='button' onClick={()=>router.push("/profile")} className='flex rounded bg-blue-500  h-fit py-0.5 px-4 hover:bg-blue-600'>
                    Edit profile
                </button>
            </div>
        </div>
    </div>
  )
}
