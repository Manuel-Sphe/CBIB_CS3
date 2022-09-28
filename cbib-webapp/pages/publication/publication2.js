import React from 'react'
import {useRouter} from "next/router"
import Header from '../../components/Header'
import { useState } from 'react';
import {Document, Page, pdfjs} from 'react-pdf'; //to enable uploading a pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/**
 * Page to edit a research publication
 * @param {*} props 
 * @returns a page with editable publication fields
 */
export default function Publication(props) {
    // The edit button
    const [edit,setEdit] = useState(true);
    const router = useRouter();

    // need to pull this from the database 
    const abstract = "Building computational models of agents in dynamic, partially observable and stochastic environments is challenging. We propose a cognitive computational model of sugarcane growers’ daily decision-making to examine sugarcane supply chain complexities. Growers make decisions based on uncertain weather forecasts; cane dryness; unforeseen emergencies; and the mill’s unexpected call for delivery of a different amount of cane. The Belief-Desire-Intention (BDI) architecture has been used to model cognitive agents in many domains, including agriculture. However, typical implementations of this architecture have represented beliefs symbolically, so uncertain beliefs are usually not catered for. Here we show that a BDI architecture, enhanced with a dynamic decision network (DDN), suitably models sugarcane grower agents’ repeated daily decisions. Using two complex scenarios, we demonstrate that the agent selects the appropriate intention, and suggests how the grower should act adaptively and proactively to achieve his goals. In addition, we provide a mapping for using a DDN in a BDI architecture. This architecture can be used for modelling sugarcane grower agents in an agent-based simulation. The mapping of the DDN’s use in the BDI architecture enables this work to be applied to other domains for modelling agents’ repeated decisions in partially observable, stochastic and dynamic environments.";
    const [Abstract,setAbs] = useState(abstract);

    //authors 
    const Authors = "Jane, John, Gary"; 
    const [authors,setAuthors] = useState(Authors);
    
    //Date 
    const pubDate = "10/06/2020";
    const pubName = router.query.pubName;
    // dummy data for profiles 
    const profiles = [
        {name:"Sphesihle Madonsela",position:"Student",image:"",id:0},
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {name:'User2 XSms',position:"Researcher, Student",image:"",id:2},
        {name:"Aser4 JJDJ",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        {name:"Sser3 DS",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4},
    ];

    return ( 

        <div className ='relative mb-32'>
            <header>
                <Header/>
            </header>
    
            <div  className = "flex flex-row gap-1 text-2xl text-black max-h-full ">
                <div className='container flex basis-1/4 flex-col  justify-content items-center  '>
                    <strong >Collaborators</strong>
                    <div className = "flex flex-col  justify-center items-center bg-white-100 rounded shadow-xl mt-4 border border-gray-200 bg-slate-50"> 
                        
                        <div className='p-10 flex flex-col space-y-3 overflow-auto h-96 ' >
                            <CardList data = {profiles} />
                        </div>     
                    </div>
                </div>
                
                <div className='flex basis-3/4 flex-col bg-white-100 px-5 justify-content items-center  '>
                    <strong>Metadata</strong>

                    <div className='w-full text-sm space-y-5 border border-gray-200 mt-4shadow-lg p-5 bg-slate-50 mt-4 '>   
                    {/* Title */}
                        <div className="flex justify-between items-center">
                            <p className="text-bold-lg text-lg">Title: </p>
                            <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder={pubName} disabled={true}/>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-lg text-bold">Authors </p>
                            <textarea className="border border-gray-300 rounded-sm p-5  w-2/3 h-8 mr-32 overflow-x-auto" disabled={edit} value={Authors} onChange={(e)=>setAuthors(e.target.value)}/>
                               
                          
                        </div>

                        <div className="flex justify-between items-center ">
                            <p className="text-bold text-lg ">Date Published: </p>
                            <div className="border border-gray-300  pl-5 pt-1 rounded-sm w-2/3 h-10 mr-32  " >
                                <p className='text-2xl text-bold text-gray-600 '>{pubDate}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg text-bold">Abstract: </p>
                            <textarea type="text" className="border border-gray-300 p-5 w-2/3 h-48 overflow-scroll mr-32 " placeholder="" disabled={edit} value={Abstract} onChange ={(event)=>{setAbs(event.target.value)}} />
                        </div>
                        <div className='flex justify-around items-center'>
                            <button  className=' bg-sky-400 text-gray-600 text-sm font-bold  py-1 px-4  mt-2 mb-2 ml-32 rounded inline-flex 
                                        justify-center 
                                        items-center
                                        border border-gray-500
                                        shadow-lg
                                        '
                                        
                                        onClick={()=>setEdit(false)}
                                    >Edit Publication   
                            </button>

                                <button  className='bg-sky-400 text-gray-600 text-sm font-bold  py-1 px-4 mt-2 mb-2 mr-32
                                        rounded 
                                        inline-flex 
                                        justify-center 
                                        items-center
                                        border border-gray-500
                                        shadow-lg
                                        ' 
                                    > Confirm
                                </button>
                        </div>
                    </div>
                </div>
     
            </div>
        </div>
    )
}
/**
 *This is a functional component  
 *  its props are {pic,userName,role}
 */
export const Card = (props) =>{
    const router = useRouter();
    return(
        <div onClick={()=> {
            router.push({
                pathname: '/viewProfile',
                query: {name: props.userName}
            })
        }} className = "hover:bg-gray-200 flex flex-row content-between border rounded-lg border-x-2 border-indigo-900 shadow-xl cursor-pointer "> 
           
            <div className="pt-2 pr-2 pl-2 relative w-20 h-20">
                {/* <img class = "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/> */}
                {
                    (props.pic.length!==0)?<img className= "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/>:<PlaceHolder userName={props.userName}/>
                }
            </div>

            <div className="text-sky-900 font-semibold pt-1 ltr:ml-3 rtl:mr-3">
                <strong className="text-sm font-medium text-slate-900 group-hover:text-slate-900">{props.userName}</strong>
                <p className="text-sm font-medium text-slate-500 pr-1 ">{props.role}</p>
            </div>

            {/* <PlaceHolder userName  = {props.userName}/> */}

        </div>
    )
}

export const PlaceHolder = ({userName}) =>{
    let initials ='';
    const arr = userName.split(' ');
    initials = arr[0][0]+arr[1][0] // getting the initials 
    return(

       <div className="border-2 border-black rounded-full w-14 h-14 flex justify-center items-center">
            <p className='font-semibold text-2xl text-red-400'>{initials}</p>
        </div>
    );
}

export const ListItem = (props) => <ul className = 'py-3'>{props.value}</ul>

// Card with brief info of the user 
const CardList = (props) => {
    const users  = props.data ;
    const listItems = users.map( (user) => <ListItem key={user.id} value={<Card pic={user.image} userName = {user.name} role = {user.position} />}/>);

    return(
        <ul>
            {listItems}
        </ul>
    );
}

