"use client";
import Cards from "./baseCards";
import ComputersCanvas from "./canvas/Computers";

export default function Home() {
return (
<div>
<div
className="bg-cover bg-no-repeat bg-center"
style={{ backgroundImage: `url("/space_blur_red.gif")` }}
>
<section className="relative w-full h-screen mx-auto">
<div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
<div className="flex flex-col justify-center items-center mt-5">
<div className="w-1 sm:h-80 h-40 violet-gradient" />
</div>
<div>
<div className="animate-pulse ring-1 ring-purple-600/50 relative rounded-lg mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-purple-400 font-bold">
made with <span className="animate-ping">❣️</span> using nextjs
+ tailwindcss + threejs
</div>
<h1 className="font-serif font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
Hi, I&apos;m <span className="text-[#ff5e5e]">Magneum</span>
</h1>
<h2 className="italic text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
I develop web applications and Apis.
<br></br>
Here is my world for you to visit.
</h2>
</div>
</div>
<ComputersCanvas />
</section>
</div>
<section id="Cards">
<hr className="h-1 bg-[#ff5e5e]/60 border-0" />
<Cards />
</section>
</div>
);
}