import { Link, useNavigate } from "react-router-dom"
import { navLinks } from "./constant"
import { useState } from "react"
import Button from "./Button"
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";


const Navbar=()=>{
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    return(
        <div className="pt-3 bg-transparent px-5 md:px-10">
            <div className="flex justify-between">
                <div
                    onClick={()=>{
                        setActive("")
                        console.log("hii")
                        navigate('/')
                        window.scrollTo(0,0)
                    }}
                    className="flex hover:cursor-pointer justify-between"
                >
                    <img src="/logo.png" className="size-16" />
                    <img src="/moonex.png" className="w-24 h-10"  />
                </div>
                <ul className='list-none hidden lg:flex flex-row gap-10'>
                    {navLinks.map((link)=>(
                        <li
                        key={link.id}
                        className={`
                        ${active === link.title ? "text-yellow-300" : "text-white"}
                        hover:text-yellow-300 text-[18px] font-medium cursor-pointer
                        `}
                        onClick={()=>setActive(link.title)}
                        >
                        <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4">
                    <Button text="Connect Wallet" />
                    <div className='lg:hidden flex flex-1 -mt-6 text-white justify-end items-center'>
                        <div
                            className='w-[20px] h-[20px] cursor-pointer '
                            onClick={()=> setToggle(!toggle)}
                        >
                            {toggle?(
                                <RxCross2 />
                            ):(
                                <GiHamburgerMenu />
                            )}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, height: 0}}
                            animate={{
                            opacity: toggle ? 1 : 0,
                            height: toggle  ? "180px" : 0,
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className={`
                            ${!toggle ? 'hidden':'flex'}
                            p-4
                            bg-gradient-to-t
                            from-gray-700
                            shadow-lg
                            shadow-slate-600
                            absolute
                            top-20
                            right-0
                            mx-4
                            my-2
                            min-w-[140px]
                            z-10
                            rounded-xl
                        `}>
                            <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link)=>(
                                <li
                                key={link.id}
                                className={`
                                    ${active===link.title ? "text-yellow-400":"text-white"}
                                    hover:text-yellow-400
                                    text-[16px]
                                    font-serif
                                    font-medium
                                    cursor-pointer
                                `}
                                onClick={()=>{
                                    setToggle(!toggle)
                                    setActive(link.title)
                                }}
                                >
                                <a href={`#${link.id}`}>
                                    {link.title}
                                </a>
                                </li>
                            ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Navbar