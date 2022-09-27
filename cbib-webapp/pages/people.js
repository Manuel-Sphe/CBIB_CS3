import React, { useState } from "react";
import Header from "../components/Header";
import TopBarNav from "../components/TopNav";
import {Footer} from "../components/TopNav"
const People = ()=>{

  
    // State var
    const [name,setName] = useState('Search by Name...');
     
    // the filter state vars

    const [researchG,setResearchG] = useState();
    const [position, setPosition] = useState();
    const [member,setMember]=useState();
    const [inst,setInstitution] = useState();

    
    
    

    // dummy data    for users 
    const profiles = [
        {title:"Mr",name:"Sphesihle Madonsela",role:"Student",image:"",researchGroup:'CAIR group',Institution:"UCT",id:0},
        {title:"Prof",name:'Tommie Meyer',role:"Researcher,Co-ordinator",researchGroup:'CAIR group',image:"https://randomuser.me/api/portraits/men/90.jpg",Institution:"Univesity of CT",id:1},
        {title:'Ms',name:'Amanda Skosana',role:"Researcher, Student",researchGroup:'Ethics of AI',image:"",Institution:"Wits",id:2},
        {title:'Mr',name:"Sizwe Botha",role:"Researcher, Student",researchGroup:'Computational Thinking',image:"https://randomuser.me/api/portraits/men/96.jpg",Institution:"UKZN",id:3},
        {title:'Prof',name:"Nkululeko Mbele",role:"Admin, Group Admin",researchGroup:'Adaptive and Cognitive System Lab',image:"https://randomuser.me/api/portraits/men/97.jpg",Institution:"MUT",id:4},
    ];

    const positions = ['Student','Co-ordinater','Researcher','Intern','Office Management','Postdoctoral Fellow']
    
    
    const groups = [
        {researchGroup: 'Knowledge Representation and Reasoning (KRR)' ,university: 'University of Cape Town',  image:'https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'},
        {researchGroup: 'Adaptive and Cognitive Systems Lab' ,university: 'University of Cape Town',  image:'https://upload.wikimedia.org/wikipedia/en/7/7c/University_of_Cape_Town_logo.svg'},
        {researchGroup: 'AI and Cybersecurity', university: 'University of the Western Cape', image:'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/UWC_logo.svg/1200px-UWC_logo.svg.png'},
        {researchGroup: 'AI for Development & Innovation', university: 'University of Pretoria', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {researchGroup: 'CAIR Deep Learning', university: 'North West University', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-07/nwu-logo-purple.png?itok=wb1cE8Jy'},
        {researchGroup: 'CAIR@UKZN', university: 'University of Kwazulu-Natal', image:'https://www.fameafrica.tv/wp-content/uploads/2021/01/UKZN-Student-Central.png'},
        {researchGroup: 'Computational Thinking for AI', university: 'University of Stellenbosch', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-07/Stellenbosch-University-Logo.png?itok=BVo60nHe'},
        {researchGroup: 'Ethics of AI', university: 'University of Pretoria', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {researchGroup: 'Statistics@CAIR-UP', university: 'University of Pretoria', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2019-08/University_of_Pretoria.png?itok=eeO2PY3O'},
        {researchGroup: 'Speech Technologies', university: 'University of Limpopo', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2021-04/1200px-University_of_Limpopo_logo.png?itok=Dwra5wo3'},
        {researchGroup: 'Swarm Intelligence Lab', university: 'Sol Plaatje University', image:'https://www.cair.org.za/sites/default/files/styles/medium/public/2021-04/1200px-Sol_Plaatje_University_logo.png?itok=wV_feiKJ'},
    ]


    return(
        <div className="w-screen h-screen">
            <header>
                <TopBarNav/>
            </header>
            
            <div className='h-20 bg-slate-900  text-white flex flex-col  justify-center text-lg mt-6'>
                <a className="ml-48  w-10 hover:underline  hover:text-sky-400" href="/landingPage">Home</a>
            </div>

            <div className="mx-32 my-16 bg-gray-50 p-10   border rounded-md ">
                <p className="text-6xl text-sky-700 text-bold">People</p>

                {/* The input  */}
                <input className="placeholder:italic  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-5 " placeholder={name} type="text" name="search"
                    onChange={(e)=>setName(e.target.value)}
                />
 

                {/* The selections and the buttons */}
                <div className="flex flex-row justify-between m-2">
                
                    <select onChange={(e)=>setResearchG(e.target.value)}>
                          <option>Select Group</option>
                          {
                            groups.map((item,index)=>{
                                return <option key={index}>{item.researchGroup}</option>
                            })
                          }
                    </select>
                    
                  
                    <select onChange={(e)=>setInstitution(e.target.value)}>
                        {/* Needs to be pulled from the mangodb */}
                        <option>Select Institution</option>
                        {
                            groups.map((item,index)=>{
                                return <option key={index}>{item.university}</option>
                            })
                        }
                    </select>
                    
                    {/* update the postion and set send 'position var to the back get method' */}
                    <select onChange={(e)=>setPosition(e.target.value)}>
                        {/*  The Drop downwlist */}
                        <option>Select Position</option>
                        { 
                           positions.map((item,index) =>{
                                return (<option key={index}>{item}</option>);
                           })
                        
                        } 
                    </select>

                    <select onChange={(e)=>setMember(e.target.value)}>
                        {/*  */}
                        <option>Current Members</option>
                        <option>Former Members</option>
                        
                    </select>
                    <button className="bg-sky-600 border border-gray-800 p-4 rounded-md text-white inline-flex hover:bg-slate-800">Apply</button>
                </div>
                <ul className="divide-y divide-slate-300 mt-10  ">
                    {
                        profiles.map((item,index)=>{
                            return(
                            <li key={index}>
                                <ProfileCard title={item.title} Institution={item.Institution} researchGroup={item.researchGroup} role={item.role} name={item.name}/>
                            </li>
                            );
                        })
                    }
                </ul>
                
            </div>
            
            <footer>
                  <Footer/>        
            </footer>
           

        </div>
        
       
    );
}

export default People;

const ProfileCard = (props)=>{
    return(
        // For the Picture 
        <div className="flex flex-row m-4  ">
            <div className="border border-black bg-gray-700 rounded-full h-10 w-10 m-2">
                {/* For the pic here  */}

            </div>
                <div className="flex justify-between w-full  ">
                    <div className="flex flex-col ">
                        <a className="text-3xl text-sky-600 mb-3 no-underline hover:underline hover:text-sky-800" href="#">{props.title +" "+props.name}</a>
                        <p className="text-2xl">Institution: <span className="text-gray-400 text-base">{props.Institution}</span></p>
                        <p className="text-2xl">Position: <span className="text-gray-400 text-base">{props.role}</span></p>
                    </div>

                    <div className="flex flex-col  overflow-wrap text-justify break-word w-64  ">
                        <p className="text-3xl ">Research Groups:</p>
                        <a className="text-base  text-sky-500 no-underline hover:underline hover:text-sky-800 " href="#">{props.researchGroup}</a>
                    </div>
                </div>
            <div>

            </div>
        </div>

     
    );
}