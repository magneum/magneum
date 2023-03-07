import Craft from "./baseCraft";
import Cards from "./baseCards";

export default function Home() {
return (
<div>
<header className="h-screen bg-neutral-900">
<div
className="hero h-screen"
style={{ backgroundImage: `url("/bg-space.gif")` }}
>
<div className="hero-overlay bg-opacity-70"></div>
<div className="hero-content text-center uppercase">
<div className="font-mono">
<div className="ring-1 ring-lime-600/50 relative rounded-lg ml-4 mr-4 mb-4 py-1 pb-2 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-lime-600 font-bold">
made with <span className="animate-ping">💚</span> using nextjs
+ tailwindcss
</div>
<h1 className="mb-5 text-5xl font-bold ">
<span className="animate-pulse hover:animate-pulse hover:text-lime-900/70 text-lime-400/50">experience </span>
<span className="hover:animate-pulse hover:text-lime-900/70">is </span>
<span className="hover:animate-pulse hover:text-lime-900/70">the </span>
<span className="hover:animate-pulse hover:text-lime-900/70">name </span>
<span className="hover:animate-pulse hover:text-lime-900/70">everyone </span>
<span className="hover:animate-pulse hover:text-lime-900/70">gives </span>
<span className="hover:animate-pulse hover:text-lime-900/70">to </span>
<span className="hover:animate-pulse hover:text-lime-900/70">their </span>
<span className="animate-pulse hover:animate-pulse hover:text-lime-900/70 text-lime-400/50">mistakes. </span>
</h1>
<div className="flex items-center justify-center text-7xl rotate-180">
<Craft />
</div>
</div>
</div>
</div>
</header>
<section id="Cards">
<hr className="h-1 bg-neutral-600/60 border-0" />
<Cards />
</section>
</div>
);
}
