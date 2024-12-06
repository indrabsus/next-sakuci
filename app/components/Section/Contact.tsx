export default function Contact() {
    return (
        <section id="kontak">
            <div className="hero py-40">
                <div className="hero-content flex-col lg:flex-row-reverse bg-base-300/70 rounded-xl">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Kontak Kami</h1>
                        <p className="py-6">Jika ada pertanyaan atau masukan silahkan hubungi kami melalui kontak di bawah ini.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100/50">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pesan</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Pesan"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}