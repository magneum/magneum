"use client";
type Props = {};
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";


const NAVG = (props: Props) => {
return (
<div className="sticky z-40 top-0 pl-8 pr-4 p-6 navbar bg-[#1d1c20]/80 backdrop-blur-md shadow-2xl shadow-black">
<motion.div
initial={{ x: -600, opacity: 0, scale: 0.1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className={`flex-1 font-light uppercase tracking-widest font-serif ml-4`}
>
<div className="flex-none pr-4">
<button className="btn btn-circle shadow-lg shadow-yellow-900/50 ring-1 ring-gray-400/50 bg-[#262424] hover:bg-[#262424] hover:scale-105 hover:contrast-125">
<Link href="/" >
<Image
alt="fire"
src="/fire.gif"
width={900}
height={900}
className="rounded-full"
></Image>
</Link>
</button>
</div>
<span className="animate-pulse text-gray-50 hover:text-gray-600 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">M</span>
<span className="animate-pulse text-gray-100 hover:text-gray-500 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">A</span>
<span className="animate-pulse text-gray-200 hover:text-gray-400 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">G</span>
<span className="animate-pulse text-gray-300 hover:text-gray-300 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">N</span>
<span className="animate-pulse text-gray-400 hover:text-gray-200 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">E</span>
<span className="animate-pulse text-gray-500 hover:text-gray-100 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">U</span>
<span className="animate-pulse text-gray-600 hover:text-gray-50 hover:animate-bounce text-2xl md:text-3xl lg:text-4xl xl:text-5xl">M</span>
</motion.div>

<motion.div
initial={{ x: -600, opacity: 0, scale: 0.1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<SocialIcon
url="https://github.com/magneum"
fgColor="gray"
bgColor="transparent"
className="hover:scale-125"
/>
<SocialIcon
url="https://instagram.com/magneum"
fgColor="gray"
bgColor="transparent"
className="ml-2 hover:scale-125"
/>
</motion.div>
</div>
);
};

export default NAVG;
