"use client";
import Cards from "./baseCards";
import Craft from "./baseCraft";
import StarsCanvas from "./canvas/Stars";
import ComputersCanvas from "./canvas/Computers";

export default function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url("/nebula.gif")` }}
      >
        <section className="relative w-full h-screen mx-auto">
          <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className="font-serif font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I&apos;m <span className="text-[#ff5e5e]">Magneum</span>
              </h1>
              <p className="italic text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                <span className="hover:text-purple-900/70">
                  I develop web applications and Apis for everyone.
                  <br className="sm:block hidden" />
                  Exercitation esse Lorem nisi cillum sunt anim qui irure ea
                  minim incididunt cillum reprehenderit. Voluptate ea duis non
                  sit nostrud in amet dolor ex commodo velit proident sint. Nisi
                  deserunt dolore sit minim sunt nostrud aliqua pariatur ad
                  officia.
                </span>
                <div className="flex items-center justify-center text-7xl rotate-180">
                  <Craft />
                </div>
              </p>
            </div>
          </div>
          <ComputersCanvas />
        </section>
      </div>
      <section id="Cards">
        <hr className="h-1 bg-neutral-600/60 border-0" />
        <Cards />
      </section>

      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
}

{
  /* <header className="h-screen bg-neutral-900">
<div
className="hero h-screen"
style={{ backgroundImage: `url("/bg-space.gif")` }}
>
<div className="hero-overlay bg-opacity-70"></div>
<div className="hero-content text-center uppercase">
<div className="font-mono">
<div className="ring-1 ring-purple-600/50 relative rounded-lg ml-4 mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-purple-600 font-bold">
made with <span className="animate-ping">💚</span> using nextjs
+ tailwindcss
</div> 
<h1 className="mb-5 text-5xl font-bold ">
<span className="animate-pulsehover:text-purple-900/70 text-purple-400/50">experience </span>
<span className="hover:text-purple-900/70">is </span>
<span className="hover:text-purple-900/70">the </span>
<span className="hover:text-purple-900/70">name </span>
<span className="hover:text-purple-900/70">everyone </span>
<span className="hover:text-purple-900/70">gives </span>
<span className="hover:text-purple-900/70">to </span>
<span className="hover:text-purple-900/70">their </span>
<span className="animate-pulsehover:text-purple-900/70 text-purple-400/50">mistakes. </span>
</h1>
<div className="flex items-center justify-center text-7xl rotate-180">
<Craft />
</div> 

</div>
</div>
</div>
</header> */
}
