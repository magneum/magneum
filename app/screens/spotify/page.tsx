"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useTypewriter as Typewriter } from "react-simple-typewriter";

type Props = {};
function SPOTIFY({}: Props) {
function getAudio(audio: any, title: any) {
return `https://me3l9y-3003.preview.csb.app/spotify?url=${audio}&title=${title}`;
}
const router = useRouter();
var userInput: any = useRef();
var [isLoading, setLoading] = useState(false);
var [isSearchData, setSearchData] = useState<any>();

var handleSubmit = async (event: any) => {
setLoading(true);
event.preventDefault();
if (userInput.current.value.includes("https://open.spotify.com/track")) {
var crons = await axios.get(`/api/spotmeta?q=${userInput.current.value}`);
if (!crons) {
router.push("/router/Spotify_dead");
setLoading(false);
} else {
setSearchData(crons.data);
setLoading(false);
}
} else {
router.push("/router/Spotify_null");
setLoading(false);
}
};

var [Lines] = Typewriter({
words: ["Spotify +", "Spotify Audio"],
delaySpeed: 2000,
loop: true,
});

var [Lines_] = Typewriter({
words: ["Youtube + Spotify Fremium downloder"],
delaySpeed: 1000,
loop: true,
});
return (
<div>
<section id="Hero" className="bg-[#121112] text-white h-screen">
<div className="items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
<div className="flex w-full mx-auto text-left">
<div className="inline-flex items-center mx-auto align-middle">
<div className="text-center">
<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<h1 className="mt-40 max-w-5xl text-4xl font-bold font-serif leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-900 to-blue-600">
bit.ly/premiumdl
</h1>
</motion.div>
<h1 className="pt-2 max-w-5xl text-xl font-bold leading-none tracking-tighter md:text-2xl lg:text-3xl xl:text-4xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-900 to-blue-600">
<br className="hidden lg:block"></br>☉ {Lines_}
</h1>
<p className="max-w-xl mx-auto mt-8 text-base tracking-wider leading-relaxed text-gray-500 italic">
- PREMIUMDL allows you to convert & download video and audio
from YouTube, Spotify in HD quality. Available formats are
.webm .mp4
<br></br>- You can easily download for free thousands of
videos from YouTube and other websites.<br></br>- Once the
required video url or song name is provided, all the meta
informations are shown in the page.
</p>
</div>
</div>
</div>
<section id="intro">
<div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
<Image
width={100}
height={100}
className="object-cover object-center w-full h-60 rounded-xl cursor-none"
alt="hero"
src="/Sound.gif"
/>
</div>
</section>
</div>
</section>
{isSearchData ? (
<section className="h-full items-center w-full px-5 py-12 justify-center flex bg-gradient-to-tl bg-[#1c1b1b]">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 lg:grid-cols-2">
<div className="lg:pr-10">
<h5 className="mb-8 text-2xl font-semibold italic leading-none">
<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-500">
☉ {Lines}
</h1>
</motion.div>
<p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
Spotify is a proprietary Swedish audio streaming and media
services provider founded on 23 April 2006 by Daniel Ek and
Martin Lorentzon. It is one of the largest music streaming
service providers, with over 489 million monthly active
users, including 205 million paying subscribers, as of
December 2022.
</p>
</h5>
<hr className=" border-lime-800 border-2 rounded-2xl" />

<div className="flex space-x-2 sm:space-x-4 pt-2">
👭🏻
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-500">
Title:{" "}
<span className="text-white/50 text-sm italic font-medium">
{isSearchData._title}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
⏳
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-500">
Duration:{" "}
<span className="text-white/50 text-sm italic font-medium">
{isSearchData._duration} seconds
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
🖊️
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-500">
Artist:{" "}
<span className="text-white/50 text-sm italic font-medium">
{isSearchData._artist}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
🔗
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-500">
Link:{" "}
<span className="text-white/50 text-sm italic font-medium">
{isSearchData._link}
</span>
</p>
</div>
</div>

<br></br>
<span className="label-text-alt font-bold text-yellow-400">
⚠️ Download time depends on video length and quality.
</span>
<br></br>
<div className="navbar">
<div className="navbar-start">
<div className="dropdown pr-2">
<label
tabIndex={0}
className="btn btn-ghost btn-wide bg-lime-900 animate-pulse text-xl"
>
🎵
</label>
<ul
tabIndex={0}
className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-lime-800/50"
>
<li tabIndex={0}>
<a
className="italic"
href={getAudio(
isSearchData._url,
isSearchData._title
)}
>
best available
</a>
</li>
</ul>
</div>
<br></br>
</div>
</div>
</div>
<div>
<Image
width={100}
height={100}
className="object-cover w-full h-56 rounded-xl sm:h-96 mt-10"
src={isSearchData._thumbnail}
alt=""
/>
</div>
</div>
</div>
</section>
) : (
<section className="h-full items-center w-full px-5 py-12 justify-center flex bg-gradient-to-tl bg-[#1c1b1b]">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 lg:grid-cols-2">
<div className="lg:pr-10">
<h5 className="mb-4 text-2xl font-semibold italic leading-none">
<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
☉ {Lines}
</h1>
</motion.div>
<p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
Spotify is a proprietary Swedish audio streaming and media
services provider founded on 23 April 2006 by Daniel Ek and
Martin Lorentzon. It is one of the largest music streaming
service providers, with over 489 million monthly active
users, including 205 million paying subscribers, as of
December 2022.
</p>
</h5>

<hr className="border-yellow-400" />
<label className="label">
<span className="label-text font-semibold">Spotify Url</span>
<span className="label-text-alt font-bold text-yellow-400">
⚠️ required
</span>
</label>

<form onSubmit={handleSubmit}>
<input
required
type="text"
ref={userInput}
id="hero-field"
name="hero-field"
placeholder="required"
className="w-full rounded bg-stone-900 focus:ring-2 focus:ring-neutral-600 focus:bg-transparent focus:border-lime-500 text-base outline-none text-gray-100 px-2 transition-colors duration-200 ease-in-out"
></input>

{isLoading ? (
<button
type="button"
className="mt-2 bg-stone-800 inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-yellow-400 transition duration-150 ease-in-out rounded-md shadow cursor-not-allowed border border-yellow-700"
disabled
>
<svg
className="w-5 h-5 mr-3 -ml-1 text-yellow-500 animate-spin"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
>
<circle
className="opacity-25"
cx="12"
cy="12"
r="10"
stroke="currentColor"
strokeWidth="4"
></circle>
<path
className="opacity-75"
fill="currentColor"
d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
></path>
</svg>
<span className="label-text-alt text-yellow-500 text-xs">
💡 Be patient!{" "}
<span className="italic">
Good things need time to happen.
</span>
</span>
</button>
) : (
<div>
<button
type="submit"
className="mt-2 inline-flex text-white bg-neutral-600 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 rounded text-lg"
>
Search
</button>
<Link href="/screens/premiumdl">
<button className="ml-2 mt-2 inline-flex text-white bg-neutral-600 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 rounded text-lg">
Back
</button>
</Link>
</div>
)}
</form>
</div>
<div>
<Image
width={100}
height={100}
className="object-cover w-full h-56 rounded sm:h-96 hue-rotate-90"
src="/geomat.gif"
alt=""
/>
</div>
</div>
</div>
</section>
)}
</div>
);
}

export default SPOTIFY;
