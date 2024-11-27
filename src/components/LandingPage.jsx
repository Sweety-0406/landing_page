import Button from "./Button"

const LandingPage = ()=>{
    return(
        <section className="relative  px-5 md:px-10 w-full h-[70vh] lg:h-screen mx-auto">
           <div className="pt-32 lg:pt-44 px-[15%]">
                <div className="text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Trusted Multi-Chain</h1>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl"><span className="text-yellow-400">DEX</span> Platform</h1>
                    <p className="text-gray-500">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
                </div> 
                <div className="flex gap-4 mt-10">
                    <Button text="Connect Wallet" />
                    <Button text="Trade Crypto" outline={true}/>
                </div>
           </div>
        </section>
    )
}

export default LandingPage