import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes";

const Header = () => {

    const navElement = "block py-2 pl-3 pr-4 text-black hover:text-logoPurple dark:text-white dark:hover:text-logoPurple rounded hover:bg-gray-100 dark:hover:bg-gray-900 md:dark:hover:bg-transparent md:hover:bg-transparent md:border-0";

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Dropdown Display Toggling
    const [hidden, setHidden] = useState(true);

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
    
    <nav className="bg-white dark:bg-darkGrey mt-0 mb-12 mx-0 md:rounded-full md:mx-16 md:my-10">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between border dark:border-gray-600 border-gray-400 shadow-md md:rounded-full mx:0 md:mx-auto py-6 px-2 md:px-10">

            <div className="flex gap-x-2 items-center">
                {/* Dropdown Control */}
                <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-white rounded-lg md:hidden hover:text-gray-700 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="h-10 w-10 md:h-12 md:w-12 p-0 m-0 bg-white rounded-full">
                    <Image
                    src="/codify-logo-image.png"
                    alt="codify logo"
                    width={1080}
                    height={1080}
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <h1 className="hidden md:block font-extrabold text-2xl md:text-3xl text-black dark:text-white">codify</h1>
            </div>

            <div className="flex gap-x-2 md:order-2 m-0 p-0">

                { isLoggedIn ? (<>
                    {/* Write */}
                    <button className="flex items-center gap-x-2 md:px-4 md:border md:border-gray-600 md:rounded-full md:bg-logoPurple">
                        <span className="hidden md:block text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </span>
                        <span className="block md:hidden text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </span>
                        <p className="hidden md:block text-white font-bold">Write</p>
                    </button>

                    <button className="px-2 md:px-4" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "light" ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                                </svg>)
                            }
                    </button>
                    
                    {/* Profile */}
                    <div>
                        <div className="h-10 w-10 md:h-12 md:w-12 p-0 m-0 bg-white rounded-full">
                            <Image
                                src="/creator.png"
                                alt="profile"
                                width={560}
                                height={560}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </>) : (
                    <>
                    {/* Sign In */}
                    <button type="button" className="px-3 md:px-4 py-1.5 border border-gray-600 rounded-full bg-logoPurple text-sm md:text-base text-white font-bold">
                        Sign In
                    </button>

                    <button className="px-2 md:px-4" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "light" ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                                </svg>)
                            }
                    </button>
                </>
                )}

            </div>

            <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-4 md:mt-0">
                    <li>
                        <Link href="/" className={navElement} aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className={navElement}>About</Link>
                    </li>
                    <li>
                        <Link href="/" className={navElement}>Bookmarks</Link>
                    </li>
                </ul>
            </div>     

        </div>
    </nav>

  )
};


export default Header;
