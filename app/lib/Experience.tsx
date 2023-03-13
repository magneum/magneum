import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function Experience({}: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-neutral-800 p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="h-32 w-32 rounded-full xl:w-[200px] object-cover object-center"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/Spotify.gif"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1">magneum</p>
        <div className="flex space-x-2 my-2">
          <Image
            alt="blob"
            height={400}
            width={400}
            className="h-10 w-10 rounded-full"
            src="/Spotify.gif"
          ></Image>
          <Image
            alt="blob"
            height={400}
            width={400}
            className="h-10 w-10 rounded-full"
            src="/Spotify.gif"
          ></Image>
          <Image
            alt="blob"
            height={400}
            width={400}
            className="h-10 w-10 rounded-full"
            src="/Spotify.gif"
          ></Image>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work.. Ended Work...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Ad duis eu occaecat dolor.</li>
          <li>Magna eiusmod esse qui eiusmod.</li>
          <li>Do labore proident est quis.</li>
          <li>Tempor minim esse proident.</li>
          <li>In nisi do laboris dolor.</li>
        </ul>
      </div>
    </article>
  );
}

export default Experience;
