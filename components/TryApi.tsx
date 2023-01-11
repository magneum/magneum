import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function NavHome() {
  return (
    <div className="navbar rounded-xl bg-slate-900 border-stone-800 border hover:bg-stone-900 hover:border-cyan-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="cyan"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 rounded-box w-52"
          >
            <li tabIndex={0}>
              <a className="justify-between text-amber-400">
                api/animation
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-stone-900 text-amber-200">
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/animation?q=bite"
                    className="text-xs text-yellow-200"
                  >
                    ?q=bite
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/animation?q=confused"
                    className="text-xs text-yellow-200"
                  >
                    ?q=confused
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/animation?q=goodnight"
                    className="text-xs text-yellow-200"
                  >
                    ?q=goodnight
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/animation?q=happy"
                    className="text-xs text-yellow-200"
                  >
                    ?q=happy
                  </Link>
                </li>
              </ul>
            </li>
            {/* ================================================================================= */}
            <li tabIndex={0}>
              <a className="justify-between text-orange-400">
                api/hentai
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-stone-900 text-orange-200">
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/hentai?q=uniform"
                    className="text-xs text-orange-200"
                  >
                    ?q=uniform
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/hentai?q=ass"
                    className="text-xs text-orange-200"
                  >
                    ?q=ass
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/hentai?q=doujin"
                    className="text-xs text-orange-200"
                  >
                    ?q=doujin
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/hentai?q=femdom"
                    className="text-xs text-orange-200"
                  >
                    ?q=femdom
                  </Link>
                </li>
              </ul>
            </li>
            {/* ================================================================================= */}
            <li tabIndex={0}>
              <a className="justify-between text-red-400">
                api/nsfw
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-stone-900 text-red-200">
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/nsfw?q=nsfw"
                    className="text-xs text-red-200"
                  >
                    ?q=nsfw
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/nsfw?q=bonermaterial"
                    className="text-xs text-red-200"
                  >
                    ?q=bonermaterial
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/nsfw?q=iwanttofuckher"
                    className="text-xs text-red-200"
                  >
                    ?q=iwanttofuckher
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadr-api.vercel.app/api/nsfw?q=cumslut"
                    className="text-xs text-red-200"
                  >
                    ?q=cumslut
                  </Link>
                </li>
              </ul>
            </li>
            {/* ================================================================================= */}
          </ul>
        </div>
        <a className="text-xl font-serif text-white">Try Now</a>
      </div>
      <div className="navbar-end">
        <Link
          href="/usage"
          className="btn bg-stone-800 text-cyan-100 hover:bg-stone-700"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
