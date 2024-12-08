"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import Welcome from "@/app/components/Panel/Welcome";
import Drawer from "@/app/components/utils/Drawer";
import Link from "next/link";
import Profile from "@/app/components/Panel/Profile";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username"); // Hapus username
        router.push("/login");
    };
    
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login"); // Redirect ke login jika token tidak ada
        } else {
            setIsLoading(false); // Hentikan loading
        }
    }, [router]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            <div className="navbar bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Sakuci</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            width={50}
            height={50}
            alt="Tailwind CSS Navbar component"
            src="/logosekolah.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link href="/dashboard" className="justify-between">
            {localStorage.getItem("username")}{" "}
            <span className="badge">Profile</span>
          </Link>
        </li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  </div>
</div>
<Profile />
<Drawer />
        </div>
    );
}
