"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { assets } from "@/assets/assets";
//  import { motion } from "motion/react"

// import { Ovo } from "next/font/google";

// import {projects} from "@/app/data"
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
// const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

const projects = [
  {
    title: "Rest Country",
    link:"https://countrydata-six.vercel.app/",
    description:"A React-based web app that fetches and displays data from the REST Countries API. Users can view a list of all countries, search and filter by region, see detailed information about each country, and explore neighboring (border) countries through dynamic routing. Designed with responsive UI and clean navigation for a smooth user experience.",
    src: "country.jpg",
    color: "#BBACAF",
  },
  // {
  //   title: "Clément Chapillon",
  // link:"",  
  // description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
  // src: "comment.jpg",
  //   color: "#977F6D"
  // },
  {
    title: "Memory Match Game",
    link:"https://memory-game-dusky-nu.vercel.app/",
    description:"A dynamic card-matching game built with React, where players start by selecting the icon type (image or emoji) and the number of cards. The objective is to match all pairs before the timer runs out..",
    src: "game.jpg",
    color: "#C2491D",
  },
  {
    title: "IP Tracker",
    link:"https://iptracker-brown.vercel.app/",
    description:"The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "ip.jpg",
    color: "#B62429",
  },
  // {
  //   title: "Web Dev Quiz App",
  // link:"",  
  // description: "An interactive quiz application built with React to test beginners on foundational web development concepts. Users can choose from categories like HTML, CSS, or General Web Knowledge, and answer multiple-choice questions designed to reinforce learning. The app features dynamic question rendering, instant feedback, and a simple, user-friendly interface ideal for newcomers to web development.",
  //src: "quiz.jpg",
  //   color: "#88A28D"
  // },
  {
    title: "Space Exploration Website",
    link:"https://spacesite-gamma.vercel.app/",
    description:"The site features a smooth and engaging user experience across four key sections: a landing home page, a destination page for exploring various planets, a technology page highlighting space innovations, and a crew page introducing astronauts. Built with responsive design and seamless routing ",
    src: "space.jpg",
    color: "#88A28D",
  }, 
  {
    title: "Todo",
    link:"https://todo-4b2ap3voe-ndulue-christians-projects.vercel.app/",
    description:"A simple and intuitive React application that allows users to manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed, with real-time UI updates. The app focuses on clean state management, responsive design, and a user-friendly experience to help users stay organized and productive.",
    src: "todo.jpg",
    color: "#88A28D",
  },
];

export default function Project({ isDark }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    console.log(scrollYProgress.get());
    scrollYProgress.on("change", (e) => console.log(scrollYProgress.current));
  }, [scrollYProgress]);

  return (
    <main ref={container} id="Work" className={`mt-[20vh] font-Ovo px-3 sm:px-6 `}>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-lg font-Ovo mb-2"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        welcome to my web development portfolio Explore a collection of projects
        showcasing my expertise in front-end developmet
      </motion.p>

      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;

        return (
          <div
            key={index}
            className=" flex items-center justify-center h-screen sticky top-0"
          >
            <Card
              i={index}
              {...project}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          </div>
        );
      })}
    </main>
  );
}

function Card({
  title,
  description,
  src,
  link,
  color,
  i,
  range, 
  targetScale,
  progress,
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
    <motion.div
      ref={container}
      style={{ scale: cardScale, top: `calc(-10% + ${i * 25}px)` }}
      className="card relative group hover:border-b-4 hover:border-lime-300 flex flex-col  border-gray-400 rounded-xl p-4 md:p-8 cursor-pointer bg-lightHover 
                         font-Ovo    dark:border-white   dark:bg-darkHover "
    >
      <h2 className="text-center text-2xl font-bold mb-3 md:mb-6">{title}</h2>
      <div className="flex md:flex-row flex-col h-full gap-6 md:gap-12">
        <div className="md:w-[40%] w-full sm:h-[40%] h-[60%] md:h-full flex flex-col">
          <p className="md:mt-10 mt-3 text-base lg:text-xl sm:text-lg">{description}</p>

          <div className=" absolute top-0 right-0 translate-x-[-50%] group-hover:bg-lime-300 border mb-auto mt-5 rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:rotate-[43deg]  transition">
            <Image src={assets.send_icon} alt="send icon" className="w-5" />
          </div>
        </div>

        <div className="md:w-[60%]  w-full sm:h-[60%] h-full  md:h-full rounded-xl relative overflow-hidden">
          <motion.div style={{ scale: imgScale }} className="w-full h-full relative">
            <Image
              fill
              src={`/img/${src}`}
              alt=""
              layout="fill"
              className="absolute object-cover"
            />
            {/* <img src={`/img/${src}`} alt="" className="absolute top-0 w-full h-full object-cover" /> */}
          </motion.div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
