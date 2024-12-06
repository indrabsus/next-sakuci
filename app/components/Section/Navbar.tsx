import Image from "next/image";
import SwitchTheme from "../utils/SwitchTheme";

export default function Navbar() {
    return (
        <div className="bg-base-300/70 shadow-xl fixed top-0 left-0 w-full z-50 px-3">
            <div className="navbar mx-auto max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Jurusan</a></li>
        <li><a>Kontak</a></li>
      </ul>
    </div>
    <Image src="/logosekolah.png" width={50} height={50} alt="logo"></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href="#home">Home</a></li>
    <li><a href="#jurusan">Jurusan</a></li>
    <li><a href="#ekstrakurikuler">Ekstrakurikuler</a></li>
    <li><a href="#kontak">Kontak</a></li>
    <li className="bg-blue-500 rounded-md text-white ml-5"><a>Login</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <SwitchTheme />
  </div>
</div>
        </div>
    )
}