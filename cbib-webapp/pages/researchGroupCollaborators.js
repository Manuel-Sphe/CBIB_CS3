import React from 'react'
import Header from '../components/Header'
import {useRouter} from "next/router"
import { ProfileDetailsContext, ProfileDetailsProvider } from '../Global/ProfileDetailsContext';


export default function ResearchGroup({name}) {

    const groupName = 'Knowledge Representation and Reasoning (KRR)';
    const university = 'University of Cape Town';
    const groupAdmin = 'Tshiamo Phaahla';
    const groupCoordinator = 'Prof. Tommie Meyer';
    const researchers = ['Tommie, ', 'Kevaalin, ', 'Sphe, ', 'José, ', 'Tshiamo'];
    const Publications = ['Responsibility gaps and the reactive attitudes', 'Two Sepedi-English code-switched speech corpora', 'Combining Machine Learning and Bayesian Networks for ECG Interpretation and Explanation']
    const router = useRouter()

    const profiles = [
        {name:"Sphesihle Madonsela",position:"Student",image:"",id:4},
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {name:'User2 XSms',position:"Researcher, Student",image:"",id:2},
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

                <div className='flex w-2/3 justify-content  bg-gray-100 rounded-lg items-center flex-col mt-5'  >
                        <CardList data= {profiles}/>
                </div>
            </div>
        </div>
    )
}


export const Card = (props) =>{

return(
    <div className = "flex flex-row rounded-lg cursor-pointer hover:bg-gray-200 w-full "> 
       
        <div className="my-2 mx-2 relative w-14 h-14">
            {
                (props.pic.length!==0)?<img className= "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/>:<PlaceHolder userName={props.userName}/>
            }
        </div>

        <div className="text-sky-900 font-semibold mt-1 ltr:ml-3 rtl:mr-3">
            <strong className="text-sm font-medium text-slate-900 group-hover:text-slate-900">{props.userName}</strong>
            <p className="text-sm font-medium text-slate-500 mr-1 ">{props.role}</p>
        </div>

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

export const ListItem = (props) => <ul className = 'mx-3 my-3'>{props.value}</ul>

// Card with brief info of the user 
const CardList = (props) => {
const users  = props.data ;
const listItems = users.map( (user) => <ListItem  key={user.id} value={<Card pic={user.image} userName = {user.name} role = {user.position} />}/>);

return(
    <ul className="mx-5 w-full">
        {listItems}
    </ul>
);
}
