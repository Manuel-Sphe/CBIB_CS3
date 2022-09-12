import React from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import { ProfileDetailsContext, ProfileDetailsProvider } from '../Global/ProfileDetailsContext';
import { MemberData } from '../components/MemberExampleData';


export default function ResearchGroup({name}) {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    //const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter()

    const profiles = [
        {firstName:"Sphesihle", lastName:'Madonsela', position:"Student", university: 'University of Cape Town', image:"",id:4},
        {firstName:'Tommie', lastName:'Meyer', position:"Researcher,Co-ordinator", university: 'University of Cape Town', image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {firstName:'User2', lastName:'XSms', position:"Researcher, Student", university: 'University of Cape Town', image:"", id:2},
        //{name:"Aser4 JJDJ",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        //{name:"Sser3 DS",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4},
    ];



    return (
        <div>
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
                        <div className='flex w-1/3 justify-center items-center border-b-2 border-sky-600 cursor-default'>
                            <p className="text-sky-600">Collaborators</p>
                        </div>
                        <div onClick={()=>router.push("/researchGroupResearchPublications")} className='flex w-1/3 justify-center items-center cursor-pointer hover:bg-gray-200 rounded-md border-b-2 border-gray-100'>
                            <p>Research Publications</p>
                        </div> 
                    </div>
                </div>

                <div className='flex w-2/3 justify-content bg-gray-100 rounded-lg items-center flex-col mt-5'>
                    <div className='grid grid-cols-10 text-black text-sm h-10 border-b-2 border-slate-300 w-full'>
                        
                        <div className='flex col-start-2 justify-start items-center'>
                            <p className='font-bold'>First Name</p>   
                        </div>
                        <div className='flex col-start-4 justify-start items-center'>
                            <p className='font-bold'>Last Name</p>
                        </div>
                        <div className='flex col-start-6 col-span-2 justify-start items-center'>
                            <p className='font-bold'>Position</p>
                        </div>
                        <div className='flex col-start-8 col-span-2 justify-start items-center'>
                            <p className='font-bold'>University</p>
                        </div>
                    </div>

                        {/* <CardList data={profiles}/> */}
                    <div className="flex rounded-lg cursor-pointer h-16  w-full items-center justify-center ">
                        {/* <button></button> */}
                        <button onClick = {()=>router.push("/accesscontrol")} className='text-tiny bg-blue-300 text-white rounded-md py-2 px-1 w-1/2 hover:shadow-xl active:scale-90 transition duration-150 whitespace-nowrap'>Manage Collaborators</button>


                    </div>
                        {
                            MemberData.map((member, index)=>{
                                console.log(member)
                                return(
                                    
                                    <CardDemo member={member} />
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}


export const CardDemo = ({member}) =>{

return(
    <div className = "grid grid-cols-10 rounded-lg cursor-pointer h-16 hover:bg-gray-200 w-full "> 
       
        <div className="ml-3 w-14 h-14 self-center">
            {/* {
                (props.pic.length!==0)?<img className= "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/>:<PlaceHolder firstName={props.firstName} lastName={props.lastName} />
            } */}
            
        </div>
        
        <div className='flex col-start-2 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{member.user.first_name}</p> 
        </div>
        <div className='flex col-start-4 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{member.user.last_name}</p>
        </div>
        <div className='flex col-start-6 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{member.roles}</p>
        </div>
        <div className='flex col-start-8 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{member.user.organisation}</p>
        </div>
        

    </div>
)
}

export const Card = (props) =>{

return(
    <div className = "grid grid-cols-10 rounded-lg cursor-pointer h-16 hover:bg-gray-200 w-full "> 
       
        <div className="ml-3 w-14 h-14 self-center">
            {
                (props.pic.length!==0)?<img className= "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/>:<PlaceHolder firstName={props.firstName} lastName={props.lastName} />
            }
            
        </div>
        
        <div className='flex col-start-2 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{props.firstName}</p> 
        </div>
        <div className='flex col-start-4 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{props.lastName}</p>
        </div>
        <div className='flex col-start-6 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{props.role}</p>
        </div>
        <div className='flex col-start-8 col-span-2 justify-start items-center'>
            <p className="text-black text-sm">{props.university}</p>
        </div>
        

    </div>
)
}

export const PlaceHolder = ({firstName, lastName}) =>{
let initials ='';
initials = firstName[0]+lastName[0] // getting the initials 
return(

    <div className="border-2 border-black rounded-full w-14 h-14 flex justify-center items-center">
        <p className='font-semibold text-2xl text-red-400'>{initials}</p>
    </div>
);
}

export const ListItem = (props) => <ul className = 'my-3'>{props.value}</ul>

// Card with brief info of the user 
const CardList = (props) => {
const users  = props.data ;
const listItems = users.map( (user) => <ListItem  key={user.id} value={<Card pic={user.image} firstName = {user.firstName} lastName= {user.lastName} role = {user.position} university= {user.university} />}/>);

return(
    <ul className="mx-5 w-full">
        {listItems}
    </ul>
);
}
