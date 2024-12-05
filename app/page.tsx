
import Content from "./components/Landing/Content";
import Footer from "./components/Landing/Footer";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-center bg-base-content py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
      </div>
      <Footer />
    </div>
  );
}
