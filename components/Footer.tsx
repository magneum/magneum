import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import React, { useEffect, useRef, useState } from "react";
type Props = {};

function Footer({}: Props) {
var [Lines] = useTypewriter({
words: ["@magneum"],
delaySpeed: 1000,
loop: true,
});
return (
<footer className="bg-[#121112]" aria-labelledby="footer-heading">
<div className="px-4 py-12 max-w-full bg-neutral-900 sm:px-6 lg:px-16 rounded-lg">
<div className="flex flex-wrap items-baseline lg:justify-center">
<span className="mt-2 text-sm font-bold text-gray-500">
Copyright &copy; 2020 - {new Date().getFullYear()}
<a
href="https://bit.ly/magneum"
className="mx-2 text-gray-200 hover:text-lime-800"
rel="noopener noreferrer"
>
( {Lines} )
</a>
under MIT License
</span>
</div>
</div>
</footer>
);
}

export default Footer;
