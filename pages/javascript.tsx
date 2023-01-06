import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function javascript() {
  return (
    <>
      <Head>
        <title>Xhadr Ui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-gradient-to-tr from-yellow-700 via-stone-800 to-blue-900 text-blue-100">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl font-serif">
              Rapidly build modern projects with<br></br>
              <span className="text-blue-400">Xhadr-Api</span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg font-mono">
              A <span className="text-blue-400"> Next-js </span> based
              <span className="text-blue-400"> RESTFul Api </span>
              <i className="text-xs">(representational state transfer)</i>
            </p>
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div className="animate-pulse relative overflow-hidden rounded-lg-b-lg py-1.5 px-4 text-sm leading-6 ring-1 ring-blue-600 hover:ring-blue-500">
                <span className="text-yellow-600 font-bold">
                  Designed & Developed by Xhadr
                </span>
              </div>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "#18337C",
              height: 8,
              borderColor: "#FF9900",
            }}
          />
        </section>
        <section className="bg-amber-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hover:scale-105">
            <div className="flex flex-col max-w-screen-lg overflow-hidden border-gray-900 border-4 bg-white rounded-lg shadow-2xl shadow-blue-600 hover:shadow-blue-400 lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <Image
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                  src="/Typescript_Choice.png"
                  alt="blob"
                  width={720}
                  height={720}
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-blue-900">
                  Start Using Xhadr-Api using @Types
                </h5>
                <p className="mb-5 text-gray-800">
                  <span className="font-bold text-blue-700">TYPESCRIPT</span> is
                  a free and open source programming language developed and
                  maintained by Microsoft. It is a strict syntactical superset
                  of JavaScript and adds optional static typing to the language.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/typescript"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-deep-purple-800"
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-neutral-800 hover:bg-blue-400 hover:text-slate-100 focus:shadow-outline focus:outline-none"
                    >
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "#222327",
              height: 4,
            }}
          />
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hover:scale-105">
            <div className="flex flex-col max-w-screen-lg overflow-hidden border-gray-900 border-4 bg-white rounded-lg shadow-2xl shadow-yellow-600 hover:shadow-yellow-400 lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <Image
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                  src="/Javascript_Choice.png"
                  alt="blob"
                  width={720}
                  height={720}
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-yellow-900">
                  Start Using Xhadr-Api using Vanilla Js
                </h5>
                <p className="mb-5 text-gray-800">
                  <span className="font-bold text-yellow-700">JAVASCRIPT</span>{" "}
                  is a scripting language that enables you to create dynamically
                  updating content, control multimedia, animate images, and
                  pretty much everything else.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/javascript"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-deep-purple-800"
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-neutral-800 hover:bg-yellow-400 hover:text-slate-900 focus:shadow-outline focus:outline-none"
                    >
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}