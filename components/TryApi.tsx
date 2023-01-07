import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function trynow() {
  return (
    <div className="navbar bg-zinc-900 rounded-2xl">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 rounded-box w-52"
          >
            <li>
              <Link
                href="https://xhadr-api.vercel.app/api/animation?q=hug"
                className="text-xs text-lime-300"
              >
                /api/animation?q=hug
              </Link>
            </li>
            <li>
              <Link
                href="https://xhadr-api.vercel.app/api/hentai?q=femdom"
                className="text-xs text-lime-300"
              >
                /api/hentai?q=femdom
              </Link>
            </li>
            <li>
              <Link
                href="https://xhadr-api.vercel.app/api/anime?q=death note"
                className="text-xs text-lime-300"
              >
                /api/anime?q=death note
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <p className="btn btn-ghost normal-case font-bold font-serif text-2xl  text-orange-300 text-center">
          Pick an endpoint
        </p>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
