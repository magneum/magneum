"use client";
type Props = {};
import { motion } from "framer-motion";
import Link from "next/link";
import { SiHomebridge } from "react-icons/si";
import { SocialIcon } from "react-social-icons";

const navigator = (props: Props) => {
  return (
    <header
      id="section-header"
      className="navbar backdrop-blur-3xl shadow-2xl shadow-stone-900 rounded-b-lg text-gray-300/50 sticky top-0 flex items-start justify-between mx-auto z-40 bg-[#242424]/50 p-6"
    >
      <motion.div
        transition={{ duration: 0.5, type: "spring" }}
        initial={{ x: -400, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className="flex flex-row items-center hover:animate-spin text-3xl"
      >
        <SocialIcon
          url="https://github.com/magneum"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div className="flex uppercase tracking-widest font-thin font-serif">
        <motion.span
          transition={{ duration: 0.6, type: "spring" }}
          initial={{ y: -400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          M
        </motion.span>
        <motion.span
          transition={{ duration: 0.4, type: "spring" }}
          initial={{ y: 400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          A
        </motion.span>
        <motion.span
          transition={{ duration: 0.6, type: "spring" }}
          initial={{ y: -400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          G
        </motion.span>
        <motion.span
          transition={{ duration: 0.4, type: "spring" }}
          initial={{ y: 400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          N
        </motion.span>
        <motion.span
          transition={{ duration: 0.6, type: "spring" }}
          initial={{ y: -400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          E
        </motion.span>
        <motion.span
          transition={{ duration: 0.4, type: "spring" }}
          initial={{ y: 400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          U
        </motion.span>
        <motion.span
          transition={{ duration: 0.6, type: "spring" }}
          initial={{ y: -400, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest"
        >
          M
        </motion.span>
      </motion.div>
      <Link href={"/"}>
        <motion.div
          transition={{ duration: 0.8, type: "spring" }}
          initial={{ x: 400, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          className="flex flex-row items-center cursor-pointer"
        >
          {/* <SocialIcon
className="cursor-pointer"
bgColor="transparent"
network="email"
fgColor="gray"
/>*/}
          <SiHomebridge className="text-3xl mt-4 hover:animate-spin" />
          <p className="uppercase hidden md:inline-flex text-sm pl-2 pt-4">
            Home
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default navigator;
