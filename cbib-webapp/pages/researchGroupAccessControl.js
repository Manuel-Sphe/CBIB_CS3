import React, {useState} from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import ResearchGroupDescription from './researchGroupDescription';
import ResearchGroupCollaborators from './researchGroupCollaborators';
import ResearchGroupResearchPublications from './researchGroupResearchPublications';
import { ProfileDetailsContext, ProfileDetailsProvider } from '../Global/ProfileDetailsContext';

export default function ResearchGroupAccessControl(props) {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const [view, setView] = useState(0);
    const router = useRouter();
    const researchGroup = router.query.researchGroup;
    const img = router.query.img;

    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className='flex flex-col mt-5 justify-center items-center' >
                <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col'>
                    <img className='m-5' src={img} height={250} width={250}/>
                    <p className='text-2xl text-sky-500 font-bold text-center'> {researchGroup ? researchGroup : groupName}</p>
                    <div className='flex flex-row mb-2'>
                        <h1 className='flex text-xl font-semibold text-sky-500'>Co-ordinator:</h1>
                        <h1 onClick={()=> {
                            router.push({
                                pathname: '/viewProfile',
                                query: {name: groupCoordinator}
                            })
                        }} className='flex text-xl font-semibold text-sky-500 ml-2 hover:text-sky-600 cursor-pointer'> {groupCoordinator}</h1>
                    </div>
                    <div className='flex flex-row text-gray-500 h-10 border-t-2 border-slate-400 w-full'>
                        <div onClick={()=>setView(0)} className={`flex w-1/3 justify-center items-center ${view===0? `border-b-2 border-sky-600 text-sky-600` : ""} cursor-pointer hover:bg-gray-200 rounded-md border-b-2 border-gray-100`}>
                            <p className="">Description</p>   
                        </div>
                        <div  onClick={()=>setView(1)} className={`flex w-1/3 justify-center items-center ${view===1? `border-b-2 border-sky-600 text-sky-600` : ""} cursor-pointer hover:bg-gray-200 rounded-md border-b-2 border-gray-100`}>
                            <p> Collaborators</p>
                        </div>
                        <div  onClick={()=>setView(2)} className={`flex w-1/3 justify-center items-center ${view===2? `border-b-2 border-sky-600 text-sky-600` : ""} cursor-pointer hover:bg-gray-200 rounded-md border-b-2 border-gray-100`}>
                            <p>Research Publications</p>
                        </div>   
                    </div>
                </div>

                <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5'  >
                { view===0 ? <ResearchGroupDescription/> : view===1 ? <ResearchGroupCollaborators researchGroup= {researchGroup} img= {img} /> : <ResearchGroupResearchPublications/> }
            
                </div>
                
            </div>
        </div>
    )
}