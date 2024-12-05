import Image from "next/image";

export default function Hero(){
    return (
        <div className="hero min-h-screen mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse mx-11 gap-20">
    <Image
      src="/image.jpg" width={800} height={800} alt="jt"
      className="hidden lg:block max-w-sm rounded-full shadow-sm shadow-gray-400" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}