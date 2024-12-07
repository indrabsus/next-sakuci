export default function Contact() {
    return (
        <section id="kontak" className="bg-base-300/70 pt-16">
  {/* Hero Section */}
  <div className="hero py-40">
    <div className="flex flex-col lg:flex-row-reverse bg-base-100/80 rounded-xl p-20 gap-8">
      {/* Informasi Kontak */}
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kontak Kami</h1>
        <p>
          Jika ada pertanyaan atau masukan, silahkan hubungi kami melalui email smk.sangkuriang.1.cimahi@gmail.com
        </p>
      </div>
      
      {/* Kartu Kontak dengan Google Maps */}
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
        <div className="card-body p-0">
          <div className="relative w-full h-0 pb-[75%]"> {/* 4:3 Aspect Ratio */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.214592052594!2d107.5373768757388!3d-6.86486806716668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e468bf2e9f3d%3A0xe7a0cce9a81e23b3!2sSMK%20SANGKURIANG%201%20CIMAHI!5e0!3m2!1sid!2sid!4v1733533042779!5m2!1sid!2sid"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}