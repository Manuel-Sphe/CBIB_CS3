import React from 'react'
import {useRouter} from "next/router"
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Header(props) {

    const router = useRouter();
    const name = router.query.name
  return (
    <div className="flex h-28 border-b bg-white text-gray-700 items-center justify-around">
        <img className='mx-20' src='https://sacair.org.za/wp-content/uploads/elementor/thumbs/cair-logo-hires-p6pxr3xpjjeyisuxlv0dyn3w2sxcclbk2143kpwdzc.png' height={25} width={100}/>                    
                <p onClick={ ()=>router.push("/viewResearchGroups")} className= "cursor-pointer">Research Groups</p>
                <p onClick={()=>router.push("/dashboard")} className="cursor-pointer">Dashboard</p>
                <p onClick={()=> {
                  router.push({
                      pathname: '/viewProfile',
                      query: {name: name}
                  })
                }} className="cursor-pointer">View Profile</p>
                <p onClick={()=>router.push("/login")} className="cursor-pointer">Log In</p>

               {/**  <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-gray-700 bg-white  rounded-md  focus:outline-none ">
                            User
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a  onClick={()=> {
                                              router.push({
                                                  pathname: '/viewProfile',
                                                  query: {name: name}
                                              })
                                            }}
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Profile
                                        </a>
                                    )}
                                </Menu.Item>
                                
                                <Menu.Item>
                                    {({ active }) => (
                                        <a  onClick={()=> {
                                              router.push({
                                                  pathname: '/landingPage',
                                                  
                                              })
                                            }}
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>*/}
    </div>
  )
}

export default Header;

export const  Footer = () =>{

  return (
    <div className="h-14 border-b bg-gray-100">
        <nav className='h-14'>
            <ul className="flex justify-around items-center h-full">
                <li onClick={ ()=>router.push("/manageResearchG")} className= "cursor-pointer">Research</li>
                <li onClick={ ()=>router.push("/createResearchGroup")} className= "cursor-pointer">Create</li>

            </ul>
        </nav>

      
    </div>
  )

}
