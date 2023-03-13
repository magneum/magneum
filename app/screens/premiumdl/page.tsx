"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/pages/navigator";
import { motion } from "framer-motion";
import { useTypewriter as Typewriter } from "react-simple-typewriter";
type Props = {};

function PREMIUMDL({}: Props) {
  var [youtLines] = Typewriter({
    words: ["YouTube +", "YouTube Audio", "YouTube Video"],
    delaySpeed: 1000,
    loop: true,
  });

  var [Lines_] = Typewriter({
    words: ["Youtube + Spotify Fremium downloder"],
    delaySpeed: 1000,
    loop: true,
  });

  var [spotLine] = Typewriter({
    words: ["Spotify +", "Spotify Audio"],
    delaySpeed: 1000,
    loop: true,
  });
  return (
    <div className="bg-neutral-900">
      <Header />
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
      <hr className="h-1 bg-yellow-900/50 border-0" />
      <section
        id="Showcase"
        className="h-full items-center w-full px-5 py-12 justify-center flex bg-gradient-to-tl bg-[#232323]"
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h5 className="mb-4 text-2xl font-semibold italic leading-none">
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
                    ☉ {youtLines}
                  </h1>
                </motion.div>
                <p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
                  YouTube is a global online video sharing and social media
                  platform headquartered in San Bruno, California. It was
                  launched on February 14, 2005, by Steve Chen, Chad Hurley, and
                  Jawed Karim. It is owned by Google, and is the second most
                  visited website, after Google Search.
                </p>
              </h5>
              <Link href="/screens/youtube">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="flex items-center rounded bg-stone-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-stone-800 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg mt-4"
                >
                  YouTube Converter
                </button>
              </Link>
              <hr className="border-yellow-100" />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="object-cover w-full h-56 rounded-xl sm:h-96 mt-1"
                src="/YouTube.gif"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h5 className="mb-4 text-2xl font-semibold italic leading-none">
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">
                    ☉ {spotLine}
                  </h1>
                </motion.div>
                <p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
                  Spotify is a proprietary Swedish audio streaming and media
                  services provider founded on 23 April 2006 by Daniel Ek and
                  Martin Lorentzon. It is one of the largest music streaming
                  service providers, with over 489 million monthly active users,
                  including 205 million paying subscribers, as of December 2022.
                </p>
              </h5>
              <Link href="/screens/spotify">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="flex items-center rounded bg-stone-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-stone-800 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg mt-4"
                >
                  Spotify Converter
                </button>
              </Link>
              <hr className="border-yellow-100" />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="object-cover w-full h-56 rounded-xl sm:h-96 mt-1"
                src="/Spotify.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="h-1 bg-yellow-900/50 border-0" />
    </div>
  );
}

export default PREMIUMDL;
