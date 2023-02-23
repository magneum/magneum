import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTypewriter } from "react-simple-typewriter";

export default function SPOTIFY() {
var [Lines] = useTypewriter({
words: ["Spotify +", "Spotify Audio"],
delaySpeed: 2000,
loop: true,
});

return (
<div className="bg-[#121112] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
<Header />
<div className="h-screen max-w-screen-xl bg-[#121112] flex items-center">
<div className="container flex flex-col md:flex-row items-center justify-between px-5 text-white">
<div className="w-full lg:w-1/2 mx-8">
<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<div className="text-7xl text-amber-500 font-dark font-extrabold mb-8">
404
</div>
</motion.div>

<motion.div
initial={{ x: -200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<p className="text-2xl md:text-3xl font-light leading-normal mb-8 text-amber-100/70">
Sorry we couldn&apos;t find the page you&apos;re looking for
</p>
</motion.div>

<Link
href="/"
className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-gray-600 active:bg-amber-600 hover:bg-amber-700"
>
Back to homepage
</Link>
</div>
<div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
<Image
width={900}
height={900}
src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
className="hue-rotate-180"
alt="Page not found"
/>
</div>
</div>
</div>
{/* ============================================================================================================ */}
<section id="FooterSection">
<Footer />
</section>
</div>
);
}
