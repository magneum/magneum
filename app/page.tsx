"use client";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <section className="relative w-full h-screen mx-auto">
          <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#ff5e5e]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I&apos;m <span className="text-[#ff5e5e]">Magneum</span>
              </h1>
              <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                I develop 3D visuals, user <br className="sm:block hidden" />
                interfaces and web applications
              </p>
            </div>
          </div>

          <ComputersCanvas />

          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// import Cards from "./baseCards";
// import Craft from "./baseCraft";
{
  /* <header className="h-screen bg-neutral-900">
<div className="hero h-screen" style={{ backgroundImage: `url("/bg-space.gif")` }}>
<div className="hero-overlay bg-opacity-70"></div>
<div className="hero-content text-center uppercase">
<div className="font-mono">
<div className="ring-1 ring-lime-600/50 relative rounded-lg ml-4 mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-lime-600 font-bold">
made with <span className="animate-ping">💚</span> using nextjs + tailwindcss
</div>
<h1 className="mb-5 text-5xl font-bold ">
<span className="animate-pulse hover:animate-pulse hover:text-lime-900/70 text-lime-400/50">experience </span>
<span className="hover:animate-pulse hover:text-lime-900/70">is </span>
<span className="hover:animate-pulse hover:text-lime-900/70">the </span>
<span className="hover:animate-pulse hover:text-lime-900/70">name </span>
<span className="hover:animate-pulse hover:text-lime-900/70">everyone </span>
<span className="hover:animate-pulse hover:text-lime-900/70">gives </span>
<span className="hover:animate-pulse hover:text-lime-900/70">to </span>
<span className="hover:animate-pulse hover:text-lime-900/70">their </span>
<span className="animate-pulse hover:animate-pulse hover:text-lime-900/70 text-lime-400/50">mistakes. </span>
</h1>
<div className="flex items-center justify-center text-7xl rotate-180">
<Craft />
</div>
</div>
</div>
</div>
</header>
<section id="Cards">
<hr className="h-1 bg-neutral-600/60 border-0" />
<Cards />
</section> */
}
