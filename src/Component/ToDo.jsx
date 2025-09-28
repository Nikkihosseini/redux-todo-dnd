


export default function ToDo(){
    return(
        <>
            <div className="flex items-center justify-between w-full bg-violet-500/10 h-20 px-5 md:px-10 p-4 rounded-3xl text-sky-900 dark:text-slate-400">
                <div className="flex items-center gap-x-3 h-16">
                    <span className="material-symbols-outlined cursor-pointer">
                        check_box_outline_blank
                    </span>
                <p className="text-base md:text-lg font-semibold line-clamp-2">
                    git commit -m "feat(ui): add rotation animation to theme toggle button rotate toggle icon 360° when switching between dark and light mode use Tailwind transition and rotate-[360deg] for smooth animation reset rotation after animation completes to allow repeated toggles improves visual feedback and UX for theme switching"

                </p>
                </div>
                <span className="material-symbols-outlined pl-3 cursor-pointer">delete</span>
            </div>
        </>
    )
}