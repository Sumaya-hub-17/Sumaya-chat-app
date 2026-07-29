


const Loader = () =>{

    const dots = [
           "top-0 left-1/2 -translate-x-1/2",
           "top-[15%] right-[15%]",
           "top-1/2 right-0 -translate-y-1/2",
           "bottom-[15%] right-[15%]",
           "bottom-0 left-1/2 -translate-x-1/2",
           "bottom-[15%] left-[15%]",
           "top-1/2 left-0 -translate-y-1/2",
           "top-[15%] left-[15%]",
    ];

    return (
        <>
            <div className="relative w-10 h-10 mt-10 animate-spin">
                {dots.map((position, index)=>(
                    <span 
                    key={index}
                    className={`absolute ${position} w-2 h-2 rounded-full`}
                    style={{
                      backgroundColor: `rgba(124, 58, 237, ${(index + 2) / 10})`, }} ></span>
                ))}
            </div>
        </>
    )
}

export default Loader;