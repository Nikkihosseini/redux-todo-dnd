import { useState } from "react"


export default function FilterToDo(){

    const [filterBtn , setFilterBtn] = useState(false)

    return(
        <>
            <div>
                <div className="absolute top-5 left-5 flex items-center justify-center bg-gradient-to-t from-violet-500 to-fuchsia-500 cursor-pointer rounded-md h-10 w-10 transition-all hover:scale-110 z-20">
                    <span className='material-symbols-outlined text-white transition-transform duration-700'>
                        search
                    </span>
                </div>

                <div className="absolute top-5 left-16 flex items-center justify-center font-semibold text-sky-900 dark:text-slate-400 bg-gradient-to-t from-violet-500/20 to-fuchsia-500/20 h-10 p-2 rounded-md gap-x-5 w-52 z-10">

                    <span className="cursor-pointer hover:text-fuchsia-700 transition-all z-0">All</span>
                    <span className="cursor-pointer hover:text-fuchsia-700 transition-all z-0">Active</span>
                    <span className="cursor-pointer hover:text-fuchsia-700 transition-all z-0">Completed</span>

                </div>
            </div> 
        </>
    )
}