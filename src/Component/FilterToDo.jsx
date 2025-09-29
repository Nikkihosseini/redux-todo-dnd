import { useState , useEffect , useRef} from "react";


export default function FilterToDo(){
    
    const filterRef = useRef(null);
    const filterBtnRef = useRef(null);
    const [filterBtn , setFilterBtn] = useState(false)

    function toggleFilterToDo(){
        setFilterBtn(prev => !prev)
    }

    useEffect(() => {
        function handleClickOutside(event) {

         if (
            filterRef.current && 
            !filterRef.current.contains(event.target) &&
            // Added useRef(hamburgerRef) for the hamburger button and excluded it from handleClickOutside
            // checks. Now clicking the hamburger correctly toggles the mobile menu.
            !filterBtnRef.current.contains(event.target)
            ) {
                setFilterBtn(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
            return () => {
        document.removeEventListener("click", handleClickOutside);
            };
        }, []);

    return(
        <>

                <div ref={filterRef} onClick={toggleFilterToDo} className="absolute top-5 left-5 flex items-center justify-center bg-gradient-to-t from-violet-500 to-fuchsia-500 cursor-pointer rounded-md h-10 w-10 transition-all hover:scale-110 z-20">
                    <span className={`material-symbols-outlined text-white transition-transform duration-500 ${filterBtn ? "rotate-[360deg]" : "rotate-0"}`}>
                        search
                    </span>
                </div>

                <div ref={filterBtnRef} className={`absolute top-5 left-16 flex items-center justify-center font-semibold text-sky-900 dark:text-slate-400 bg-gradient-to-t from-violet-500/20 to-fuchsia-500/20 h-10 rounded-md gap-x-5 z-10 overflow-hidden transition-transform origin-left ease-in-out duration-300 ${filterBtn ? "scale-x-100 p-2" : "scale-x-0 p-0"}`}>

                    <span className={`${filterBtn ? "opacity-100 delay-150" : "opacity-0 delay-0"} cursor-pointer dark:hover:text-fuchsia-500 hover:text-fuchsia-700 transition-opacity z-0`}>All</span>
                    <span className={`${filterBtn ? "opacity-100 delay-150" : "opacity-0 delay-0"} cursor-pointer dark:hover:text-fuchsia-500 hover:text-fuchsia-700 transition-opacity z-0`}>Active</span>
                    <span className={`${filterBtn ? "opacity-100 delay-150" : "opacity-0 delay-0"} cursor-pointer dark:hover:text-fuchsia-500 hover:text-fuchsia-700 transition-opacity z-0`}>Completed</span>

                </div>
        </>
    )
}
