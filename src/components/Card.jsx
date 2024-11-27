

const Card = ({src, title, description})=>{
    return(
        <div className="bg-slate-800 bg-opacity-40 rounded-xl p-5 w-full ">
            <div className="bg-slate-700 p-2 bg-opacity-60 size-10 items-center flex justify-center text-white rounded-full">
                <img src={src} alt="image" />
            </div>
            <div>
                <div className=" text-slate-200 mt-4">
                    {title}
                </div>
                <div className="text-slate-500 mt-2">
                    <p> {description} </p>
                </div>
            </div>
        </div>
    )
}


export default Card