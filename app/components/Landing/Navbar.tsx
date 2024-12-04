export default function Navbar() {
    return (
        <div className="bg-gray-800 h-12">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full lg:mx-5 md:mx-5 sm:mx-5">
            <div className="text-white text-2xl font-bold">SMK Sangkuriang 1 Cimahi</div>
            <div className="text-white">
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Kontak</li>
                    <li>Tentang Kami</li>
                </ul>
            </div>
            </div>
        </div>
    )
}