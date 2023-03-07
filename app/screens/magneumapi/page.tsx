import React from "react";
import Link from "next/link";
import Image from "next/image";
import SFW from "../../../pages/examples/SFW";
import Nsfw from "../../../pages/examples/Nsfw";
import Manga from "../../../pages/examples/Manga";
import Anime from "../../../pages/examples/Anime";
import Hentai from "../../../pages/examples/Hentai";
import Shorten from "../../../pages/examples/Shorten";
import Emotions from "../../../pages/examples/Emotions";
import Unsplash from "../../../pages/examples/Unsplash";
import Pinterest from "../../../pages/examples/Pinterest";
import Wallpaper from "../../../pages/examples/Wallpaper";
import Youtube_sr from "../../../pages/examples/Youtube_sr";
import Youtube_dl from "../../../pages/examples/Youtube_dl";
import Text2Speech from "../../../pages/examples/Text2Speech";
import OngoingAnime from "../../../pages/examples/OngoingAnime";

type Props = {};

const MAGNEUMAPI = (props: Props) => {
return (
<div>
<section className="backdrop-blur-3xl bg-gradient-to-tl from-stone-900 via-slate-900 to-black min-w-fit min-h-screen">
<div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
<div className="flex flex-col items-center max-w-2xl md:px-8">
<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
<div>
<p className="rounded-md btn-ghost font-bold inline-block px-3 py-px mb-4 text-xs text-teal-200 uppercase">
created with 💖 by magneum
</p>
</div>
<h1 className="text-4xl font-bold leading-none sm:text-5xl font-serif typewritter">
Rapidly build modern projects with <br></br>
<span className="text-cyan-400">
&lsquo; Magneum &rsquo;
</span>{" "}
<p className="mb-8 text-lg font-serif font-semibold italic">
A
<span className="text-cyan-400 hover:text-opacity-75">
<Link href="https://nextjs.org/"> Next-Js </Link>
</span>
based
<span className="text-cyan-400 hover:text-opacity-75">
<Link href="https://restfulapi.net/"> REST-api </Link>
</span>
<br></br>
<i className="text-xs">(representational state transfer)</i>
</p>
</h1>
</div>
<div className="flex flex-col justify-center">
<div className="pb-4 mb-4 border-b">
<h2 className="max-w-lg mb-6 font-semibold text-3xl font-serif leading-none tracking-tight sm:text-4xl md:mx-auto">
What is Magneum?
</h2>
<p className="text-1xl hover:text-cyan-600 text-justify font-serif">
<span className="text-cyan-400 font-semibold">With </span>
Magneum you can fetch different types of informations without
needing to install any dependencies or worrying about servers
or configurations.<br></br>
<span className="text-cyan-400 font-semibold">Just </span>
use any method to fetch the api endpoints and you will be
delighted with a perfect constructed object as a response from
that endpoint of choice.<br></br>
<span className="text-cyan-400 font-semibold">Magneum </span>
has many endpoints like animation, anime, hentai, youtube
music, youtube video, youtube search, nsfw and many more
upcoming.
</p>
</div>
</div>
</div>
<div className="blur-2xl text-teal-500 text-5xl animate-pulse text-left">
magneum
</div>
<Image
src="/magneum.png"
className="w-full max-w-screen-sm mx-auto rounded contrast-100 hover:scale-105 px-2 py-2 border-cyan-900 border hover:saturate-150 hover:shadow-cyan-600 shadow-cyan-900 shadow-2xl md:w-auto lg:max-w-screen-md"
alt="blob"
width={1080}
height={200}
/>
<div className="blur-2xl text-cyan-300 text-5xl animate-pulse text-left">
magneum
</div>
<div className="blur-3xl text-cyan-300 text-5xl animate-pulse text-right">
magneum
</div>
</div>
<div className="blur-3xl text-teal-300 text-5xl animate-pulse text-right">
magneum
</div>
</section>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#81D3CC ",
height: 4,
}}
/>
{/* ============================================================================================================== */}
<section className="bg-gradient-to-b from-black via-slate-900 to-slate-900 backdrop-blur-lg">
<div className="relative block w-full mx-auto md:mt-0">
<Image
alt="blob"
width={700}
height={700}
src="/Next_By_Vercel_White.png"
className="max-w-xs m-auto md:max-w-2xl animate-pulse"
></Image>
</div>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Manga
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/manga.jpg"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get all information about any manga from
myanimelist.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/manga?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/manga?q=death note<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Manga />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Emotions
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/Emotions.png"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available emotions endpoints to get .gif .png
& .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/emotions?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/emotions?q=smile<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
bite, bonk, bored, confused, cry, cuddle, dance,<br></br>
happy, highfive, hug, kick, kill, kiss, nervous, pat, poke,
punch, sad, scream<br></br>
slap, smile, stare, wave, wink, yeet, thinking
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Emotions />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Anime
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/anime.jpeg"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get all information about any anime.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/anime?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/anime?q=death note<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Anime />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/YouTube_Dl
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/youtube.jpg"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get youtube direct audio & video download
links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/youtube_dl?q=<br></br>
<span className="text-blue-500 font-semibold">
● example: /api/youtube_dl?q=
<span className="italic text-blue-300">
ncs music 5 minutes
</span>
&quality=1080p
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● example: /api/youtube_dl?q=
<span className="italic text-blue-300">
https://youtu.be/3gxus8LnMfI
</span>
&quality=1080p
</span>
<br></br>
<br></br>
<span className="italic text-blue-400 uppercase">
QUALITY:
</span>
<br></br>
&quality=<span className="italic text-blue-300">1080p</span>
<br></br>
&quality=<span className="italic text-blue-300">720p</span>
<br></br>
&quality=<span className="italic text-blue-300">480p</span>
<br></br>
&quality=<span className="italic text-blue-300">360p</span>
<br></br>
&quality=<span className="italic text-blue-300">240p</span>
<br></br>
(audio) &quality=
<span className="italic text-blue-300">128kbps</span>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Youtube_dl />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/YouTube_Sr
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/youtube.jpg"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get everything from youtube video meta
informations.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/youtube_sr?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/youtube_sr?q=ncs music 5 minutes<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/youtube_sr?q=https://youtu.be/3gxus8LnMfI<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Youtube_sr />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Pinterest
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/pinterest.png"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get high quality wallpapers from
pinterest.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/pinterest?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/pinterest?q=cat<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Pinterest />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/SFW
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/sfw.jpg"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available sfw endpoints to get .gif .mp4 .png
& .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/sfw?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/sfw?q=waifu<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
waifu, neko, shinobu, megumin, bully, cuddle, cry, hug,
awoo, kiss<br></br>
lick, pat, smug, bonk, yeet, blush, smile, wave, highfive,
nom, bite, glomp<br></br>
slap, kill, kick, happy, wink, poke, dance, cringe, handhold
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<SFW />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Shorten
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/shorten.png"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get a shortened url from tinyurl.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/shorten?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/shorten?q=https://google.com<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Shorten />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Text2Speech
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/t2s.png"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get speech url from google-api using
text.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/text2speech?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/text2speech?q=Hello. How are You?<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Text2Speech />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Unsplash
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/unsplash.webp"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get high resolution wallpapers from
unsplash.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/unsplash?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/unsplash?q=Tom and Jerry<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Unsplash />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Wallpaper
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/wallpaper.webp"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get high quality wallpapers.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/wallpaper?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/wallpaper?q=Asus Tuf<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Wallpaper />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/OngoingAnime
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/onanime.jpg"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get all latest on going anime.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/ongoinganime<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<OngoingAnime />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Hentai
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/adult.png"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available hentai endpoints to get .gif .png &
.jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/hentai?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/hentai?q=ass<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
ass, bdsm, blowjob, cum, doujin, feet, femdom, foxgirl,
hentai<br></br>
netorare, maid, masturbation, orgy, panties, pussy, school,
succubus,<br></br>
tentacles, thighs, uglyBastard, uniform, yuri<br></br>
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Hentai />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/NSFW
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/apim/adult.png"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available nsfw endpoints to get .gif .mp4 .png
& .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/nsfw?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/nsfw?q=nsfw<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
nsfw, nsfw2, bonermaterial, nsfw411, iwanttofuckher,
exxxtras, distension, bimbofetish, christiangirls,
dirtygaming<br></br>
sexybutnotporn, femalepov, omgbeckylookathiscock, sexygirls,
breedingmaterial, canthold, toocuteforporn, justhotwomen,
stripgirls, hotstuffnsfw, uncommonposes, gifsofremoval
<br></br>
nostalgiafapping, truefmk, nudes, 4k, realgirls, blowjobs,
milf, milk, milking, lactating, pussy, slut, cumslut
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Nsfw />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
</section>
</div>
);
};

export default MAGNEUMAPI;
