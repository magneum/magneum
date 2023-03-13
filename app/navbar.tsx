import React from "react";

type Props = {};
function navbar({}: Props) {
  return (
    <section className="sticky z-40 top-0 p-6 navbar backdrop-blur-3xl shadow-2xl shadow-stone-900">
      <div className="flex uppercase tracking-widest font-thin font-serif">
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          M
        </span>
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          A
        </span>
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          G
        </span>
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          N
        </span>
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          E
        </span>
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          U
        </span>
        <span className="animate-pulse text-gray-300/40 hover:text-gray-300 hover:animate-bounce text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          M
        </span>
      </div>
    </section>
  );
}

export default navbar;

{
  /* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
<h2 className="mb-6 font-bold tracking-wide text-purple-400/70 capitalize text-4xl md:text-5xl lg:text-6xl xl:text-7xl  sm:leading-none">
Head Over To Different Orbits.
</h2>
<p className="mb-6 text-base font-thin text-gray-400/70 md:text-lg md:text-center lg:text-center xl:text-center capitalize italic">
Dive into the galaxy of unknowns and discover new skills.
<br></br>Some interesting some weird.<br></br>
</p>
</div>
</div>
<div className="items-center justify-center text-xl">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-1 lg:py-20">
<div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/github.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://github.com/magneum"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/Sound.gif"
alt=""
className="object-cover w-full h-64 contrast-90"
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/premiumdl"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/server.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/magneumapi"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/node.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://www.npmjs.com/settings/magneum/packages"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/vlkyre.png"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://vlkyre.up.railway.app/vlkyre"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
aria-label="Category"
title="traveling"
>
traveling
</a>
<span className="text-gray-600">— 🦇</span>
</p>
<a
href="https://vlkyre.up.railway.app/vlkyre"
aria-label="Category"
title="Visit the East"
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
href="https://vlkyre.up.railway.app/vlkyre"
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/YouTube.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/anime.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="/screens/animehub"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>

<div className="overflow-hidden transition-shadow duration-300 bg-[#282828] rounded-2xl shadow-2xl">
<Image
width={600}
height={600}
src="/projects/Docker.gif"
className="object-cover w-full h-64"
alt=""
/>
<div className="p-5">
<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
<a
href="https://hub.docker.com/repositories/magneum"
className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
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
className="inline-block mb-3 text-2xl font-semibold leading-5 transition-colors duration-200 text-purple-500/70 uppercase font-serif"
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
className="box-border z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-medium text-white text-sm tracking-widest transition-all duration-300 bg-purple-800 rounded-md cursor-pointer group shadow-xl shadow-purple-900 ease focus:outline-none hover:bg-purple-900"
>
<span className="mr-2">% </span>
Lauch
</a>
</div>
</div>
</div>
</div>
</div> */
}
