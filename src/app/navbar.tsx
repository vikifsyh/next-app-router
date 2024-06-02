"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex bg-blue-800 px-5 py-2 justify-between items-center">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex gap-5">
        <Link href="/">
          <li
            className={`cursor-pointer ${
              pathname === "/" ? "text-green-600" : "text-white"
            } text-white`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`cursor-pointer ${
              pathname === "/about" ? "text-green-600" : "text-white"
            } text-white`}
          >
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`cursor-pointer ${
              pathname === "/about/profile" ? "text-green-600" : "text-white"
            } text-white`}
          >
            Profile
          </li>
        </Link>
      </ul>
      <button
        onClick={() => router.push("/login")}
        className="text-black bg-white rounded-md px-4 py-2"
      >
        Login
      </button>
    </nav>
  );
}
