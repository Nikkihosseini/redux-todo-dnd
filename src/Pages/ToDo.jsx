import ToggleThemBtn from '../Component/ToggleThemBtn'
import 'material-symbols';


export default function ToDo(){
    return(
        <>
            <div className='relative w-full h-screen bg-white dark:bg-slate-800'>
                <ToggleThemBtn/>

            </div>
        </>
    )
}