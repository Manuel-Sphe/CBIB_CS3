import TopBarNav from '../components/TopNav';
/**
 * The first page the user sees when using the website
 * It shows CAIR's history and structure
 * @returns full page with CAIR's story and structure
 */
export default function Dashboard() {
  return (
    <div className="relative overflow-y-scroll bg-white w-screen h-screen ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          {/* Diagonal line that cuts the image  */}
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* The top bar navigation */}
          <TopBarNav/> 

          {/* all the text on  page  */}
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <article className="prose sm:text-center lg:text-left text-base sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5 md:text-xl  text-gray-500 ">
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

                

            </article>
            
          </main>
          
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

        {/* This the the AI image */}
        <img
          className="h-full w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://www.freecodecamp.org/news/content/images/2019/06/image-57.png"
          alt=""
        />  

            
      
        
      </div>
    </div>
  )
}
