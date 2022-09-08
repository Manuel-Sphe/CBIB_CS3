import React ,{useState} from "react";
import {LockClosedIcon} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
// npm install @heroicons/react 



export default function Login(){
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const router = useRouter();
    // submit the form to the backk-end
    const submitHandler =() =>{
        router.push("dashboard");
    }
    return(
        <div className="flex  flex-col w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40  ">
            <div>
                <h2 className="mt-6 mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign in to your account 
                </h2>
            </div>
         
        <form className="bg-gray-50  shadow-md rounded px-20 pt-10 pb-10 mb-4" onSubmit={submitHandler} >
            <div className="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
                </label>
                <input 
                onChange={event=>setUserName(event.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-10 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" id="username" type="text" placeholder="Username or Email"/>
            </div>
            <div className="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
                </label>
                <input
                onChange = {event=>setPassword(event.target.value)} 
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" id="password" type="password" placeholder="Password"/>
                
                <div className="text-sm">
                    <a href="#" className="flex justify-end font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                    </a>
                </div>
            </div>
            <div>
                <button
                    disabled = {userName==='' | password===''}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Sign in
                </button>
            </div>
        </form>
        
      </div>
    );
} 