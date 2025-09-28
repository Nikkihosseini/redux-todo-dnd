import { useEffect, useState } from "react";



export default function ToggleThemBtn() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
        <div onClick={() => setDarkMode(!darkMode)} className="absolute top-5 right-5 flex items-center justify-center bg-gradient-to-t from-violet-500 to-fuchsia-500 cursor-pointer rounded-md h-10 w-10 transition-all hover:scale-110">
            <span className="material-symbols-outlined text-white">
                {darkMode ? "moon_stars" : "sunny"}
            </span>
        </div>
    </>
  );
}


