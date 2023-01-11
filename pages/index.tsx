import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const TryApi = dynamic(() => import("../components/TryApi"));
const NavHome = dynamic(() => import("../components/NavHome"));
const NavFetch = dynamic(() => import("../components/NavFetch"));

export default function javascript() {
  return (
    <>
      <Head>
        <title>Magneum Ui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-serif">
        <header className="font-serif text-orange-100 body-font">
          <div className="relative">
            <Image
              src="/anime_orange.jpg"
              className="absolute inset-0 object-cover w-full h-full blur-xl"
              alt="content"
              width={1270}
              height={720}
            />
            <div className="relative bg-stone-900 bg-opacity-75">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                  <h1 className="mb-5 font-bold tracking-tight text-orange-100 text-4xl sm:leading-none justify-center">
                    When you have a dream, <br className="hidden md:block" />
                    you have got to{" "}
                    <span className="inline-block text-orange-500">
                      grab
                    </span>{" "}
                    it and
                    <span className="inline-block text-orange-500">
                      never{" "}
                    </span>{" "}
                    let go.
                  </h1>
                  <p className="lg:w-2/3 text-orange-100">
                    ✧ Hi, I am{" "}
                    <span className="inline-block text-orange-500 font-bold">
                      Magneum (▀͜͞ʖ▀) ▄︻̷̿┻̿═━━ ~~
                    </span>
                    <br></br>✧ A Front/Back-end self-taught developer.
                    <br></br>✧ Have been developing Whatsapp,Telegram,Discord
                    bots since 2k21.
                    <br></br>✧ Below you can find all my work including{" "}
                    <span className="inline-block text-orange-500">
                      Magneum-Api
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <hr
          className="blur animate-pulse"
          style={{
            backgroundColor: "#FF7300 ",
            height: 4,
          }}
        />
        <section className="text-orange-600 body-font bg-gradient-to-br from-[#202020] via-[#1f1414] to-[#141414] backdrop-blur-2xl">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-orange-500 font-bold title-font text-2xl mb-2 sm:mb-0">
                  Lets head over to different places:
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
                <div className="h-1 bg-orange-100 rounded overflow-hidden">
                  <div className="w-24 h-full bg-orange-600"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105">
                  <Image
                    alt="content"
                    width={500}
                    height={500}
                    className="object-cover object-center h-full w-full"
                    src="/github.jpeg"
                  ></Image>
                </div>
                <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                  🛵Github.com/magneum
                </h2>
                <p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
                  GitHub, Inc. is an Internet hosting service for software
                  development and version control using Git. It provides the
                  distributed version control of Git plus access control, bug
                  tracking, software feature requests, task management,
                  continuous integration, and wikis for every project.
                </p>
                <br></br>
                <div className="flex justify-start">
                  <Link href="https://github.com/magneum">
                    <button className="inline-flex text-orange-200 bg-stone-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded-lg text-lg  hover:text-orange-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 contrast-125">
                  <Image
                    alt="content"
                    width={500}
                    height={500}
                    className="object-cover object-center h-full w-full"
                    src="/api.jpg"
                  ></Image>
                </div>
                <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                  🛰️ Magneum-Api
                </h2>
                <p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
                  With Magneum you can fetch different types of informations
                  without needing to install any dependencies or worrying about
                  servers or configurations.
                </p>
                <br></br>
                <div className="flex justify-start">
                  <Link href="/application">
                    <button className="inline-flex text-orange-200 bg-stone-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded-lg text-lg  hover:text-orange-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105">
                  <Image
                    alt="content"
                    width={500}
                    height={500}
                    className="object-cover object-center h-full w-full"
                    src="/node.png"
                  ></Image>
                </div>
                <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                  🔥 My Node-pkg Page
                </h2>
                <p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
                  NPM is the worlds largest software registry.<br></br>
                  Open source developers from every continent use npm to share
                  and borrow packages,and many organizations use npm to manage
                  private development as well.
                </p>
                <br></br>
                <div className="flex justify-start">
                  <Link href="https://www.npmjs.com/settings/xhadr/packages">
                    <button className="inline-flex text-orange-200 bg-stone-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded-lg text-lg  hover:text-orange-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105">
                  <Image
                    alt="content"
                    width={500}
                    height={500}
                    className="object-cover object-center h-full w-full"
                    src="/vlkyre.png"
                  ></Image>
                </div>
                <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                  🦇 Vlkyre Home Page
                </h2>
                <p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
                  Vlkyre is a whatsapp bot with automation, moderation, music,
                  games and 200+ commands! You can easily deploy your own vlkyre
                  by using npm. To Find Out What Vlkyre Offers, Join Any Vlkyre
                  Official Groups in vlkyre-home-page.
                </p>
                <br></br>{" "}
                <div className="flex justify-start">
                  <Link href="https://vlkyre.up.railway.app/vlkyre.html">
                    <button className="inline-flex text-orange-200 bg-stone-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded-lg text-lg  hover:text-orange-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>{" "}
      <hr
        className="blur animate-pulse"
        style={{
          backgroundColor: "#FF7300 ",
          height: 4,
        }}
      />
      <footer className="footer footer-center p-10 bg-zinc-900 text-base-content rounded">
        <div>
          <p className="font-bold italic text-slate-400">
            Copyright © 2023 - All right reserved by Magneum Industries Ltd
          </p>
        </div>
      </footer>
    </>
  );
}
