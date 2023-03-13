"use client";
type Props = {};
import React from "react";
import { motion } from "framer-motion";
// import EarthCanvas from "../lib/canvas/Earth";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = (props: Props) => {
  const [Text] = useTypewriter({
    words: [
      "Hi, The name's Shovit",
      "Guy who loves coffee",
      "<$Coding-For-Life/>",
    ],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <>
      <motion.div
        style={{ backgroundImage: `url("/Space_Hero.gif")` }}
        className="bg-cover bg-no-repeat bg-center hero h-screen"
      >
        <motion.div
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative italic backdrop-blur-xl rounded-lg text-sm leading-6 shadow-2xl shadow-black bg-[#19191a]/50 text-purple-400 p-4"
        >
          made with ❣️ using Nextjs + Tailwindcss + FramerMotion
          <h1>
            <motion.span className="not-italic font-mono font-black text-[#ff5e5e]/90 uppercase tracking-wide text-xl">
              {Text}
              <Cursor cursorColor="#ff5e5e" />
            </motion.span>
          </h1>
        </motion.div>
        <motion.p
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
          initial={{
            opacity: 0,
            y: -200,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          className="font-bold text-gray-400/60 pt-32 text-sm tracking-[10px] uppercase"
        >
          Full-Stack Developer
        </motion.p>
        <motion.div
          className="relative flex items-center justify-center"
          transition={{ duration: 2, type: "spring" }}
          animate={{
            borderRadius: ["10", "20", "40", "80", "20"],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            scale: [0.5, 1, 2, 1],
          }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            initial={{
              x: -400,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute border border-orange-500 rounded-full h-[200px] w-[200px] animate-ping"
          />
          <motion.div className="absolute border border-[#ff5e5e]/20 rounded-lg h-[300px] rotate-45 w-[400px] animate-ping" />
          <motion.div className="absolute border border-[#ff5e5e]/20 rounded-lg h-[400px] rotate-45 w-[300px] animate-ping" />
          <motion.div
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            initial={{
              y: -200,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            className="absolute border-4 border-[#1c248f] rounded-full h-[600px] w-[600px] animate-pulse"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
