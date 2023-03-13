"use client";
import axios from "axios";
import Image from "next/image";
import Header from "@/pages/navigator";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useTypewriter as Typewriter } from "react-simple-typewriter";

type Props = {};

function ANIMEHUB({}: Props) {
  const router = useRouter();
  var userInput: any = useRef();
  var [isLoading, setLoading] = useState(false);
  var [isSearchData, setSearchData] = useState<any>();

  var handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    var crons = await axios.get(`/api/anime?q=${userInput.current.value}`);
    setSearchData(crons.data);
    setLoading(false);
  };

  var [Lines] = Typewriter({
    words: ["Anime Searcher", "Metainfo Scrap"],
    delaySpeed: 1000,
    loop: true,
  });

  return (
    <div className="bg-[#131313]">
      <Header />
      <section>
        <div className="items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="font-serif max-w-5xl text-4xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-yellow-400">
                    Anime Hub
                  </h1>
                </motion.div>
                <h1 className="pt-2 max-w-5xl text-xl font-bold leading-none tracking-tighter md:text-2xl lg:text-3xl xl:text-4xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-yellow-400">
                  <br className="hidden lg:block"></br>☉ {Lines}
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base tracking-wider leading-relaxed text-gray-500 italic">
                  Anime is hand-drawn and computer-generated animation
                  originating from Japan.<br></br>
                  Outside of Japan and in English, anime refers specifically to
                  animation produced in Japan.<br></br>
                  However, in Japan and in Japanese, anime describes all
                  animated works, regardless of style or origin.
                </p>
              </div>
            </div>
          </div>
          <section id="intro">
            <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
              <Image
                alt="hero"
                width={900}
                height={900}
                src="/anime.gif"
                className="object-cover object-center w-full rounded-xl"
              />
            </div>
          </section>
        </div>
      </section>
      <div className="divider text-sky-900 text-2xl"> ☉ </div>
      {isSearchData ? (
        <section className="bg-[#232323]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="font-serif not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500 mb-4">
                    ☉ {Lines}
                  </h1>
                </motion.div>
                <hr className="border-amber-400 text-lg roundd-full mb-8" />

                <div className="flex space-x-2 sm:space-x-4 pt-2 pb-4">
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500 uppercase">
                      Title:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.meta.title} ||{" "}
                        {isSearchData.meta.jp_title} ||{" "}
                        {isSearchData.meta.en_title}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="mb-4 sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500 uppercase">
                  synopsis:{" "}
                  <span className="text-white/50 text-sm italic font-medium lowercase text-gray-300">
                    {isSearchData.meta.synopsis}
                  </span>
                </p>
                <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      premiered
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.premiered}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      webpage
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.webpage}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      broadcast
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.broadcast}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      genres
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.genres}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      type
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.type}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      episodes
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.episodes}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      rating
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.rating}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      aired
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.aired}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      score
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.score}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      scores
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.scores}
                    </p>
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      favourites
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.favourites}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      rank
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.rank}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      duration
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.duration}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      studios
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.studios}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      producers
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.producers}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      popularity
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.popularity}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      members
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.members}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      source
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.source}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      synonyms
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.synonyms}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      characters
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.characters}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5 text-amber-400 uppercase">
                      staffs
                    </h6>
                    <p className="text-sm text-gray-300 italic">
                      {isSearchData.meta.scores}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  width={900}
                  height={900}
                  className="object-cover w-full h-56 rounded shadow-2xl shadow-black sm:h-96"
                  src={isSearchData.meta.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="h-full items-center w-full px-5 py-12 justify-center flex bg-gradient-to-tl bg-[#232323]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="lg:pr-10">
                <h5 className="mb-4 text-2xl font-semibold italic leading-none">
                  <motion.div
                    initial={{ x: 200, opacity: 0, scale: 1 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="font-serif not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                      ☉ {Lines}
                    </h1>
                  </motion.div>
                  <p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
                    Anime is hand-drawn and computer-generated animation
                    originating from Japan.Outside of Japan and in English,
                    anime refers specifically to animation produced in
                    Japan.However, in Japan and in Japanese, anime describes all
                    animated works, regardless of style or origin.
                  </p>
                </h5>

                <form onSubmit={handleSubmit}>
                  <input
                    required
                    type="text"
                    id="hero-field"
                    ref={userInput}
                    name="hero-field"
                    placeholder="required"
                    className="w-full rounded bg-stone-900 focus:ring-2 focus:ring-neutral-600 focus:bg-transparent focus:border-amber-500 text-base outline-none text-gray-100 px-2 transition-colors duration-200 ease-in-out"
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
                    <button
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="flex items-center rounded bg-amber-400 px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg mt-4"
                    >
                      Search
                    </button>
                  )}
                </form>
                <hr className="border-amber-400 text-lg roundd-full" />
              </div>
              <div>
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/landscape.gif"
                  className="object-cover w-full h-56 rounded-xl sm:h-96 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ANIMEHUB;
