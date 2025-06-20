"use client"
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// TODO notice the fixed class 
// TODO steal the !assets.header_bg_color 


export default function NavBar({setDark,isDark}) {
    const [isScroll,setIsScroll]=useState(false)

    const sideMenuRef=useRef()

    function openMenu(){
        sideMenuRef.current.style.transform="translateX(-16rem)"
    }
    function closeMenu(){
        sideMenuRef.current.style.transform="translateX(16rem)"
    }

    useEffect(function(){
       function handleScroll(){
            if(scrollY>50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
                
            }
        }
        window.addEventListener("scroll",handleScroll)
    },[])

    return <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="" className="w-full"/>
            </div>
                                                {/* //todo here if for the scroll past 50 height */}
            <nav className={`${isScroll?"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20":""} w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50`}>
                <Link href="#top" >
                    <Image src={isDark?assets.logo_dark:assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
                </Link> 
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                    ${!isScroll&& "bg-white  shadow-sm bg-opacity-50 dark:bg-darkTheme dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li>
                        <Link className="font-Ovo" href="#top">Home</Link> 
                    </li>
                    <li>
                        <Link className="font-Ovo" href="#About">About me</Link>
                    </li>
                    <li>
                        <Link className="font-Ovo" href="#Services">Services</Link>
                    </li>
                    <li>
                        <Link className="font-Ovo" href="#Work">My Work</Link>
                    </li>
                    <li>
                        <Link className="font-Ovo" href="#Contact">Contact me</Link>
                    </li>
                </ul> 

                <div className="flex items-center gap-4 ">
                    <button onClick={()=>setDark(dark=>!dark)}>
                        <Image src={isDark?assets.sun_icon:assets.moon_icon} alt="" className="w-6"/>
                    </button>
                    <a href="#Contact" className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50">Contact <Image src={isDark?assets.arrow_icon_dark : assets.arrow_icon} alt={assets.arrow_icon} className="w-3"/></a>
{/* //! for small menu */}
                    <button onClick={openMenu} className="md:hidden block ml-3">
                        <Image src={isDark?assets.menu_white: assets.menu_black} alt="" className="w-6"/>
                    </button>
                </div>
                {/* ----------Mobile menu----------- */}
                
                <ul ref={sideMenuRef} className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
                    w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkTheme dark:text-white`}>
                    
                    <div onClick={closeMenu} className="absolute right-6 top-6">
                        <Image src={isDark?assets.close_white:assets.close_black} alt="" className="w-5 cursor-pointer"/>
                    </div>
                    
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#top">Home</a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#About">About me</a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#Services">Services</a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#Work">My Work</a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#Contact">Contact me</a>
                    </li>
                </ul>

            </nav>
        </>
}

