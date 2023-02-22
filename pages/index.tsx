import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export default function magneum() {
var [TypeWords, CountWords] = useTypewriter({
words: ["bit.ly/magneum"],
delaySpeed: 3000,
loop: true,
});
return (
<>
<main>
<section id="Hero">
<div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center">
<Image
height={720}
width={1270}
alt="content"
src="/space.gif"
className="absolute inset-0 object-cover w-full h-full blur-sm"
/>
<div className="absolute top-0 right-0 bottom-0 left-0 bg-stone-900 opacity-75"></div>
<div className="px-4 sm:px-6 lg:px-8 z-10">
<motion.div
initial={{ x: -500, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="text-center"
>
<h2 className="text-4xl uppercase font-bold tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl text-fray-500">
<span className="hover:text-red-800 hover:animate-ping text-red-800">
Experience
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping">
is
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping">
the
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping">
name
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping">
everyone
</span>{" "}
<span className="block"></span>
<span className="hover:text-red-800 hover:animate-ping">
gives
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping">
to
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping">
their
</span>{" "}
<span className="hover:text-red-800 hover:animate-ping text-red-800">
mistakes!
</span>
</h2>
{/* <div className="text-center"><div className="mt-5 justify-center"><div className="rounded-md shadow"></div></div></div> */}
</motion.div>
<motion.div
initial={{ x: 500, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="text-center"
>
<h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-800 to-red-800 tracking-widest capitalise">
: {TypeWords}
</h2>
</motion.div>
</div>
</div>
</section>
<div>
<hr className="h-px bg-red-800 border-0" />
</div>
<section className="text-gray-400 bg-[#1d1d1d]">
<div className="container px-5 py-24 mx-auto flex flex-col">
<div className="lg:w-4/6 mx-auto">
<div className="rounded-lg h-64 overflow-hidden">
<img
alt="content"
className="object-cover object-center h-full w-full"
src="/magneum_ui.png"
/>
</div>
<div className="flex flex-col sm:flex-row mt-10">
<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
<motion.div
initial={{ x: 500, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600"
>
<img
alt="content"
src="https://i.pinimg.com/originals/03/a0/0f/03a00f00d52f56b448e99454c9be5e90.gif"
className="object-cover rounded-full object-center h-full w-full shadow shadow-black hover:scale-150"
/>
</motion.div>
<motion.div
initial={{ x: -500, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="flex flex-col items-center text-center justify-center"
>
<h2 className="font-bold tracking-widest title-font mt-4 text-gray-400/50 font-serif text-lg">
SHOVIT DUTTA
</h2>
</motion.div>
</div>
<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
<p className="leading-relaxed text-lg mb-4">
✧ Hi, I am Magneum (▀͜͞ʖ▀) ▄︻̷̿┻̿═━━ ~~<br></br>✧ A Front &
Back-end self-taught developer.<br></br>✧ Love to develope
Whatsapp bots, Telegram bots, Discord bots, Webpages,
Progressive Web Apps(PWA) and Application Programming
Interface(API)<br></br>✧ Feel free to check out my projects
including Magneum-Api.
<br></br>
</p>
</div>
</div>
</div>
</div>
</section>
<div>
<hr className="h-px bg-red-800 border-0" />
</div>
<section id="cards" className="w-auto bg-[#181419]">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-col">
<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
<h1 className="sm:w-2/5 text-red-800 font-bold title-font text-2xl mb-2 sm:mb-0 decoration-red-800 underline">
Lets head over to different places:
</h1>
<p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
<motion.div
initial={{ x: 500, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="w-20 h-20"
>
<img
alt="content"
src="https://gifimage.net/wp-content/uploads/2018/05/smile-animated-gif-11.gif"
className="object-cover rounded-lg object-center h-full w-full"
/>
</motion.div>
</div>
</div>
<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800">
<Link href="https://github.com/magneum">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/github.jpeg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🛵Github.com/magneum
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
GitHub, Inc. is an Internet hosting service for software
development and version control using Git. It provides the
distributed version control of Git plus access control, bug
tracking, software feature requests, task management,
continuous integration, and wikis for every project.
</p>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800 contrast-125">
<Link href="https://bit.ly/premiumdl">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full contrast-75"
src="/premiumdl.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🎹 bit.ly/premiumdl
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
- PREMIUMDL allows you to convert & download video and audio
from YouTube, Spotify in HD quality. Available formats are
.webm .mp4. You can easily download for free thousands of
videos from YouTube and other websites. Once the required
video url or song name is provided, all the meta informations
are shown in the page.
</p>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800 contrast-125">
<Link href="/application">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/api.jpg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🛰️ Magneum Api
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
With Magneum you can fetch different types of informations
without needing to install any dependencies or worrying about
servers or configurations.
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800">
<Link href="https://www.npmjs.com/settings/magneum/packages">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/node.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🔥 Node NPM Packages
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
NPM is the worlds largest software registry.<br></br>
Open source developers from every continent use npm to share
and borrow packages,and many organizations use npm to manage
private development as well.
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800">
<Link href="https://vlkyre.up.railway.app/vlkyre.html">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full contrast-150"
src="/whatsapp.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🦇 Vlkyre Home Page
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
Vlkyre is a whatsapp bot with automation, moderation, music,
games and 200+ commands! You can easily deploy your own vlkyre
by using npm. To Find Out What Vlkyre Offers, Join Any Vlkyre
Official Groups in vlkyre-home-page.
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800">
<Link href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/YouTube.jpg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🦇 Vlkyre YouTube
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
YouTube is a global online video sharing and social media
platform headquartered in San Bruno, California. It was
launched on February 14, 2005, by Steve Chen, Chad Hurley, and
Jawed Karim. It is owned by Google, and is the second most
visited website, after Google Search
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800">
<Link href="https://hub.docker.com/repositories/magneum">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full contrast-125"
src="/Docker.jpg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🦇 Magneum Docker
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
Docker is a set of platform as a service products that use
OS-level virtualization to deliver software in packages called
containers. The service has both free and premium tiers. The
software that hosts the containers is called Docker Engine.
</p>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-red-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-red-800">
<Link href="https://premiumdl-git-main-magneum.vercel.app/anime">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/anime_hub.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-red-800 mt-5 uppercase">
🦇 Anime Hub
</h2>
<p className="text-base leading-relaxed mt-2 text-red-100 hover:text-red-300">
Anime is hand-drawn and computer-generated animation
originating from Japan. Outside of Japan and in English, anime
refers specifically to animation produced in Japan. However,
in Japan and in Japanese, anime describes all animated works,
regardless of style or origin.
</p>
</div>
</div>
</div>
</section>
</main>
<div>
<hr className="h-px bg-red-800 border-0" />
</div>
<footer className="footer footer-center p-10 bg-zinc-900 text-base-content rounded">
<div>
<p className="font-bold italic text-slate-400">
Copyright © 2023 - All right reserved by Magneum Industries Ltd
</p>
</div>
</footer>
</>
);
}
