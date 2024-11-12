import React from 'react'


const Headers = () => {
    return (
        <>
            <nav className="mt-10">
                <div className="flex flex-col bg-[#2B2B2B] sm:flex-row items-center justify-center py-4 border border-gray-500 rounded-full mx-auto w-[90%] sm:w-[600px] text-[#A8A292] gap-4">
                    <h1 className="font-bold text-[#FFF5D9] pr-8 flex items-center">
                        <img src="./com.png" className="w-10 h-10 mr-2" alt="icon" />
                        Comet
                    </h1>

                    <h1 className="font-semibold hidden sm:block">Manifasto</h1>
                    <h1 className="font-semibold hidden sm:block">Discover</h1>

                    <button className="ml-12 sm:ml-0 mt-4 sm:mt-0 border-r-0 border-t-0 border-l-0 border border-[#FFF5D9] rounded-l-full rounded-r-full shadow-lg px-6 py-2 rounded-2xl text-[#FFF5D9] hover:text-black hover:bg-white">
                        LogIn
                    </button>
                    <button className="gap-4 mt-4 sm:mt-0 border border-[#FFF5D9] px-4 py-2 rounded-2xl text-[#000] bg-[#FFF5D9] font-bold">
                        SignUp
                    </button>
                </div>
            </nav>
            <body>
              <div className="border-dashed border-2 border-[#9646FE] text-center mt-[12%] ml-[15%] p-12 w-[70%] h-[35%] bg-black/30 text-[#FFF5D9] relative">
                  <h1 className="text-8xl font-serif">Made for Creatives</h1>
                  <p className="mt-4 text-xl">A discovery engine for <span className="italic border-t-0 border-l-0 border-r-0 border-b-2 border-b-[#E2C49A] border-[#FFF5D9] rounded-l-full rounded-r-full shadow-lg">
                      creatives
                  </span>
                  </p>
                  <button className="mt-8 px-8 py-4 bg-[#FFF5D9] text-black rounded-2xl hover:bg-[#E2C49A] absolute  transform -translate-x-1/2 -translate-y-1/8">
                      Get Inspired
                  </button>
              </div>
            </body>
            <div className='flex items-center justify-between'>
                <div className="flex items-start justify-start bg-transparent border border-gray-500 w-[13%] rounded-2xl p-2 ml-6 mt-[220px]">
                    <div className="text-[#FFF5D9] text-md font-bold mx-4">Dark</div>
                    <div className="text-[#FFF5D9] text-md font-bold mx-4 border-r-0 border-t-0 border-l-0 border border-[#FFF5D9] rounded-l-full rounded-r-full shadow-lg pb-1 ">Light</div>
                </div>
                <div className="flex mt-[190px]">
                    <div className="text-[#FFF5D9] text-md font-bold mx-4">Marketplace</div>
                    <div className="text-[#FFF5D9] text-md font-bold mx-4  ">Create your site</div>
                </div>

            </div>

        </>
    )
}


export default Headers


