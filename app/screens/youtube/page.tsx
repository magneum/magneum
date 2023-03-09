"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useTypewriter as Typewriter } from "react-simple-typewriter";

type Props = {};
function YOUTUBE({}: Props) {
  const router = useRouter();
  var userInput: any = useRef();
  var [isLoading, setLoading] = useState(false);
  var [isTinyData, setTinyData] = useState<any>();
  var [isSearchData, setSearchData] = useState<any>();

  function getAudio(audio: any, title: any) {
    return `https://me3l9y-3003.preview.csb.app/audio?audio=${audio}&title=${title}`;
  }
  function getVideo(audio: any, title: any, video: any) {
    return `https://me3l9y-3003.preview.csb.app/video?video=${video}&audio=${audio}&title=${title}`;
  }

  var handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    var crons = await axios.get(`/api/youtube_sr?q=${userInput.current.value}`);
    if (!crons) {
      router.push("/router/YouTube_null/serYerr");
      setLoading(false);
    } else setSearchData(crons.data);
    setLoading(false);
  };

  var handleConversion = async (event: any, url: any) => {
    setLoading(true);
    event.preventDefault();
    var crons = await axios.get(
      `https://me3l9y-3003.preview.csb.app/metadata?q=${url}`
    );
    if (!crons) {
      router.push("/router/YouTube_null/serYerr");
      setLoading(false);
    } else setTinyData(crons.data);
    setLoading(false);
  };

  var [Lines] = Typewriter({
    words: ["YouTube +", "YouTube Audio", "YouTube Video"],
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
      <hr className="h-1 bg-yellow-900/50 border-0" />
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
                    <h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      ☉ {Lines}
                    </h1>
                  </motion.div>
                </h5>
                <hr className=" border-orange-800 border-2 rounded-2xl" />
                <p className="mb-6 mt-1 max-w-xl mx-auto font-medium tracking-wider leading-relaxed text-gray-400 italic text-sm">
                  <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                    Description:{" "}
                  </span>{" "}
                  {isSearchData.youtube_search[0].DESCRIPTION.toLowerCase()}
                  <hr className=" border-orange-700/30" />
                </p>

                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  👭🏻
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      Title:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].TITLE}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  👭🏻
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      Video Id:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].YT_ID}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  👀
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      Views:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].VIEWS}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  🗓️
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      upload Date:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].UPLOADED}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  ⏳
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      Duration:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].DURATION_FULL}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  🖊️
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      Author:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].AUTHOR_NAME}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-4 pt-2">
                  🔗
                  <div className="space-y-0">
                    <p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      Link:{" "}
                      <span className="text-white/50 text-sm italic font-medium">
                        {isSearchData.youtube_search[0].LINK}
                      </span>
                    </p>
                  </div>
                </div>

                <br></br>
                <span className="label-text-alt font-bold text-yellow-400">
                  ⚠️ Download time depends on video length and quality.
                </span>
                <br></br>

                {isTinyData ? (
                  <div className="navbar">
                    <div className="navbar-start">
                      <div className="dropdown pr-2">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost bg-orange-900 animate-pulse text-xl"
                        >
                          🎵
                        </label>
                        <ul
                          tabIndex={0}
                          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-orange-800/50"
                        >
                          <li tabIndex={0}>
                            <a
                              className="italic"
                              href={getAudio(
                                isTinyData._audio,
                                isSearchData.youtube_search[0].TITLE
                              )}
                            >
                              best available
                            </a>
                          </li>
                        </ul>
                      </div>
                      <br></br>

                      <div className="dropdown pr-3">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost bg-orange-900 animate-pulse text-xl"
                        >
                          📷
                        </label>
                        <ul
                          tabIndex={0}
                          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-orange-800/50"
                        >
                          <li tabIndex={0}>
                            {isTinyData._video._1080p !== undefined ? (
                              <a
                                className="italic"
                                href={getVideo(
                                  isTinyData._audio,
                                  isSearchData.youtube_search[0].TITLE,
                                  isTinyData._video._1080p
                                )}
                              >
                                1080p
                              </a>
                            ) : (
                              <a className="italic text-red-800">
                                (null) 1080p{" "}
                              </a>
                            )}

                            {isTinyData._video._720p !== undefined ? (
                              <a
                                className="italic"
                                href={getVideo(
                                  isTinyData._audio,
                                  isSearchData.youtube_search[0].TITLE,
                                  isTinyData._video._720p
                                )}
                              >
                                720p
                              </a>
                            ) : (
                              <a className="italic text-red-800">
                                (null) 720p{" "}
                              </a>
                            )}

                            {isTinyData._video._480p !== undefined ? (
                              <a
                                className="italic"
                                href={getVideo(
                                  isTinyData._audio,
                                  isSearchData.youtube_search[0].TITLE,
                                  isTinyData._video._480p
                                )}
                              >
                                480p
                              </a>
                            ) : (
                              <a className="italic text-red-800">
                                (null) 480p{" "}
                              </a>
                            )}

                            {isTinyData._video._360p !== undefined ? (
                              <a
                                className="italic"
                                href={getVideo(
                                  isTinyData._audio,
                                  isSearchData.youtube_search[0].TITLE,
                                  isTinyData._video._360p
                                )}
                              >
                                360p
                              </a>
                            ) : (
                              <a className="italic text-red-800">
                                (null) 360p{" "}
                              </a>
                            )}

                            {isTinyData._video._240p !== undefined ? (
                              <a
                                className="italic"
                                href={getVideo(
                                  isTinyData._audio,
                                  isSearchData.youtube_search[0].TITLE,
                                  isTinyData._video._240p
                                )}
                              >
                                240p
                              </a>
                            ) : (
                              <a className="italic text-red-800">
                                (null) 240p{" "}
                              </a>
                            )}

                            {isTinyData._video._144p !== undefined ? (
                              <a
                                className="italic"
                                href={getVideo(
                                  isTinyData._audio,
                                  isSearchData.youtube_search[0].TITLE,
                                  isTinyData._video._144p
                                )}
                              >
                                144p
                              </a>
                            ) : (
                              <a className="italic text-red-800">
                                (null) 144p{" "}
                              </a>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={(e) =>
                      handleConversion(e, isSearchData.youtube_search[0].LINK)
                    }
                    className="flex items-center rounded bg-orange-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg mt-4"
                  >
                    {isLoading && isTinyData ? null : "Start Conversion"}
                  </button>
                )}
              </div>
              <div>
                <Image
                  width={900}
                  height={900}
                  className="object-cover w-full h-56 rounded-xl sm:h-96 mt-10"
                  src={isSearchData.youtube_search[0].THUMB}
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
                    <h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                      ☉ {Lines}
                    </h1>
                  </motion.div>
                  <p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
                    YouTube is a global online video sharing and social media
                    platform headquartered in San Bruno, California. It was
                    launched on February 14, 2005, by Steve Chen, Chad Hurley,
                    and Jawed Karim. It is owned by Google, and is the second
                    most visited website, after Google Search.
                  </p>
                </h5>

                <hr className="border-yellow-400" />
                <label className="label">
                  <span className="label-text font-semibold">
                    YouTube Link or Song Name!
                  </span>
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
                    className="w-full rounded bg-stone-900 focus:ring-2 focus:ring-neutral-600 focus:bg-transparent focus:border-orange-500 text-base outline-none text-gray-100 px-2 transition-colors duration-200 ease-in-out"
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
                  className="object-cover w-full h-56 rounded sm:h-96"
                  src="/geomat.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      )}
      <hr className="h-1 bg-yellow-900/50 border-0" />
    </div>
  );
}

export default YOUTUBE;
