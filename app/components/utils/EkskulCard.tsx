import Image from "next/image"

type ContentProps = {
    ImageSrc: string,
    Title: string
}
export default function EkskulCard({ImageSrc, Title}: ContentProps){
    return (
      <div className="card-compact card glass w-96 pt">
  <figure className="w-full h-64 overflow-hidden">
    <Image
      width={500}
      height={500}
      src={ImageSrc}
      alt="car!"
      className="w-full h-full object-cover"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Title}</h2>
  </div>
</div>




    )
}