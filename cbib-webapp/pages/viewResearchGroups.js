import React, {useState} from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import TopBarNav from '../components/TopNav';


export default function ViewResearchGroups() {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
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
        
    
    
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    
    const router = useRouter()

    
    function ResearchGroupCard({researchGroups}) {
        return (
            <div className='w-11/12 h-3/5 border text-gray-700 rounded mx-4 my-5'>
                <div className='w-full border bg-gray-100 text-gray-700 rounded '>
                    <div className='flex flex-col justify-items-center w-11/12 border text-gray-700 rounded mx-4 my-5'>
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
            </div>
        );
    }


    return (
        <div className='h-screen w-screen '>
            <header>
                <TopBarNav/>
            </header>

            <div className='h-20 bg-slate-900  text-white flex flex-col  justify-center text-lg mt-6'>
                <a className="ml-48  w-10 hover:underline hover:text-sky-400" href="/landingPage">Home</a>
            </div>

            <div className='flex justify-around mt-10 ' >
                <div className='w-11/12'>
                    <h1 className='mb-3 text-3xl text-sky-700 text-center text-bold'>Research Groups</h1>
                    <div className='grid grid-cols-3 w-full justify-around border bg-gray-100 rounded'>
                            {researchGroups.map( (title) => <ResearchGroupCard researchGroups={title}/>)}
                    </div>
                </div>
            </div>
            <footer className='h-16 bg-gray-500 mt-5 '> 
                <nav className='flex sm:justify-center space-x-4'>
                    {
                        
                     /* list =[
                        ['Events','/events'],
                        ['News','/news'],
                        ['About','/about']
                        ['Login','/login']
                    ].map(([title,url])=> (
                                <a href={url} className='rounded-lg px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900'>{title}</a>
                            )
                        ) */
                    }
                </nav>
            </footer>
        </div>
    )
}
