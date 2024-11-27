import Card from "./Card"
import { LuDollarSign } from "react-icons/lu";
import { FiPhoneOff } from "react-icons/fi";


const FeaturePage = ()=>{
    return(
        <div className="relative px-10 lg:px-[10%]  md:px-10 w-full md:h-[80vh] lg:h-[70vh] mb-10  mx-auto">
            
            <div className="text-3xl text-center mt-10 font-semibold font-mono text-white mb-10">
                Our <span className="text-yellow-400">Features</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-4 gap-y-6 lg:grid-cols-4 justify-between">
                <Card title="Cheapest TXs" description="Exchange popular digital curriences at the cheapest possible transaction price" src={"1.png"} />
                <Card title="CerTIK" description="we are Audited by Certik.Certik is the loading security-focused ranking platform to" src={"2.png"} />
                <Card title="No Contract Sells" description="No contract sells of funcf the marketing wallets" src={"3.png"} />
                <Card title="CrossDex Suppo" description="Exchange popular digital curriences at the cheapest possible transaction price" src={"4.png"} />
                
            </div>
        </div>
    )
}


export default FeaturePage