const Button = ({text,outline})=>{
    return(
        <div>
            <button  className={`
                ${outline==true?"text-yellow-400 bg-transparent border border-yellow-400":"text-black bg-gradient-to-r from-yellow-400 to-yellow-200"}
                 
                p-2 
                rounded-full 
                font-serif 
                font-semibold
            `}>
                {text}
            </button>
        </div>
    )
}

export default Button