import { AnimatePresence, motion } from "motion/react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function About({ isDark }) {
  const [open, setOpen] = useState(false);

  const fullText = `Currently, I’m a student at the University of Lagos (UNILAG), where I study Building Engineering, a field closely related to architecture and structural design. While my academic background is in engineering, my true interest lies in the world of technology—specifically software development.

Over the past five months, I’ve dedicated myself to growing as a Frontend Developer, learning and working with tools like React, Tailwind CSS, and Next.js. I've built several hands-on projects, including challenges from Frontend Mentor, which have helped me sharpen my skills in layout design, component architecture, and state management.`;

  const shortText = fullText.slice(0, 180) + "...";

  return (
    <motion.div
      id="About"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-Ovo mb-2"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <AnimatePresence initial={false}>
              {!open ? (
                <motion.p
                  key="short"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-2 max-w-2xl font-Ovo overflow-hidden"
                >
                  {shortText}
                </motion.p>
              ) : (
                <motion.p
                  key="full"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-2 max-w-2xl font-Ovo overflow-hidden"
                >
                  {fullText}
                </motion.p>
              )}
            </AnimatePresence>
            <button
              onClick={() => setOpen((v) => !v)}
              className="mb-3 font-semibold"
            >
              {open ? "View Less" : "View More"}
            </button>
          </motion.div>
          {/* //todo we added box shadow  */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={i}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:border-lime-300 hover:border-lime-500 hover:-translate-y-1 duration-500 
                             dark:border-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDark ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, i) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={i}
                className="flex dark:hover:border-lime-300 hover:border-lime-500 items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

//! new scroll mt-20
//! and on the layout file add scroll smooth

//! the aspect-square goes well with the with to make it square
