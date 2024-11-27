

const About = ()=>{
    return(
        <div
            style={{
                backgroundImage: `url('/bg-2.png')`,
            }}
            className=" bg-cover bg-no-repeat bg-center pb-10"
        >
            <div className="px-10 lg:px-[10%]">
                <div className="text-3xl text-white font-semibold">
                    <h1>Why <span className="text-yellow-400">MoonEX</span> ?</h1>
                </div>
                <div className="my-4 pb-6 bg-gradient-to-r from-slate-800 to-slate-800 via-transparent rounded-xl flex flex-row justify-between">
                    <div className="w-full text-center border-r border-slate-700">
                        <div className="text-yellow-400 text-lg  font-mono pt-4 pb-3 border-b border-slate-700">
                            Comparison
                        </div>
                        <div className="text-left" >
                            <div className="text-gray-500 text-xs sm:text-base font-mono py-4 sm:py-3 pl-3 border-b border-slate-700">1. Point no one</div>
                            <div className="text-gray-500 text-xs sm:text-base font-mono py-4 sm:py-3 pl-3 border-b border-slate-700">1. Point no one</div>
                            <div className="text-gray-500 text-xs sm:text-base font-mono py-4 sm:py-3 pl-3 border-b border-slate-700">1. Point no one</div>
                            <div className="text-gray-500 text-xs sm:text-base font-mono py-4 sm:py-3 pl-3 border-b border-slate-700">1. Point no one</div>
                        </div>
                        
                    </div>
                    <div className="w-full text-center border-r border-slate-700">
                        <div className="text-yellow-400  font-mono pt-4 border-b border-slate-700">
                            <img className="mx-auto h-10" src="/logo-moonex.png" alt="" />
                        </div>
                        <div className="" >
                            <div className=" py-3 text-green-500 border-b border-slate-700">✔</div>
                            <div className=" py-3 text-green-500 border-b border-slate-700">✔</div>
                            <div className=" py-3 text-green-500 border-b border-slate-700">✔</div>
                            <div className=" py-3 text-green-500 border-b border-slate-700">✔</div>
                        </div>
                        
                    </div>
                    <div className="w-full text-center">
                        <div className="text-yellow-400 font-mono pt-4 pb-3 border-b border-slate-700">
                            <img className="h-7 mx-auto" src="/uniswap.png" alt="" />
                        </div>
                        <div className="" >
                            <div className=" py-3 text-red-500 border-b border-slate-700">✘</div>
                            <div className=" py-3 text-red-500 border-b border-slate-700">✘</div>
                            <div className=" py-3 text-red-500 border-b border-slate-700">✘</div>
                            <div className=" py-3 text-red-500 border-b border-slate-700">✘</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About