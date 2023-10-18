const Card = () => {
    return(
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-xl text-black text-xs m-2 px-3 py-0.6">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HeadPhone"></img>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 rounded-full p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Headphones</span>
                <span className=" text-lg font-medium">$300</span>
            </p>
        </div>
    )
}

export {Card}