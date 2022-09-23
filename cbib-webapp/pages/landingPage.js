
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
//
const navigation = [
  { name: 'Research Groups', href: '/viewResearchGroups' },
  { name: 'People', href: '/people' },
  { name: 'Publications', href: '#' },
]

export default function Dashboard() {
  return (
    <div className="relative overflow-y-scroll bg-white w-screen h-screen ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      
                    {/* The cair image top left coner */}
                      <img
                      
                        alt="Your Company"
                        className="h-16 w-auto sm:h-20"
                        src='https://sacair.org.za/wp-content/uploads/elementor/thumbs/cair-logo-hires-p6pxr3xpjjeyisuxlv0dyn3w2sxcclbk2143kpwdzc.png'
               
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-16 w-auto sm:h-20"
                        src='https://sacair.org.za/wp-content/uploads/elementor/thumbs/cair-logo-hires-p6pxr3xpjjeyisuxlv0dyn3w2sxcclbk2143kpwdzc.png'
               
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left text-base sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5 md:text-xl  text-gray-500 ">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Structure and History</span>{' '}
                </h1>
                <p className="mt-3 mb-11 lg:mx-0">
                The Centre for Artificial Intelligence Research (CAIR) is a distributed South African research network with nine established and two emerging research groups across eight universities funded primarily by the Department of Science and Innovation (DSI). It is virtually hosted and coordinated by the Council for Scientific and Industrial Research (CSIR).
                </p> 
                <p className="mt-3  lg:mx-0">
                The CAIR Directorate is located in the Department of Computer Science at the University of Cape Town. Its members are: 
                </p>
                
                <ul className='ml-10 list-disc text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-lg  md:text-xl '> 
                  <li>Co-Director: Prof Tommie Meyer</li>
                  <li>Co-Director: A/Prof Deshen Moodley</li>
                  <li>Centre Administrator: Mrs Tharien Potgieter</li>
                </ul>

                <p className="mt-3 lg:mx-0">
                CAIR was established in 2011 with the aim of building world class Artificial Intelligence research capacity in South Africa. CAIR conducts foundational, directed and applied research into various aspects of AI through its nine established research groups: Adaptive and Cognitive Systems, AI and Cybersecurity, AI for Development, Applications of Machine Learning, Computational Logic, Ethics of AI, Foundations of Machine Learning, Knowledge Representation and Reasoning, and Probabilistic Modelling. The academics leading the individual research groups in CAIR are established researchers in their research focus areas, contributing to the advancement and thought leadership in the various disciplines constituting AI. CAIR also has two emerging research groups: Swarm Intelligence and Speech Technologies.           
                </p>

                <p className='mt-5'>
                CAIR’s mandate is to:
                </p>
                <ul className='ml-10 list-disc text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-lg  md:text-xl '> 
                  <li>develop world class research capability in South Africa in the identified areas of AI;
                    <ul className='ml-10'>
                        <li>establish a network of AI research chairs;</li>
                        <li>train masters and doctoral students in AI;</li>
                    </ul>
                  </li>
                  <li className=''>through consolidated, applied AI research initiatives, support sustainable and effective socio-economic development;

                  
                    <ul className='ml-10'>
                        <li>enable meaningful, ethical and informed societal interaction with AI technologies;</li>
                        <li>
                        advise industry, government and NGOs in the utilisation of AI for social and economic advancement;
                        </li>
                        <li>
                        reduce the cost of adopting and use of AI;
                        </li>
                    </ul>

                  </li>
                  <li>build an accredited national and international AI research network that promotes AI research and technology in South Africa;
                    <ul className='ml-10'>
                        <li>contribute to the broader access to AI technologies and tools in South Africa.</li>
                    </ul>
                  </li>
                </ul>

                <p className='mt-3'>
                CAIR is structured as a hub-and-spoke model with established groups at six universities - the University of Cape Town, the University of KwaZulu-Natal, North-West University, the University of Pretoria, Stellenbosch University and the University of the Western Cape. CAIR also has emerging groups at Sol Plaatje University and the University of Limpopo.
                </p>

            </div>
            
          </main>
          
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-92 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://www.freecodecamp.org/news/content/images/2019/06/image-57.png"
          alt=""
        />
      </div>
    </div>
  )
}
