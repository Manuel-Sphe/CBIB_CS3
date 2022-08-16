import React from 'react'
import Header from '../components/Header'


export default function Publication(name) {
    
    const profiles = [
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/99.jpg",id:1},
        {name:'User2',position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/98.jpg",id:2},
        {name:"User4",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        {name:"User3",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4}
    ];
    return (

        
        <div>
            
            <header>
                <Header/>
            </header>
            Publication Page

            <div  className = "columns-3 flex justify-around  text-2xl text-sky-500">
                <div>
                    <p >Collaborators</p>
                    <div class = "container mx-auto  flex flex-row  content-start bg-gray-100 rounded  shadow-xl"> 
                        <ul class='pt-5 pb-5 pr-5 pl-5 flex flex-col-reverse space-y-5 space-y-reverse '>

                            {
                                
                                profiles.map( (user) => <Card pic={user.image} userName = {user.name} role = {user.position}/>)
                            }
                           
                        </ul>
                    </div>
                </div>
                
                <div>Metadata</div>
                <div>Uploads</div>
            </div>
        </div>
    )
}


// This takes 
export  const Card = (props) =>{
    return(
        <div className = "column-2 flex flex-row content-start border border-x-2 border-indigo-900 shadow-xgol"> 
           
            <div class="pt-2 pr-2 relative w-20 h-20">
                <img class = "rounded-full boader boader-grey-100 shadow-sm boader " src={props.pic}/>
            </div>

            <div class="text-sky-900 font-semibold pt-5">
                {props.userName}
                <br/>
                <p class="text-xs pl-1"> {props.role}</p>
            </div>

        </div>
    )
}