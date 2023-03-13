"use client";
type Props = {};
import React from "react";
import { motion } from "framer-motion";

const About = (props: Props) => {
  return (
    <motion.div className="h-screen flex flex-col text-center m:text-left md:flex-row relative max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        About Me
      </h3>
      <motion.img
        className="-mb-20 m:mb-0 flex-shrink-0 w-56 h-56 rounded-full shadow-2xl shadow-black object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] mt-6"
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        initial={{
          x: -200,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        src="/magneum_me.png"
      />

      <motion.div
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        initial={{
          x: 200,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        className="space-y-6 px-0 md:px-10"
      >
        <h5 className="text-4xl font-semibold capitalize">
          Here is a
          <motion.span className="text-[#ff5e5e]/80"> Little </motion.span>
          background
        </h5>
        <p className="text-md pb-6">
          I am a Self Taught developer, skilled in both Frontend & Backend
          (fullstack) including M.E.R.N. Stack.Created my own Portfolio and
          multiple webpages with varieties of RESTful-APIs. Currently working on
          Social Media BOTs - Telegram, Discord, Whatsapp, Twitter. Use Heroku,
          Vercel, Koyeb, Render, Railway.app, GitHub, GitPod, Replit,
          CodeSandBox as my daily deployment and hosting. Frequently used
          frameworks - Nextjs, Reactjs, TailwindCss, Prismadb (any kind of
          Database- ORM). Also working on two client projects (websites) -
          Recipies, Medical. Compose music using FL Studio and love to play
          Percussion instruments and Guitar. Learning Data Structures and
          Algorithms using C++, JAVA, Javascript and Python.
        </p>
        <button className="inline-flex items-center px-4 py-2 bg-stone-400 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <a href="/(Resume_Cv)-Shovit-Dutta.pdf">Download CV</a>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default About;
