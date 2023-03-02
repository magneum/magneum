"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdCode } from "react-icons/md";
import { useTypewriter as Typewriter } from "react-simple-typewriter";

type Props = {};

function baseCards({}: Props) {
var [TypeHead] = Typewriter({
words: ["Head Over To Different Orbits."],
delaySpeed: 1000,
loop: 1,
});
return (
<div>
<section className="items-center justify-center text-xl bg-[#1b1b1b]">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
<div className="ring-1 ring-lime-600/50 relative rounded-lg ml-4 mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-lime-600 font-bold">
made with <span className="animate-ping">💚</span> using nextjs +
tailwindcss
</div>
<h2 className="mb-6 font-bold tracking-wide text-lime-400/70 capitalize text-4xl md:text-5xl lg:text-6xl xl:text-7xl  sm:leading-none">
{TypeHead}
</h2>
<p className="mb-6 text-base font-thin text-gray-400/70 md:text-lg md:text-center lg:text-center xl:text-center capitalize italic">
Dive into the galaxy of unknowns and discover new skills.
<br></br>Some interesting some weird.<br></br>
</p>
</div>
</div>

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-1 lg:py-20">
<div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/github.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://github.com/magneum"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🛵</span>
</p>
<a
href="https://github.com/magneum"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Github
</a>
<p className="mb-4 text-gray-400 text-sm">
GitHub, Inc. is an Internet hosting service for software
development and version control using Git. It provides the
distributed version control of Git plus access control, bug
tracking, software feature requests, task management,
continuous integration, and wikis for every project.
</p>
<a
href="https://github.com/magneum"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/Sound.gif"
alt=""
className="object-cover w-full h-64 contrast-90"
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/premiumdl"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🎹</span>
</p>
<a
href="/screens/premiumdl"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
premiumdl
</a>
<p className="mb-4 text-gray-400 text-sm">
Premiumdl allows you to convert & download video and audio
from YouTube, Spotify in HD quality. Available formats are
.webm .mp4. You can easily download for free thousands of
videos from YouTube and other websites. Once the required
video url or song name is provided, all the meta informations
are shown in the page.
</p>
<a
href="/screens/premiumdl"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/server.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/magneumapi"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🛰️</span>
</p>
<a
href="/screens/magneumapi"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Magneum Api
</a>
<p className="mb-4 text-gray-400 text-sm">
With Magneum you can fetch different types of informations
without needing to install any dependencies or worrying about
servers or configurations.
</p>
<a
href="/screens/magneumapi"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/node.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://www.npmjs.com/settings/magneum/packages"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🔥</span>
</p>
<a
href="https://www.npmjs.com/settings/magneum/packages"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Node NPM Packages
</a>
<p className="mb-4 text-gray-400 text-sm">
NPM is the worlds largest software registry.<br></br>
Open source developers from every continent use npm to share
and borrow packages,and many organizations use npm to manage
private development as well.
</p>
<a
href="https://www.npmjs.com/settings/magneum/packages"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/vlkyre.png"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/vlkyre"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🦇</span>
</p>
<a
href="/screens/vlkyre"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Vlkyre Home Page
</a>
<p className="mb-4 text-gray-400 text-sm">
Vlkyre is a whatsapp bot with automation, moderation, music,
games and 200+ commands! You can easily deploy your own vlkyre
by using npm. To Find Out What Vlkyre Offers, Join Any Vlkyre
Official Groups in vlkyre-home-page.
</p>
<a
href="/screens/vlkyre"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/YouTube.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— ⭕</span>
</p>
<a
href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Vlkyre YouTube
</a>
<p className="mb-4 text-gray-400 text-sm">
GitHub, Inc. is an Internet hosting service for software
development and version control using Git. It provides the
distributed version control of Git plus access control, bug
tracking, software feature requests, task management,
continuous integration, and wikis for every project.
</p>
<a
href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/anime.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/animehub"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🎊</span>
</p>
<a
href="/screens/animehub"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Anime Hub
</a>
<p className="mb-4 text-gray-400 text-sm">
Anime is hand-drawn and computer-generated animation
originating from Japan. Outside of Japan and in English, anime
refers specifically to animation produced in Japan. However,
in Japan and in Japanese, anime describes all animated works,
regardless of style or origin.
</p>
<a
href="/screens/animehub"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#222522] rounded-2xl shadow-2xl xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl hover:shadow-lime-600">
<Image
width={800}
height={800}
src="/Docker.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://hub.docker.com/repositories/magneum"
className="transition-colors duration-200 text-blue-gray-900 hover:text-lime-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🐳</span>
</p>
<a
href="https://hub.docker.com/repositories/magneum"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-lime-500/70 uppercase font-serif"
>
Magneum Docker
</a>
<p className="mb-4 text-gray-400 text-sm">
Docker is a set of platform as a service products that use
OS-level virtualization to deliver software in packages called
containers. The service has both free and premium tiers. The
software that hosts the containers is called Docker Engine.
</p>
<a
href="https://hub.docker.com/repositories/magneum"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-lime-800 rounded-md cursor-pointer group shadow-xl shadow-lime-900 ease focus:outline-none hover:bg-lime-900"
>
<span className="mr-2">
<MdCode />{" "}
</span>
Lauch
</a>
</div>
</div>
</div>
</div>
</section>
</div>
);
}

export default baseCards;
