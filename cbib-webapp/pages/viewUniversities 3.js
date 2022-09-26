import React, {useState} from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"


export default function ViewUniversities() {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const universities = [
        {university: 'University of Cape Town', researchGroups: ['Knowledge Representation and Reasoning (KRR)', 'Adaptive and Cognitive Systems Lab'],  image:'https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'},
        {university: 'University of the Western Cape', researchGroups: 'AI and Cybersecurity',  image:'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/UWC_logo.svg/1200px-UWC_logo.svg.png'},
        {university: 'University of Pretoria', researchGroups: ['AI for Development & Innovation', 'Ethics of AI', 'Statistics@CAIR-UP'],  image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {university: 'North West University', researchGroups: 'CAIR Deep Learning',  image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-07/nwu-logo-purple.png?itok=wb1cE8Jy'},
        {university: 'University of Kwazulu-Natal', researchGroups: 'CAIR@UKZN', image:'https://www.fameafrica.tv/wp-content/uploads/2021/01/UKZN-Student-Central.png'},
        {university: 'University of Stellenbosch', researchGroups: 'Computational Thinking for AI', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-07/Stellenbosch-University-Logo.png?itok=BVo60nHe'},
        {university: 'University of Limpopo', researchGroups: 'Speech Technologies', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2021-04/1200px-University_of_Limpopo_logo.png?itok=Dwra5wo3'},
        {university: 'Sol Plaatje University', researchGroups: 'Swarm Intelligence Lab', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2021-04/1200px-Sol_Plaatje_University_logo.png?itok=wV_feiKJ'},
    ]
        
    
    
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    
    const router = useRouter();

    function ResearchGroupsCard({researchGroups}) {
        if (!Array.isArray(researchGroups)){
            console.log(researchGroups.length, '1111');
            return (
                <h1 onClick={()=> {
                    router.push({
                        pathname: '/researchGroupAccessControl',
                        query: {researchGroup: researchGroups}
                    })
                }} className='flex justify-center text-center font-bold mt-5 ml-4 hover:text-sky-400 cursor-pointer'>{researchGroups}</h1>
            );
        }
        else if (Array.isArray(researchGroups)){
            console.log(researchGroups, '>2');
            for (let i = 0; i <=3; i++){
                console.log(i, 'i')
                return (
                    <h1 onClick={()=> {
                        router.push({
                            pathname: '/researchGroupAccessControl',
                            query: {researchGroup: researchGroups}
                        })
                    }} className='flex justify-center text-center font-bold mt-5 ml-4 hover:text-sky-400 cursor-pointer'>{researchGroups[i]}</h1>
                );
            } 
        }
           
    }

    
    function UniversitiesCard({universities}) {
        return (
            <div className='w-11/12 h-3/5 border text-gray-700 rounded mx-4 my-5'>
                <div className='w-full border bg-gray-100 text-gray-700 rounded '>
                    <div className='flex flex-col justify-items-center w-11/12 border text-gray-700 rounded mx-4 my-5'>
                        <div className='flex justify-center'>
                            <img className='flex mt-5' src={universities.image} height={150} width={150}/>
                        </div>

                        <div className='flex items-start flex-row h-full bg-slate-50'>
                            <ResearchGroupsCard researchGroups={universities.researchGroups}/>
                        </div>


        
                    </div>
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
                <div className='w-11/12'>
                    <h1 className='mb-3 text-2xl text-sky-400 text-center'>Research Groups</h1>
                    <div className='grid grid-cols-3 w-full justify-around border bg-gray-100 rounded'>
                            {universities.map( (title) => <UniversitiesCard universities={title}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}