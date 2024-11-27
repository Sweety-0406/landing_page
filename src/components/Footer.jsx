import { useState } from "react"
import { navLinks } from "./constant"

const Footer = ()=>{
    const[active, setActive] = useState('')
    return(
        <footer className="relative px-10 lg:px-[10%] bg-gray-900 bg-opacity-30 pt-8 md:px-10 w-full h-[20vh]    mx-auto">
            <div className="flex justify-between  ">
                <div className="-mt-6">
                    <img className="size-24" src="footer-logo.png" alt="" />
                </div>
                <div className="hidden md:block">
                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((link, ind)=>(
                            ind != 0 && (<li
                            key={link.id}
                            className={`
                                text-white
                                text-[16px] font-medium cursor-pointer
                            `}
                            >
                                {link.title}
                            </li>)
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="text-white text-2xl -mt-4 font-mono font-semibold">
                        Contact <span className="text-yellow-400">Us</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="size-7 cursor-pointer">
                            <img src="talegram.png" alt="" />
                        </div>
                        <div className="size-7 cursor-pointer">
                            <img src="raddit.png" alt="" />
                        </div>
                        <div className="size-7 cursor-pointer">
                            <img src="twitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer