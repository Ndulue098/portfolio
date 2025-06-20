"use client"
import { useEffect, useState } from "react";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
// import Head from "next/head"; 
import NavBar from "./_components/NavBar";
import Services from "./_components/Services";
import Work from "./_components/Work";
import Project from "./_components/Project";

export default function Page() { 

  const [isDark,setDark]=useState(true)

  // useEffect(function(){
  //   if(localStorage.theme==="dark"|| !theme in localStorage && window.matchMedia("(prefers-color-scheme:dark)").matches ){
  //     setDark(true)
  //   }else{
  //     setDark(flase)
  //   }
  // },[])

  useEffect(function(){
    if(isDark){
      document.documentElement.classList.add("dark")
      localStorage.theme="dark"
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.theme=""
    }
  },[isDark])

  return <>
      <NavBar isDark={isDark} setDark={setDark}/>
      <Header  isDark={isDark}/>
      <About isDark={isDark}/>
      <Project isDark={isDark}/>
      <Services isDark={isDark}/>
      {/* <Work isDark={isDark}/> */}
      <Contact isDark={isDark}/>
      <Footer isDark={isDark}/>
    </>
}


/* animation with motion.dev */