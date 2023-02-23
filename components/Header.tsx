import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  var [seconds, setSeconds] = useState(0);
  var _color = [
    "hue-rotate-15",
    "hue-rotate-30",
    "hue-rotate-60",
    "hue-rotate-90",
    "hue-rotate-180",
  ];
  var _colorI = _color[Math.floor(Math.random() * _color.length)];
  return (
    <header className="sticky top-0 p-5 flex items-center justify-center max-w-full mx-auto bg-neutral-900 rounded-t rounded-xl">
      {/* <Image
width={100}
height={100}
className={`h-14 w-full rounded-lg ${_colorI}`}
alt="hero"
src="/Sound.gif"
/> */}
      <motion.div
        initial={{ x: -200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.github.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.spotify.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}

export default Header;
