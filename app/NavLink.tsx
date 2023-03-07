"use client";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

const NavLink = (props: Props) => {
return (
<div className="sticky z-40 top-0 pl-8 pr-4 p-6 navbar bg-neutral-900/80 backdrop-blur-md shadow-2xl shadow-black">
<motion.div
initial={{ x: -600, opacity: 0, scale: 0.1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="flex-1 font-light uppercase tracking-widest text-gray-400/50"
>
<div className="flex-none pr-4">
<button className="btn btn-circle shadow-lg shadow-yellow-900/50 ring-1 ring-gray-400/50 bg-[#262424] hover:bg-[#262424] hover:scale-105 hover:contrast-125">
<Image alt="fire" src="/fire.gif" width={900} height={900} className="rounded-full"></Image>
</button>
</div>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">M</span>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">A</span>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">G</span>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">N</span>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">E</span>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">U</span>
<span className="hover:text-white hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">M</span>
</motion.div>
</div>
);
};

export default NavLink;
