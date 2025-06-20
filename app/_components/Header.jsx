import { motion } from "motion/react"
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Header() {
    return <div className="max-w-5xl w-11/12 text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
            <motion.div             
            initial={{ scale:0}}
            whileInView={{ scale:1,}}  
            transition={{duration:0.8,type:"spring",stiffness:100}}
            viewport={{ once: true }}
            >
                <Image src={assets.me} alt="" className=" rounded-full object-cover bg-cover top-0  object-right-top w-[9rem] h-[9rem]"/> 
            </motion.div>
            <motion.h3
            initial={{y:-20, opacity:0}}
            whileInView={{y:0,opacity:1}}   
            transition={{duration:0.6,delay:0.3}}
            viewport={{ once: true }}
            className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi, I'm Ndulue Christian
                <Image src={assets.hand_icon} alt="" className=" w-6"/>
            </motion.h3>
            <motion.h1
            initial={{y:-30, opacity:0}}
            whileInView={{y:0,opacity:1}}   
            transition={{duration:0.8,delay:0.5}}
            viewport={{ once: true }}
            className="text-3xl sm:text6xl lg:text-[66px] font-Ovo leading-[70px]">
                A self-taught frontend developer
            </motion.h1>
            <motion.article
            initial={{opacity:0}}
            whileInView={{opacity:1}}   
            transition={{duration:0.6,delay:0.7}}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto font-Ovo ">
                an aspiring Software Engineer with a strong passion for building user-centered, responsive, and interactive web experiences.
                

            </motion.article>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                initial={{y:30, opacity:0}}
                whileInView={{y:0,opacity:1}}   
                transition={{duration:0.6,delay:1}}
                viewport={{ once: true }}
                href="#Contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent">
                    contact me
                </motion.a>
                {/* download the file pdf */}
                <motion.a
                initial={{y:30, opacity:0}}
                whileInView={{y:0,opacity:1}}   
                transition={{duration:0.6,delay:1.2}}
                viewport={{ once: true }}
                href="/Ndulue MChristi.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">
                    my Resume
                    <Image className="w-4" src={assets.download_icon} alt="" />
                </motion.a>
            </div>
        </div>
}

