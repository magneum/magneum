"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export default function SERSERR() {
var [Lines] = useTypewriter({
words: ["500 Server error"],
delaySpeed: 1000,
loop: true,
});

return (
<div className="bg-[#121112] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
<div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-[#121112]">
<div className="text-center">
<motion.div
initial={{ x: -200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<div className="inline-flex rounded-full bg-red-900 p-6 animate-spin">
<div className="rounded-full stroke-red-800 bg-red-700 p-8 text-7xl animate-pulse"></div>
</div>
</motion.div>

<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<h1 className="mt-4 not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
☉ {Lines}
</h1>
</motion.div>

<p className="text-white mt-5 lg:text-lg">
Oops something went wrong.
</p>
<Link href="/screens/spotify">
<button className="mt-4 bg-transparent hover:bg-lime-500 text-lime-300 hover:text-white py-2 px-4 border border-lime-900 hover:border-transparent rounded shadow-md shadow-lime-600">
Try Again
</button>
</Link>
<Link href="/screens/premiumdl">
<button className="mt-4 ml-2 bg-transparent hover:bg-lime-500 text-lime-300 hover:text-white py-2 px-4 border border-lime-900 hover:border-transparent rounded shadow-md shadow-lime-600">
Back To Premiumdl
</button>
</Link>
</div>
</div>
</div>
);
}
