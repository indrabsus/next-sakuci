"use client"

import { getDataGuruById } from "@/app/services/models/dataGuru";
import { useEffect, useState } from "react";
import { Profiles, ApiResponse } from "@/app/services/lib/interface";
import { getDataSiswaById } from "@/app/services/models/dataSiswa";

export default function Profile(){
const [dataProfiles, setDataProfiles] = useState<Profiles | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
        
      try {
        const id = localStorage.getItem("id");
        const id_role = localStorage.getItem("id_role");
        if (!id) {
          throw new Error("ID tidak ditemukan di localStorage");
        }
        

        if(id_role == "6"){
            const response: ApiResponse<Profiles> = await getDataGuruById(id);
            if (response.success && response.data) {
                setDataProfiles(response.data); // Pastikan hanya data valid yang diatur
              } else {
                setError(response.message || "Data tidak ditemukan");
              }
        } else {
            const response: ApiResponse<Profiles> = await getDataSiswaById(id);
            if (response.success && response.data) {
                setDataProfiles(response.data); // Pastikan hanya data valid yang diatur
              } else {
                setError(response.message || "Data tidak ditemukan");
              }
        }

        
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



    return (
        <div className="mx-5">
            <div className="max-w-screen-xl h-full mt-3 rounded-xl mx-auto bg-base-300">
            <div className="p-10">
                <h1 className="text-xl font-bold mt-5">Data Diri</h1>
                <hr />
                <div className="grid grid-cols-2 gap-4 mt-3">
  <div className="font-bold">Nama Lengkap</div>
  <div>{dataProfiles?.nama_lengkap || "No Data"}</div>

  <div className="font-bold">Jenis Kelamin</div>
  <div>{dataProfiles?.jenkel === "l" ? "Laki-laki" : "Perempuan"}</div>

  <div className="font-bold">Status</div>
  <div>
    {dataProfiles?.nama_role
      ? dataProfiles.nama_role.replace(/\b\w/g, (char) => char.toUpperCase())
      : "No Data"}
  </div>
</div>

            </div>
        </div>
        </div>
    );
}