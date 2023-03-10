"use client";
import Cards from "./home/page";
import { motion } from "framer-motion";
import EarthCanvas from "./lib/canvas/Earth";
import ComputerCanvas from "./lib/canvas/Computers";
import { useTypewriter as Typewriter } from "react-simple-typewriter";

export default function Home() {
  var [TypeHero] = Typewriter({
    words: ["Magneum", "Shovit"],
    delaySpeed: 1000,
    loop: true,
  });
  return (
    <main>
      <div
        style={{ backgroundImage: `url("/space_blur_red.gif")` }}
        className="bg-cover bg-no-repeat bg-center hero min-h-screen bg-opacity-50"
      >
        <div className="hero-content text-center">
          <div className="max-w-7xl">
            <motion.div
              initial={{ x: 200, opacity: 0, scale: 1 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="animate-pulse relative rounded-lg mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-purple-400 font-bold">
                made with <span className="animate-ping">❣️</span> using nextjs
                + tailwindcss + threejs
              </div>
              <h1 className="font-serif font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[35px] lg:leading-[98px] mt-2">
                Hi, I&apos;m <span className="text-[#ff5e5e]">{TypeHero}</span>
              </h1>
              <h2 className="italic text-[#dfd9ff]/70 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px] mt-2">
                Self learned Developer :)
                <br></br>I develop Web-Applications and Apis.
                <br></br>Specialized in Backend & Frontend.
                <br></br>Graduated from Sikkim Manipal Institute of Technology,
                India.
              </h2>
            </motion.div>
            <EarthCanvas />
          </div>
        </div>
      </div>
      <hr className="h-1 bg-[#ff5e5e]/40 border-0" />
      <Cards />
    </main>
  );
}
