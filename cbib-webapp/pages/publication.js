
import React from 'react'
import Header from '../components/Header'
import { useState ,useEffect } from 'react';
import axios from 'axios';

export default function Publication({name}) {
    
    const [selectedFile,setSelectFile] = useState('');
    const [files,setFiles] = useState('');
    const [isFilePicked,setIsFilePicked] = useState(false);
    

    const changeHandler = (event) =>{
        setSelectFile(event.target.files[0]);
        setFiles(event.target.files);
        setIsFilePicked(true);
    }

    const onUploadFile = () =>{
        const formData = new FormData();

        // Upload 2 files .pdf and .tex
        for(let i = 0 ;i<2;i++){
            formData.append(
            "myFile",
            files[i],
            files[i].name
            );
        }

        console.log("Yes it's fine");
        console.log(selectedFile);
        
        // Request made to the back-end fastapi 
        // Send form object 
        // the url here 
        axios.post("http://localhost:8000/uploadfile",formData);
    }

    const fileData = () =>{
        if(isFilePicked){
            return(
                <div>
                    <h2>File Details : </h2>
                    <p>File1 Name : {files[0].name}</p>
                   
                    <p>File Type : {files[0].type}</p>
                </div>
            );
        }
        else{
            return(
            <div>
                <br/>
                <h4>Choose a file </h4>
            </div>
            );
        }
    }

    // dummy data for profiles 
    const profiles = [
        {name:"Sphesihle Madonsela",position:"Student",image:"",id:0},
        {name:'Tommie Meyer',position:"Researcher,Co-ordinator",image:"https://randomuser.me/api/portraits/men/90.jpg",id:1},
        {name:'User2 XSms',position:"Researcher, Student",image:"",id:2},
        {name:"Aser4 JJDJ",position:"Researcher, Student",image:"https://randomuser.me/api/portraits/men/96.jpg",id:3},
        {name:"Sser3 DS",position:"Admin, Group Admin",image:"https://randomuser.me/api/portraits/men/97.jpg",id:4},
    ];

    // Dummy data for paper aploaded 
    const uploads = [
        {file_name:"publication1.pdf",id:0},
        
        {file_name:'publication1.tex', id:1}
    ];

    return ( 

        <div className ='relative'>
            <header>
                <Header/>
            </header>
    
            <div  className = "flex flex-row gap-2.5 text-2xl text-black max-h-full">
                <div className='container flex basis-1/4 flex-col  justify-content items-center '>
                    <strong >Collaborators</strong>
                    <div className = "flex flex-col  justify-center items-center bg-white-100 rounded shadow-xl mt-4 border border-gray-200"> 
                        
                        <div className='p-10 flex flex-col space-y-3 overflow-auto h-96 ' >
                            <CardList data = {profiles} />
                        </div>     
                    </div>
                </div>
                
                <div className='flex basis-1/2 flex-col bg-white-100 px-5 justify-content items-center '>
                    <strong>Metadata</strong>

                    <div className='w-full h-80 border border-gray-200 mt-4 flex justify-center items-center text-gray-400 shadow-lg'>   
                        <p>Block Reserved for associated <br/>publication metadata</p>
                    </div>
                    <strong className='pt-4'>Reviews</strong>
                    <div className='w-full  border border-gray-200 h-80 mt-2 flex justify-center items-center text-gray-400 shadow-lg'>   
                        <p>Block Reserved for associated <br/>publication metadata</p>  
                    </div>
                </div>
                            
                <div className='flex flex-col basis-1/4 bg-white-100  border-gray-100 px-4 items-center  '>
                    <strong>Uploads</strong>
                    
                    <div className='mt-4 border border-gray-200 w-full flex flex-col justify-content shadow-lg '>
                        
                       
                        <FileList data = {uploads}/>

                        <label className="block px-2">
                           
                            <input type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                    
                                "
                                multiple
                                onChange = {changeHandler}
                                accept = '.pdf,.tex'
                            />
                          </label>
                        
                       <div className='py-3 px-3'>

                            <button  className='
                                    
                                    bg-blue-300
                                    text-gray-600 
                                    text-sm 
                                    font-bold 
                                    py-1 px-4 
                                    mt-2
                                    rounded 
                                    inline-flex 
                                    justify-center 
                                    items-center
                                    border border-gray-500
                                    shadow-lg
                                    '
                                    
                                    onChange = {onUploadFile}
                                    disable = {isFilePicked.toString()} 
                                >Upload New File
                                
                            </button>
                            {fileData()}

    
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
export  const Card = (props) =>{

    return(
        <div className = "hover:bg-gray-200 flex flex-row content-between border rounded-lg border-x-2 border-indigo-900 shadow-xl cursor-pointer "> 
           
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

// List for the files uploaded
const FileList = (props) =>{
    const uploads = props.data;
    const listItems = uploads.map((file)=><ListItem key={file.file_name} value={file.file_name}/>);

    return(
        <ul className= 'pl-2 text-blue-400'>
            {listItems}
        </ul>
    );
}
