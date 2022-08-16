import React from 'react'
import Header from '../components/Header'


export default function Publication(name) {
    
    const profiles = [
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {name:'User2 XSms',position:"Researcher, Student",image:"",id:2},
        {name:"Aser4 JJDJ",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        {name:"Sser3 DS",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4}
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

                            <button class="bg-blue-300 hover:bg-gray-400 text-gray-600 font-bold py-1 px-4 rounded inline-flex items-center">
                              <span class="pl-5">Add/Remove<br/>Collaborators</span>
                              
                            </button>
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
        <div className = "column-2 hover:bg-gray-200 flex flex-row content-between border rounded-lg border-x-2 border-indigo-900 shadow-xgol cursor-pointer "> 
           
            <div class="pt-2 pr-2 pl-2 relative w-20 h-20">
                {/* <img class = "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/> */}
                {
                    (props.pic.length!==0)?<img class = "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/>:<PlaceHolder userName={props.userName}/>
                }
            </div>

            <div class="text-sky-900 font-semibold pt-5 ltr:ml-3 rtl:mr-3">
                <p class="text-sm font-medium text-bule-300 group-hover:text-blue-900">{props.userName}</p>
                <p class="text-sm font-medium text-blue-500 group-hover:text-slate-300">{props.role}</p>
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
        
        <div className="rounded-full boader boader-grey-900 p-4 border-2 shadow-xl boader shrink-0">
            
            <p className=''>{initials}</p>
            
        </div>
    );
}