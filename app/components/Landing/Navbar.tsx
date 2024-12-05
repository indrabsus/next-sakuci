import SwitchTheme from "./SwitchTheme";

export default function Navbar() {
    return (
        <div className="bg-base-300 shadow-xl fixed top-0 left-0 w-full z-50">
            <div className="navbar mx-auto lg:max-w-screen-lg md:max-w-screen-md">
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
        <li>
          <a>Jurusan</a>
          <ul className="p-2">
            <li><a>Perkantoran</a></li>
            <li><a>Pemasaran</a></li>
            <li><a>Akuntansi</a></li>
            <li><a>RPL</a></li>
          </ul>
        </li>
        <li><a>Kontak</a></li>
      </ul>
    </div>
    <a className="text-xl font-bold">SMK Sangkuriang 1 Cimahi</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Jurusan</summary>
          <ul className="p-2">
          <li><a>Perkantoran</a></li>
            <li><a>Pemasaran</a></li>
            <li><a>Akuntansi</a></li>
            <li><a>RPL</a></li>
          </ul>
        </details>
      </li>
      <li><a>Kontak</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <SwitchTheme />
  </div>
</div>
        </div>
    )
}