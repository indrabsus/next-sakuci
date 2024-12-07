"use client";

import { useEffect, useState } from "react";

export default function Welcome() {
    const [data, setData] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ambil token dari Local Storage
                const token = localStorage.getItem("token");
                const id = localStorage.getItem("id");
                const id_role = localStorage.getItem("id_role");

                if (!token) {
                    throw new Error("Token tidak ditemukan. Harap login terlebih dahulu.");
                }
                if(id_role == "6"){
                  const response = await fetch("https://sakuci.id/api/dataguru/"+id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const result = await response.json();
              setData(result.data);
                } else if(id_role == "8"){
                  const response = await fetch("https://sakuci.id/api/datasiswa/"+id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const result = await response.json();
              setData(result.data);
                }

                
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="bg-base-300 max-w-screen-xl mx-auto h-full mt-3 rounded-xl w-full">
            <div className="p-10">
                <h1 className="text-xl font-bold mt-5">
                    Data Diri
                </h1>
                <hr />
                <table className="table table-compact w-full mt-3">
                    <tr>
                      <th>Nama Lengkap</th>
                      <td>{data.nama_lengkap}</td>
                    </tr>
                    <tr>
                      <th>Jenis Kelamin</th>
                      <td>{data.jenkel == 'l' ? 'Laki-laki' : 'Perempuan'}</td>
                    </tr>
                    <tr>
                      <th>No Hp</th>
                      <td>{data.no_hp}</td>
                    </tr>

                </table>
            </div>
        </div>
    );
}
