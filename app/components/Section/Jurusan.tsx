import Image from "next/image";

export default function Jurusan(){
    return (
        <section className="hero min-h-screen mx-auto" id="home" 
        >
  <div className="hero-content flex-col lg:flex-row-reverse mx-11 gap-20 bg-base-300 bg-opacity-70 rounded-xl py-10">
    <Image
      src="/akre.png" width={800} height={800} alt="jt"
      className="hidden lg:block max-w-sm" />
    <div>
      <h1 className="text-4xl font-bold">SMK Sangkuriang 1 Cimahi</h1>
      <p className="py-6">
        Sekolah swasta di Kota Cimahi yang berakreditasi <strong>A (Sangat Baik)</strong>, sekolah kami mempunyai 
        4 Jurusan yaitu:
      </p>
      <ul className="list-disc list-inside">
          <li>Bisnis Daring dan Pemasaran</li><li>Akuntansi</li><li>Rekayasa Perangkat Lunak</li><li>Manajemen Perkantoran dan Layanan Bisnis</li>
      </ul>
      <p className="mt-3">Kami membuka pendaftaran untuk Siswa Baru PPDB 2025 bagi kalian yang ingin bergabung di SMK Sangkuriang 1 Cimahi
        kami tunggu kedatangannya disini...!!!
      </p>
      <button className="btn btn-primary mt-5">Daftar PPDB</button>
    </div>
  </div>
</section>
    )
}