"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true); // State untuk loading
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("token"); // Hapus token
        router.push("/login"); // Arahkan ke halaman login
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login"); // Redirect ke login jika token tidak ada
        } else {
            setIsLoading(false); // Hentikan loading jika token valid
        }
    }, [router]);

    if (isLoading) {
        // Tampilkan loading saat validasi token
        return (
            <div className="flex items-center justify-center h-screen">
                <p>AKSES TERLARANG</p>
            </div>
        );
    }

    return (
        <section className="p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Selamat datang di halaman dashboard!</p>
            <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
                Logout
            </button>
        </section>
    );
}
