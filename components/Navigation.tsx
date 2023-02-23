import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiHomebridge } from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import React, { useEffect, useRef, useState } from "react";
type Props = {};

function Navigation({}: Props) {
return (
<section className="sticky top-0 flex items-center justify-center max-w-full mx-auto ">
<div className="navbar bg-[#141414] shadow-2xl shadow-white/10 ring-1 ring-white/10">
<motion.div
initial={{ x: 600, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="navbar-start"
>
<div className="dropdown">
<label tabIndex={0} className="btn btn-ghost btn-circle">
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-5 w-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M4 6h16M4 12h16M4 18h7"
/>
</svg>
</label>
<ul
tabIndex={0}
className="menu menu-compact dropdown-content font-semibold mt-4 p-2 shadow rounded-lg w-52 bg-[#141414] ring-1 ring-white/10"
>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/github">Github</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/vlkyre">Vlkyre</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/premiumdl">Premiumdl</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/magneumapi">Magneum Api</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/nodejs">Node Packages</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="youtubevlkyre">YouTube</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/animehub">Anime Hub</a>
</li>
<li className="hover:text-lime-500 hover:animate-bounce">
<a href="/docker">Docker</a>
</li>
</ul>
</div>
</motion.div>
<div className="navbar-center">
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
M
</a>
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
A
</a>
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
G
</a>
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
N
</a>
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
E
</a>
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
U
</a>
<a className="normal-case text-xl text-gray-500 tracking-[20px] font-light hover:animate-bounce hover:text-lime-600 md:text-3xl lg:text-4xl xl:text-4xl hover:font-semibold">
M
</a>
</div>
<motion.div
initial={{ x: -600, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="navbar-end"
>
<SocialIcon
className="animate-pulse hover:animate-spin"
url="https://www.github.com/magneum"
bgColor="transparent"
fgColor="gray"
/>
<Link href="/">
<button className="btn btn-ghost btn-circle">
<div className="text-gray-300/50 text-4xl hover:animate-spin hover:text-lime-600">
<SiHomebridge />
</div>
</button>
</Link>
</motion.div>
</div>
</section>
);
}

export default Navigation;
