import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import Image from 'next/image';

const BlogPageHeader = () => {
    const navElement = "block py-2 pl-3 pr-4 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-900 md:hover:bg-transparent md:hover:underline md:border-0";

    // Theme Toggling
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
      }, []);
    
    
      if (!mounted) {
        return null
    };

  return (
    <nav className="bg-white dark:bg-darkGrey mt-0 mb-2 mx-0 md:rounded-full md:mx-0 md:my-0">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between border dark:border-gray-600 border-gray-400 shadow mx:0 md:mx-auto py-6 px-2">

            <div className="flex gap-x-4 items-center">
                {/* Side Menu Toggle Button */}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-white rounded-lg hover:text-gray-700 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {/* Author's Profile Picture */}
                <div className="h-12 w-12 p-0 m-0 bg-white dark:bg-darkGrey rounded-full">
                    <Image
                    src="/creator.png"
                    alt="profile"
                    width={1080}
                    height={1080}
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
                {/* Blog Name */}
                <h1 className="hidden md:block font-bold text-xl">Ayesha Blog</h1>
            </div>

            <button className="px-2 md:px-4" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "light" ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                                </svg>)
                            }
            </button>

        </div>
    </nav>
  )
};

export default BlogPageHeader;
