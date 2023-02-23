import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import { SocialIcon } from "react-social-icons";
import { HackText } from "react-hacker-text-effect";
import { useTypewriter } from "react-simple-typewriter";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
var [TypeWords, CountWords] = useTypewriter({
words: ["bit.ly/magneum"],
loop: false,
typeSpeed: 70,
deleteSpeed: 50,
delaySpeed: 1000,
});

return (
<>
<Head>
<title>MAGNEUM 🍀</title>
<meta
name="description"
content="made with Love using Nextjs and tailwindcss"
/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
{/* ============================================================================================================ */}
<main>
<section id="LandingSection">
<div className="h-screen snap-start items-center justify-center text-xl relative w-full flex text-center bg-cover bg-center">
<div className="absolute top-0 right-0 bottom-0 left-0 opacity-70">
<Image
height={100}
width={100}
alt="content"
src="/space_4.gif"
className="absolute inset-0 object-cover w-full h-full blur-[3px] sm:blur-md md:blur-md lg:blur-md  xl:blur-md"
/>
</div>
<div className="px-4 sm:px-6 lg:px-8 z-10">
<motion.div
initial={{ x: -600, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="text-center"
>
<div className="ring-1 ring-lime-600/50 relative rounded-lg ml-4 mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-lime-600 font-bold">
made with <span className="animate-ping">💚</span> using
nextjs + tailwindcss
</div>

<h2 className="font-serif mb-8 text-4xl capitalize font-bold tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl text-gray-300">
<span className="hover:underline animate-pulse text-lime-500">
Experience{" "}
</span>
<span className="hover:text-lime-600 hover:animate-ping">
is{" "}
</span>
<span className="hover:text-lime-600 hover:animate-ping">
the{" "}
</span>
<span className="hover:text-lime-600 hover:animate-ping">
name{" "}
</span>
<span className="hover:text-lime-600 hover:animate-ping">
everyone{" "}
</span>
<span className="block"></span>
<span className="hover:text-lime-600 hover:animate-ping">
gives{" "}
</span>
<span className="hover:text-lime-600 hover:animate-ping">
to{" "}
</span>
<span className="hover:text-lime-600 hover:animate-ping">
their{" "}
</span>
<span className="hover:underline animate-pulse text-lime-600">
mistakes!
</span>
</h2>
</motion.div>
<motion.div
initial={{ x: 500, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="text-center"
>
<h2 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-300 to-red-300 tracking-widest font-mono">
: {TypeWords} :
</h2>
</motion.div>
<motion.div
initial={{ x: -200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="mt-3 mb-4"
>
<HackText word="BY MAGNEUM" textSize="20px" />
<SocialIcon
url="https://www.github.com/magneum"
bgColor="transparent"
fgColor="lightgreen"
/>
</motion.div>
</div>
</div>
<hr className="h-1 bg-lime-900/50 border-0" />
</section>
{/* ============================================================================================================ */}
<section id="CardsSection">
<Cards />
<hr className="border-lime-400 text-lg roundd-full" />
</section>
{/* ============================================================================================================ */}
<section id="FooterSection">
<Footer />
</section>
</main>
</>
);
}
