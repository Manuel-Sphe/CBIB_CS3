import React from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import { ProfileDetailsContext, ProfileDetailsProvider } from '../Global/ProfileDetailsContext';
import { MemberData } from '../components/MemberExampleData';


export default function ResearchGroupCollaborators({name}) {

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
            <div className='flex flex-col w-full justify-center items-center' >

                <div className='flex w-full justify-content bg-gray-100 rounded-lg items-center flex-col'>
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
                    
                        {
                            MemberData.map((member, index)=>{
                                console.log(member)
                                return(
                                    
                                    <CardDemo member={member} />
                                )
                            })
                        }
                        <div className="flex rounded-lg h-16  w-full items-center justify-center ">
                        {/* <button></button> */}
                        <button onClick = {()=>router.push("/accesscontrol")} className='text-tiny bg-sky-500 text-white rounded-md py-2 px-1 w-1/2 hover:bg-sky-600 shadow-xl active:scale-90 transition duration-150 whitespace-nowrap'>Manage Collaborators</button>


                    </div>
                </div>
            </div>

    )
}


export const CardDemo = ({member}) =>{
const router = useRouter()

return(
    <div onClick={()=> {
        router.push({
            pathname: '/viewProfile',
            query: {name: member.user.first_name}
        })
    }}  className = "grid grid-cols-10 rounded-lg cursor-pointer h-16 hover:bg-gray-200 w-full "> 
       
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
