import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function NavHome() {
  return (
    <div className="navbar from-lime-900 to-zinc-800 rounded-xl border-lime-700 border-2 hover:bg-zinc-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
                    href="https://xhadr-api-kryknz.vercel.app/api/animation?q=bite"
                    className="text-xs text-yellow-200"
                  >
                    ?q=bite
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://xhadr-api-kryknz.vercel.app/api/animation?q=blush"
                    className="text-xs text-yellow-200"
                  >
                    ?q=blush
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
                    href="https://xhadr-api-kryknz.vercel.app/api/hentai?q=ass"
                    className="text-xs text-orange-200"
                  >
                    ?q=ass
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://xhadr-api-kryknz.vercel.app/api/hentai?q=bdsm"
                    className="text-xs text-orange-200"
                  >
                    ?q=bdsm
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
                    href="https://xhadr-api-kryknz.vercel.app/api/nsfw?q=nsfw"
                    className="text-xs text-red-200"
                  >
                    ?q=nsfw
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://xhadr-api-kryknz.vercel.app/api/nsfw?q=bonermaterial"
                    className="text-xs text-red-200"
                  >
                    ?q=bonermaterial
                  </Link>
                </li>
              </ul>
            </li>
            {/* ================================================================================= */}
          </ul>
        </div>
        <a className="text-xl font-serif">Try or</a>
      </div>
      <div className="navbar-end">
        <Link href="/xhade" className="btn bg-lime-900 text-lime-100">
          Get started
        </Link>
      </div>
    </div>
  );
}
