import React, { useState } from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import Multiselect from 'multiselect-react-dropdown';

/**
 * Page to generate a report based on set parameters
 * @returns a full page with various parameters
 */
export default function GenerateReport() {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const [universities, setUniversities] = useState([{name: 'University of Cape Town', id: 1},{name: 'University of Witwatersrand', id: 2}, {name: 'University of Pretoria', id: 3}, {name: 'Stellenbosch University', id: 4}, 
    {name: 'University of Johannesburg', id: 5}, {name: 'University of Kwazulu-Natal', id: 6}, {name: 'University of the Western Cape', id: 7}, {name: 'University of Limpopo', id: 8}, {name: 'Sol Plaatje University', id: 9}, {name: 'North-West University', id: 10}]);
    const [researchGroups, setResearchGroups] = useState([{name: 'Adaptive and Cognitive Systems Lab', id: 1},{name: 'AI and Cybersecurity', id: 2}, {name: 'AI for Development & Innovation', id: 3}, {name: 'CAIR Deep Learning', id: 4}, 
    {name: 'CAIR@UKZN', id: 5}, {name: 'Computational Thinking for AI', id: 6}, {name: 'Ethics of AI', id: 7}, {name: 'Knowledge Representation and Reasoning', id: 8}, {name: 'Speech Technologies', id: 9}, {name: 'Statistics@CAIR-UP', id: 10}, {name:'Swarm Intelligence Lab', id: 11}])
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter();
    

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className='flex flex-col mt-5 justify-center items-center' >
                <h1 className='text-2xl text-black text-center'>Generate Report</h1>
                <div className='flex w-2/3 justify-content mt-2 bg-gray-100 rounded-lg items-center flex-col'>

                    <div className="flex justify-between items-center w-2/3 mt-3">
                        <p className="">Universties/Universites: </p>
                        <Multiselect
                        displayValue="name"
                        className=''
                        onKeyPressFn={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        onSearch={function noRefCheck(){}}
                        onSelect={function noRefCheck(){}}
                        options={universities}
                        placeholder="Select the University/Universities"
                        style={{
                            inputField: { // To change input field position or margin
                                margin: '5px',
                                width: '450px'
                            },
                            chips: {
                            //background: 'sky'
                            },
                            multiselectContainer: {
                            color: 'black',
                            width: '450px'
                            },
                            searchBox: {
                                width: '450px',
                                border: '',
                                'border-radius': '5px',
                            }
                        }}
                        showCheckbox
                        />
                    </div>

                    <div className="flex justify-between items-center w-2/3 mt-3">
                        <p className="">Research Groups: </p>
                        <Multiselect
                        displayValue="name"
                        className=''
                        onKeyPressFn={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        onSearch={function noRefCheck(){}}
                        onSelect={function noRefCheck(){}}
                        options={researchGroups}
                        placeholder="Select Research Groups"
                        style={{
                            inputField: { // To change input field position or margin
                                margin: '5px',
                                width: '450px'
                            },
                            chips: {
                            //background: 'sky'
                            },
                            multiselectContainer: {
                            color: 'black',
                            width: '450px'
                            },
                            searchBox: {
                                width: '450px',
                                border: '',
                                'border-radius': '5px',
                            }
                        }}
                        showCheckbox
                        />
                    </div>

                    <div className="flex justify-between items-center w-2/3 mt-3">
                        <p className="">Email: </p>
                        <input type="text" className="border rounded-md border-gray-300 bg-gray-100 p-5 w-5/6 h-8" placeholder='example@cair.org' />
                    </div>

                    <div className="flex justify-between items-center w-2/3 mt-3">
                        <p className="">Start Year:</p>
                        <select className="w-20 h-8 flex justify-start border rounded-md  border-gray-300 bg-gray-100" placeholder='Year'> 
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center w-2/3 mt-3">
                        <p className="">End Year:</p>
                        <select className="w-20 h-8 flex justify-start border rounded-md  border-gray-300 bg-gray-100" placeholder='Year'> 
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                        </select>
                    </div>

                    <div className="w-2/3 flex justify-between  my-3">
                        <button type="button" className="bg-sky-400 px-3 py-1 rounded-lg "> Generate Report </button>
                    </div>

                </div>
                
            </div>
        </div>
    )
}