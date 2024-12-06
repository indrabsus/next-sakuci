import Image from "next/image";

export default function Footer() {
    return (
<footer className="footer footer-center bg-base-300/70 text-base-content p-4">
  <aside className="flex">
    <div>Copyright © {new Date().getFullYear()} - All right reserved by Batara Indra - SMK Sangkuriang 1 Cimahi</div>
    <div><Image src="/logosekolah.png" width={30} height={30} alt="jt" /></div>
  </aside>
</footer>
    )
}