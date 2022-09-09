import React ,{useState} from "react";
import Header from "../components/Header";
import { Footer } from "../components/Header";
import {CardList } from "./publication";

/**
 * 
 * Needs to takle a research group as a parm
 * manage users for that research group 
 * add or remove  
*/





export default function ManageUsers({researchGroup}){
    
     // dummy data for profiles 
     const profiles = [
        {name:"Sphesihle Madonsela",position:"Student",image:"",id:0},
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {name:'User2 XSms',position:"Researcher, Student",image:"",id:2},
        {name:"Aser4 JJDJ",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        {name:"Sser3 DS",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4},
        {name:"New User",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/women/97.jpg",id:5},
        {name:"John Doe",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/77.jpg",id:6},
    ];

    const [remove,setRemove] = useState(false); 
    const [showForm,setShowForm] = useState(false);

    const toggleForm = () =>{
        setShowForm(!showForm)
    }

    return(
       
        
        <div className='w-screen h-screen bg-slate-50'>
            <header>
                <Header/>
            </header>

            <div className=' flex flex-col mt-5  items-center  '>   
                <strong className="text-3xl text-slate-600">Manage Parcipants </strong>
                <div className='flex  flex-col w-2/3 border border-slate-200 rounded-md bg-gray-100 '>
                    
                    <div className="h-96  p-5 overflow-y-scroll">
                        <CardList data={profiles} />
                    </div>
                    

                    <div className="flex justify-center items-center m-2">
                        <button className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 bg-sky-500 text-center w-40 rounded-full text-white font-bold text-bold text-lg  py-2 px-4 m-5">Add</button>
                        <button className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 m-5 bg-sky-500 w-40  text-white font-bold text-lg text-bold py-2 px-4 rounded-full " onClick={toggleForm}>Remove</button>
                    </div>
              
                </div>
                
            </div>  

            <div>

            </div>

        </div>
       
    );
}