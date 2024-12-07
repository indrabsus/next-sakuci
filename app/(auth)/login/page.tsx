"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { handleLogin } from "../../services/authService";
import Swal from "sweetalert2";


export default function Login() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false); // State untuk animasi loading

    useEffect(() => {
        // Reset pesan error saat halaman dimuat ulang
        setErrorMessage("");
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); // Mulai animasi loading
        setErrorMessage(""); // Reset pesan error

        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        try {
            const result = await handleLogin(username, password);

            if (result && result.success) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("acc", result.acc);
                localStorage.setItem("username", result.username);
                localStorage.setItem("id", result.id);
                localStorage.setItem("id_role", result.id_role);

                router.push("/dashboard");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Gagal",
                    text: result?.message || "Terjadi kesalahan yang tidak diketahui.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Terjadi kesalahan saat mencoba login. "+error,
            });
        } finally {
            setIsLoading(false); // Hentikan animasi loading
        }
    };

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border sm:max-w-md bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4">
                        <h1 className="text-xl font-bold text-white">
                            Sign in to your account
                        </h1>

                        {errorMessage && (
                            <div
                                role="alert"
                                className="alert alert-error flex items-center bg-red-500 text-white px-4 py-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full flex justify-center items-center"
                                disabled={isLoading} // Disable tombol saat loading
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner loading-lg"></span>
                                ) : (
                                    "Sign in"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
