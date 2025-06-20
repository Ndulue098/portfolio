import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Services() {
  const [expanded, setExpanded] = useState(null);
    const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="Services"
      className="w-full  px-[8%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-Ovo mb-2"
      >
        What i offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        As a frontend developer, here are the services I currently offer:{" "}
      </motion.p>
      {/* //todo displaying the the shadow  && check the tailwind config for the responsive grid*/}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 grid-rows-auto sm:grid-cols-auto gap-6 my-10 "
      >
        {serviceData.map(({ Icon, title, description, link }, i) => {
          const fullText = description;
          const shortText = fullText.slice(0, 70) + "...";
          const isExpanded = expanded === i;

          return (
            <motion.div
              key={i}
              layout
              whileHover={{ scale: expanded === i ? 1.05 : 1.03 }}
              // animate={
              //   isMobile
              //     ? { height: isExpanded ? 400 : "auto" }
              //     : { gridColumn: isExpanded ? "span 2 / span 2" : undefined }
              // }
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`
              border border-gray-400 rounded-lg px-8 py-12 cursor-pointer
              hover:bg-lightHover hover:-translate-y-1 duration-500
              dark:hover:bg-darkHover dark:hover:border-lime-300 hover:border-lime-500
              flex flex-col 
              ${expanded === i ? "z-10 shadow-2xl" : ""} 
            `} 
              style={isMobile
                  ? { height: isExpanded ? 400 : "auto" }
                  : { gridColumn: isExpanded ? "span 2 / span 2" : undefined }}
            >
              <div className="bg-lime-300 mr-auto rounded-md">
                <Icon className="w-9 h-9 p-2 text-black  " />
              </div>
              {/* <Image src={icon} alt="" className="w-10" /> */}
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p
                className={`${
                  expanded === i ? "text-lg" : "text-sm"
                }  gray-600 leading-5 dark:text-white/80`}
              >
                {
                  expanded === i ? fullText : shortText
                  // description
                }
              </p>
              <a
                href={link}
                className="flex items-center gap-2 text-sm mt-5"
                onClick={(e) => {
                  e.preventDefault();
                  setExpanded(expanded === i ? null : i);
                }}
              >
                {expanded !== i ? "Read more" : "collapse"}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
