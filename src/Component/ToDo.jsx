


export default function ToDo(){
    return(
        <>
            <div className="flex items-center justify-between w-full bg-violet-500/10 min-h-20 max-h-40 px-5 md:px-10 py-3 rounded-3xl overflow-hidden text-sky-900 dark:text-slate-400">
                <div className="flex items-center gap-x-2 cursor-pointer">
                    <span className="material-symbols-outlined">
                        check_box_outline_blank
                    </span>
                <p className="text-lg font-semibold py-2 overflow-hidden">
                     learning java & python ...!
                </p>
                </div>
                <span className="material-symbols-outlined">delete</span>
            </div>
        </>
    )
}