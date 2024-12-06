import Image from "next/image";

type ContentProps = {
    ImageSrc: string,
    Title: string,
    Description: string
}



export default function JurusanCard({ImageSrc, Title, Description}: ContentProps){
    return (
        <div className="card-compact card glass w-96">
  <figure>
  <Image
  src={ImageSrc}
  width={800}
  height={800}
  alt="Shoes"
  className="w-96 h-60 lg:h-60 xl:h-60 object-cover rounded-t-lg transition-all duration-300"
/>

  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {Title}
    </h2>
    <p>{Description}</p>
  </div>
</div>
    )
}