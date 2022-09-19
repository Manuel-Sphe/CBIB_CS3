import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import {useRouter} from "next/router";
import  {ProfileDetailsContext, ProfileDetailsProvider}  from '../Global/ProfileDetailsContext';
import Image from "next/image";

export default function ViewProfile({userInfo}) {
    
   

    const router = useRouter()
    const name = router.query.name;
    //const [pic, setPic] = useState(img='');

  return (
    <div>
        <header>
            <Header/>
        </header>

        <main className="space-y-12 mt-8">
            
            {/* Profile Summary Section */}

            <section className="flex justify-center items-center space-x-8">
                <div className="bg-gray-400 w-36 h-36 rounded-full">
                    {/* <Image src={userInfo.profile_picture} layout="fill"/> */}
                </div>

                <div className="w-2/5 space-y-2">
                    <h2 className="border-b text-xl font-semibold col-span-2">Basic Information</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-sm">Name: </p>
                        <p className="w-2/3">{userInfo.profile.first_name} {userInfo.profile.last_name}</p>
                    </div>

                    <div className="border-b"/>


                    <div className="flex justify-between items-center">
                        <p className="text-sm">Organisation: </p>
                        <p className="w-2/3">John Doe</p>
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


            {/* Research Papers and Contributions */}
            <section className=" w-3/5 mx-auto">

                <div className="w-full">
                    {
                        userInfo.publications.map((item, index) => {
                            return (
                                <PubCard publication={item}/>
                            )
                            // console.log(item)
                            
                        })
                    }
                    {/* <PubCard publicationName="Whatever You Want"/>
                    <PubCard publicationName="Whatever You Want"/>
                    <PubCard publicationName="Whatever You Want"/>
                    <PubCard publicationName="Whatever You Want"/> */}

                </div>
                

            </section>


        </main>

                
        



            {/* <div className='flex basis-1/4 justify-end'>
                <button type='button' onClick={()=>router.push("/profile")} className='flex rounded bg-blue-500  h-fit py-0.5 px-4 hover:bg-blue-600'>
                    Edit profile
                </button>
            </div> */}
       
    </div>
  )
}

function PubCard({publication}) {
    return (
        <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 my-5 px-5'>
                <h1 className='flex mt-3 text-sm'>
                    <p className="space-x-2">
                    {
                        publication.authors.map((item,index)=>{
                            return(
                                <div className="inline-flex">
                                    {item}
                                </div>
                            )
                        })
                    }
                    </p>
                    {/* {publication.authors} */}
                {/* {publication.title} */}
                </h1>
                <p className=" ">
                    {publication.abstract}
                {/* {publicationName.link} */}
                </p>
                

            
            <div className='flex flex-row justify-around my-4'>
                <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>View Abstract</h1>
                <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>BibTex Entry</h1>
                <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>BibTex Download</h1>
                <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>Download PDF</h1>
                {/* <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer' onClick={toggleForm}>Edit Publication</h1> */}

            </div>
        </div>
    );
}


export async function getStaticProps(){

    const res = await fetch("http://localhost:8000/users/ByID/6325bb96af32380d1e334a74")

    const userInfo = await res.json()

    console.log(userInfo)

    return {
        props: {
            userInfo
        }
    }
}