import React from 'react'
import {useRouter} from "next/router"

/**
 * Display the description of a specific research group
 * @param {*} param0 
 * @returns 
 */
export default function ResearchGroupDescription({}) {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter();


    return (
            <div className='flex flex-col mt-5 justify-center items-center' >

                <div className='flex justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5'  >
                        <p className='mx-10 mt-7 mb-5'>KRR is a research group based in Computer Science at the University of Cape Town. The group works on various aspects of Knowledge Representation and Reasoning. At present our focus is on belief change, defeasible reasoning, and other forms of non-monotonic and non-classical reasoning.</p>
                        <p className='mx-10 mb-10'>We are always looking for good postgraduate students to join the group. If you have an interest in logic-based Artificial Intelligence, please contact Prof Tommie Meyer at tmeyer@cair.org.za. Details about postgraduate admission in Computer Science at UCT can be found here: </p>
                        <p className='mx-10 mb-10'>http://www.sit.uct.ac.za/sit/postgrad/overview</p>
                </div>
                
            </div>
    )
}