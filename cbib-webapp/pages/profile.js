import React, {useState} from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav';


export default function Profile() {

    const [username, setUsername] = useState("");

    const usernameChange = event => {
        let val = event.target.value 
        val = val.replace(/\s/g, "_")
        setUsername(val)
        console.log(val)
    }

    return (

        <>

        <header>
            <Header/>
        </header>

        <main className="flex mt-10">

            {/* Left Hand Side Nav Bar */}
            <SideNav/>
            

            {/* Right Hand Content Screen */}
            <div className="flex flex-col items-center space-y-10 w-full">
                {/* Basic Information Section */}
                <section className="flex flex-col border space-y-5 p-5 w-2/3">

                    <h2 className="border-b text-xl font-semibold col-span-2">Basic Information</h2>
                    
                    <div className="flex justify-between items-center">
                        <p className="">First Name: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Jane' />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="">Last Name: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Doe' />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="">Profile Photo: </p>
                        <input type="file" className="border border-black px-5 py-px w-2/3 h-8" />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="">Research Group: </p>
                        <div className="w-2/3">
                            <input type="text" className="border border-black p-5 w-full h-8" placeholder='username' onChange={usernameChange}/>
                            <p className="text-xs text-gray-500">www.cair.org.za/{username}</p>
                        </div>
                    </div>


                </section>


                {/* Professional Information Section */}
                <section className="flex flex-col border space-y-5 p-5 w-2/3">

                    <h2 className="border-b text-xl font-semibold col-span-2">Professional Information</h2>
                    
                    <div className="flex justify-between items-center">
                        <p className="">Title: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='Prof.' />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="">Organisation: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='University of Cape Town' />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="">Education Level: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='PhD Graduate' />
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="">Research Interests: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='NLP, Bayesian Semantic Networks' />
                    </div>

                </section>


                {/* Contact Informatioon Section */}
                
                <section className="flex flex-col border space-y-5 p-5 w-2/3">

                    <h2 className="border-b text-xl font-semibold col-span-2">Contact Inofrmation</h2>

                    <div className="flex justify-between items-center">
                        <p className="">Email: </p>
                        <input type="text" className="border border-black p-5 w-2/3 h-8" placeholder='janedoe@cair.org.za' />
                    </div>

                    {/* <div className="flex justify-between items-center">
                        <p className="">LinkedIn: </p>
                        <div className="w-2/3">
                            <input type="text" className="border border-black p-5 w-full h-8" placeholder='username' />
                            <p>www</p>
                        </div>
                    </div> */}



                </section>
            </div>

            
        </main>
        
        </>
    )
}