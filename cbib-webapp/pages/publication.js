import React from 'react'
import Header from '../components/Header'


export default function Publication(name) {
    
    // dummy data for profiles 
    const profiles = [
        {name:"Sphesihle Madonsela",position:"Student",image:"",id:4},
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {name:'User2 XSms',position:"Researcher, Student",image:"",id:2},
        //{name:"Aser4 JJDJ",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        //{name:"Sser3 DS",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4},
    ];

    // Dummy data for paper aploaded 
    const uploads = [
        'publication1.pdf',
        'publication1.tex'
    ];


    return ( 

        <div >
            <header>
                <Header/>
            </header>
           
            
            <div  className = "flex flex-row gap-2.5 text-2xl text-black max-h-full">
                <div className='container flex basis-1/4 flex-col  justify-content items-center '>
                    <p >Collaborators</p>
                    <div class = "flex flex-row  justify-center items-center bg-white-100 rounded shadow-xl mt-4 border border-black"> 
                        <ul class='p-5 flex flex-col space-y-5  '>
                            {
                                profiles.map( (user) => <Card pic={user.image} userName = {user.name} role = {user.position} />)
                            }
                            <button className="bg-blue-300 hover:bg-gray-400 text-gray-600 font-bold py-1 px-4 rounded inline-flex items-center">
                              <span className="pl-5">Add/Remove<br/>Collaborators</span>
                            </button>
                        </ul>
                    </div>
                </div>
                
                <div className='flex basis-1/2 flex-col bg-white-100 px-5  '>
                    <p>Metadata</p>

                    <div className='w-full h-80 border border-gray-500 mt-4 flex justify-center items-center'>   
                        <p>Block Reserved for associated <br/>publication metadata</p>
                    </div>
                    <p className='pt-4'>Reviews</p>
                    <div className='w-full  border border-gray-500 h-80 mt-2 flex justify-center items-center'>   
                        <p>Block Reserved for associated <br/>publication metadata</p>  
                    </div>
                </div>
                            
                <div className='flex flex-col basis-1/4 bg-white-100  border-gray-100 px-4'>
                    <p>Uploads</p>
                    
                    <div className='mt-4 border border-black w-full flex justify-center items-center '>
                        <ul>
                                {uploads.map( (file) => <p>{file}</p>) }
                                <button 
                                    className='
                                    bg-blue-300
                                    text-gray-600 
                                    items-center
                                    border border-slate-500
                                    font-semibold 
                                    rounded inline-flex 
                                    hover:bg-gray-300
                                    mt-5
                                    mb-5
                                    '
                                >
                                    <span className='px-5'>Upload NewFile</span>
                                </button>
                        </ul>

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
export  const Card = (props) =>{

    return(
        <div className = "hover:bg-gray-200 flex flex-row content-between border rounded-lg border-x-2 border-indigo-900 shadow-xl cursor-pointer "> 
           
            <div className="pt-2 pr-2 pl-2 relative w-20 h-20">
                {/* <img class = "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/> */}
                {
                    (props.pic.length!==0)?<img class = "rounded-full boader boader-grey-100 shadow-sm boader shrink-0" src={props.pic} alt=''/>:<PlaceHolder userName={props.userName}/>
                }
            </div>

            <div className="text-sky-900 font-semibold pt-5 ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-900 group-hover:text-slate-900">{props.userName}</p>
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