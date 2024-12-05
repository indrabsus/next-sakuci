import Image from "next/image";

export default function Hero(){
    return (
        <div className="hero min-h-screen mx-auto"
        >
  <div className="hero-content flex-col lg:flex-row-reverse mx-11 gap-20">
    <Image
      src="/image.jpg" width={800} height={800} alt="jt"
      className="hidden lg:block max-w-sm rounded-full shadow-sm shadow-gray-400" />
    <div>
      <h1 className="text-4xl font-bold">SMK Sangkuriang 1 Cimahi</h1>
      <p className="py-6">
        Sekolah swasta di Kota Cimahi yang berakreditasi <strong>A (Sangat Baik)</strong>, sekolah kami mempunyai 
        4 Jurusan yaitu <strong>Jurusan Perkantoran, Pemasaran, Akuntansi, dan Rekayasa Perlangkat Lunak.</strong>
        Kami membuka pendaftaran untuk Siswa Baru.
      </p>
      <button className="btn btn-primary">Daftar PPDB</button>
    </div>
  </div>
</div>
    )
}