import React ,{useState} from "react";
import {LockClosedIcon} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import TopBarNav from "../components/TopNav";
import { Footer } from "../components/TopNav";
// npm install @heroicons/react 

const url = "http://localhost:8000/login"

export default function Login(){
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const router = useRouter();
    // submit the form to the backk-end
    const submitHandler = async (event) =>{

        event.preventDefault()

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        
        const jsonData = JSON.stringify(data)
        const endpoint = "http://localhost:8000/login"
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                // 'Content-Type': 'application/x-www-form-url-encoded'
            },
            // Body of the request is the JSON data we created above.
            body: jsonData,
          }

        const response = await fetch(endpoint, options)
        const result = await response.json()
        console.log(result)

        // alert(`Is this your full name: ${result.data}`)

        // const token = fetch(url,
        //     { 
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers :{
        //             'accept': 'application/json; charset=UTF-8',
        //             'Content-Type': 'application/x-www-form-url-encoded'
        //         }
        // }).then((res)=> res.json()).then((res)=>console.log(res))
        // // console.log(token)
            
        }
    

    return(
        <div className="h-screen w-screen ">
            {/* The top bar for the log in page */}
            <TopBarNav/>
            {/*  */}
            <div className='h-20 bg-slate-900  text-white flex flex-col  justify-center text-lg mt-6'>
                <a className="ml-48  w-10 hover:underline  hover:text-sky-400" href="/landingPage">Home</a>
            </div>

            <div className="flex  flex-col w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20  ">
            <div>
                <h2 className="mt-6 mb-2 text-center text-3xl font-bold tracking-tight text-sky-700">
                    Log in to your account 
                </h2>
            </div>
         
        <form className="bg-slate-900  shadow-lg rounded-md border border-sky-500 px-32 p-20 pb-4 w-1/2  h-full " onSubmit={submitHandler} >
            <div className="mb-4">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="username">
                Username
                </label>
                <input 
                onChange={event=>setUserName(event.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" name="username" id="username" type="text" placeholder="Username or Email"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input
                onChange = {event=>setPassword(event.target.value)} 
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" id="password" type="password" placeholder="Password" name="password"/>
                
                <div className="text-sm">
                    <a href="#" className="flex justify-end font-medium text-pink-500 hover:text-pink-400">
                    Forgot your password?
                    </a>
                </div>
            </div>
            <div>
                <button
                    disabled = {userName==='' | password===''}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-8"
                >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-black  group-hover:text-sky-200 " aria-hidden="true" />
                        </span>
                        Log in
                </button>
            </div>
        </form>
        
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
        
    );
} 

