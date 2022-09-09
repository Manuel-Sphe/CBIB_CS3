import React , {useState} from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import { ProfileDetailsContext, ProfileDetailsProvider } from '../Global/ProfileDetailsContext';
import InviteMemberForm from '../components/InviteMemberForm';

export default function ResearchGroup() {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Hamilton J, Park J, Bailey A, Meyer T. An Investigation into the Scalability of Defeasible Reasoning Algorithms. In: Second Southern African Conference for Artificial Intelligence. Online: SACAIR 2021 Organising Committee; 2022. https://protect-za.mimecast.com/s/OFYSCpgo02fL1l9gtDHUkY.', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter()

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    
    function PubCard({publicationName}) {
        return (
            <div className='w-11/12 h-1/6 border text-gray-700 rounded mx-4 my-5'>
                <h1 className='flex mt-3 ml-4 text-sm'>
                    {publicationName}
                </h1>
                <div className='flex flex-row justify-around my-4'>
                    <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>View</h1>
                    <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer'>Edit</h1>
                    <h1 className='text-stone-700 hover:text-sky-400 text-xs cursor-pointer' onClick={toggleForm}>Manage Access</h1>

                </div>
            </div>
        );
    }


    return (
        <div className='h-screen w-screen'>
            <header>
                <Header/>
            </header>

            <div className='flex flex-col mt-5 justify-center items-center' >
                <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col'>
                    <img className='m-5' src='https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg' height={250} width={250}/>
                    <p className='text-2xl text-sky-500 font-bold text-center'> {groupName}</p>
                    <div className='flex flex-row mb-2'>
                                <h1 className='flex text-xl font-semibold text-sky-500'>Co-ordinator:</h1>
                                <h1 className='flex text-xl font-semibold text-sky-500 ml-2 hover:text-sky-600 cursor-pointer'> {groupCoordinator}</h1>
                    </div>
                    <div className='flex flex-row text-gray-500 h-10 border-t-2 border-slate-400 w-full'>
                        <div onClick={()=>router.push("/researchGroupDescription")} className='flex w-1/3 justify-center items-center cursor-pointer hover:bg-gray-200 rounded-md border-b-2 border-gray-100'>
                            <p>Description</p>   
                        </div>
                        <div onClick={()=>router.push("/researchGroupCollaborators")} className='flex w-1/3 justify-center items-center cursor-pointer hover:bg-gray-200 rounded-md border-b-2 border-gray-100'>
                            <p>Collaborators</p>
                        </div>
                        <div className='flex w-1/3 justify-center items-center border-b-2 border-sky-600 cursor-default'>
                            <p className="text-sky-600">Research Publications</p>
                        </div>
                    </div>
                </div>

                <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5'>
                            {
                                showForm && (
                                    <InviteMemberForm/>
                                )
                            }
                            {Publications.map( (title) => <PubCard publicationName={title}/>)}
                </div>
            </div>
        </div>
    )
}