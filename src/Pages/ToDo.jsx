import ToggleThemBtn from '../Component/ToggleThemBtn'
import 'material-symbols';


export default function ToDo(){
    return(
        <>
            <div className='relative w-full h-screen bg-white dark:bg-slate-900'>
                <ToggleThemBtn/>
                <div className='absolute bg-sky-50 dark:bg-slate-800 rounded-t-[5rem] w-full h-screen top-20 '>

                    <div className='flex items-center justify-between bg-gradient-to-t from-violet-500 to-fuchsia-500 h-20 px-5 md:px-10 rounded-t-[5rem] overflow-hidden text-white'>
                        <div>
                             <h1 className='font-bold text-2xl'>To Do List</h1>
                             <span></span>
                        </div>
                        <div className='flex items-center justify-center gap-x-2'>
                            <input className='p-2 outline-none border-none rounded-md bg-blue-50/50 w-60 h-10' type="text" name="todo"/>
                            <div className='flex items-center justify-center backdrop-blur-md h-10 w-10 rounded-md bg-blue-50/50 hover:bg-blue-50/70 cursor-pointer transition-all'>
                                <span className='material-symbols-outlined'>add</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}