import Contact from "./components/Section/Contact";
import JurusanCard from "./components/utils/JurusanCard";
import Footer from "./components/Section/Footer";
import Hero from "./components/Section/Jurusan";
import Navbar from "./components/Section/Navbar";
import EkskulCard from "./components/utils/EkskulCard";

const jurusan = [
  {
    ImageSrc: "/bdp.jpg",
    Title: "Bisnis Daring dan Pemasaran",
    Description: "Jurusan yang mengajarkan teknik pemasaran dan bisnis online.",
  },
  {
    ImageSrc: "/ak.jpg",
    Title: "Akuntansi",
    Description: "Belajar mengelola keuangan dan pembukuan perusahaan.",
  },
  {
    ImageSrc: "/rpl.jpg",
    Title: "Rekayasa Perangkat Lunak",
    Description: "Membuat dan mengembangkan aplikasi perangkat lunak.",
  },
  {
    ImageSrc: "/mplb.jpg",
    Title: "Manajemen Perkantoran dan Layanan Bisnis",
    Description: "Mengelola administrasi kantor dengan efisien.",
  },
];

const ekskul = [
  {
    ImageSrc: "/ekskul/futsal.jpg",
    Title: "Futsal",
  }, 
  {
    ImageSrc: "/ekskul/voli.jpg",
    Title: "Voli",
  },
  {
    ImageSrc: "/ekskul/ec.jpg",
    Title: "English Club",
  },
  {
    ImageSrc: "/ekskul/tari.jpg",
    Title: "Seni Tari",
  },
]

export default function Home() {
  return (
    <div style={{backgroundImage: "url('/all.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(0, 0, 0, 0.6)"
      }}>
      <Navbar />
      <Hero />
      <section id="jurusan"  className="flex flex-wrap justify-center bg-base-300/70 py-40 gap-4 mx-auto">
  {jurusan.map((item, index) => (
    <JurusanCard key={index} ImageSrc={item.ImageSrc} Title={item.Title} Description={item.Description} />
  ))}
      </section>


    <section id="ekstrakurikuler"  className="flex flex-wrap justify-center py-40 mx-auto gap-4">
    {ekskul.map((item, index) => (
        <EkskulCard key={index} ImageSrc={item.ImageSrc} Title={item.Title} />
    ))}
    </section>
 

      <Contact />
      <Footer />
    </div>
  );
}
