import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function NavShade() {
  return (
    <div className="navbar bg-zinc-900">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 rounded-box w-52"
          >
            <li>
              <Link
                href="https://bit.ly/xhadr"
                className="text-xs text-red-200"
              >
                Xhadr
              </Link>
            </li>
            <li>
              <Link href="/" className="text-xs text-lime-200">
                Xhadr-Api
              </Link>
            </li>
            <li>
              <Link href="/typescript" className="text-xs text-blue-200">
                Typescript Usage
              </Link>
            </li>
            <li>
              <Link href="/javascript" className="text-xs text-yellow-200">
                Javascript Usage
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className="btn btn-ghost normal-case font-bold font-serif text-2xl text-blue-300 text-center"
        >
          Xhadr Api <span className="text-xs text-gray-200"> by Xhadr</span>
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
