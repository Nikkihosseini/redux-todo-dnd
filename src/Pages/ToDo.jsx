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
                        <div className='flex items-center justify-center'>
                            <input type="text" name="todo"/>
                            <span className='flex items-center justify-center material-symbols-outlined backdrop-blur-md h-10 w-10 rounded-md bg-blue-50/10 hover:bg-blue-50/20 cursor-pointer transition-all'>add</span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}