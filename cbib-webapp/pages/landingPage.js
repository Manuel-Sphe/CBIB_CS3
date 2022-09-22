import React, {useState} from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"


export default function Dashboard(props) {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter()
    const name = router.query.name;

    const researchGroups = [
        {researchGroup: 'Knowledge Representation and Reasoning (KRR)' ,university: 'University of Cape Town',  image:'https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'},
        {researchGroup: 'Adaptive and Cognitive Systems Lab' ,university: 'University of Cape Town',  image:'https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'},
        {researchGroup: 'AI and Cybersecurity', university: 'University of the Western Cape', image:'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/UWC_logo.svg/1200px-UWC_logo.svg.png'},
        {researchGroup: 'AI for Development & Innovation', university: 'University of Pretoria', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {researchGroup: 'CAIR Deep Learning', university: 'North West University', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-07/nwu-logo-purple.png?itok=wb1cE8Jy'},
        {researchGroup: 'CAIR@UKZN', university: 'University of Kwazulu-Natal', image:'https://www.fameafrica.tv/wp-content/uploads/2021/01/UKZN-Student-Central.png'},
        {researchGroup: 'Computational Thinking for AI', university: 'University of Stellenbosch', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-07/Stellenbosch-University-Logo.png?itok=BVo60nHe'},
        {researchGroup: 'Ethics of AI', university: 'University of Pretoria', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {researchGroup: 'Statistics@CAIR-UP', university: 'University of Pretoria', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {researchGroup: 'Speech Technologies', university: 'University of Limpopo', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2021-04/1200px-University_of_Limpopo_logo.png?itok=Dwra5wo3'},
        {researchGroup: 'Swarm Intelligence Lab', university: 'Sol Plaatje University', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2021-04/1200px-Sol_Plaatje_University_logo.png?itok=wV_feiKJ'},
    ]
        
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
                            pathname: '/publication/publication2',
                            query: {pubName: publicationName}
                        })
                    }} className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>View</h1>
                    <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'
                        onClick={()=>{
                            router.push(
                                {
                                    pathname: '/publication/publication1',
                                    query: {pubName: publicationName}
                                }
                            )
                        }}
                    >
                        Edit</h1>
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
    
    function ResearchGroupCard({researchGroups}) {
        return (
            
                <div className='w-full h-full border shadow-md border-gray-200 bg-gray-100 text-gray-700 rounded my-5'>
                    <div className='flex flex-col justify-items-center w-11/12 border text-gray-700 rounded'>
                        <div className='flex justify-center'>
                            <img className='flex mt-5' src={researchGroups.image} height={150} width={150}/>
                        </div>
                        
                        <h1 onClick={()=> {
                            router.push({
                                pathname: '/researchGroupAccessControl',
                                query: {researchGroup: researchGroups.researchGroup}
                            })
                        }} className='flex justify-center text-center font-bold mt-5 hover:text-sky-400 cursor-pointer'>{researchGroups.researchGroup}</h1>
                        <div className='flex items-start flex-row h-full bg-slate-50'>
                            <h1 className='flex mt-5 ml-4'>Abstract </h1>
                        </div>

                        <div className='flex items-center flex-row'>
                            <h1 className='flex mt-5 ml-4'>Co-ordinator: </h1>
                            <h1 className='flex mt-5 ml-1 text-base hover:text-sky-400 cursor-pointer'>{groupCoordinator}</h1>
                        </div>

        
                    </div>
                </div>
        );
    }

    


    return (
        <div className='h-screen w-screen'>
            <header>
                <Header props= {name}/>
            </header>

            <div className='flex flex-col mt-10' >
                <h1 className='mb-3 text-2xl text-sky-400 text-center'>Research Groups</h1>
                    <ul className='flex flex-nowrap border gap-x-5 bg-gray-200 overflow-x-scroll w-screen'>
                            {researchGroups.map( (title) => <ResearchGroupCard researchGroups={title}/>)}
                    </ul>

    
            </div>
        </div>
    )
}