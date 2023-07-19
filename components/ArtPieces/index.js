import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ data }) {
  console.log(data);
  if (data) {
    console.log("data", data[0]);
    return (
      <>
        {data.map(({ slug, name, artist, imageSource }) => (
          <Link href={`/art-pieces/${slug}`} key={slug}>
            <Image
              src={imageSource}
              alt={`${name} by ${artist}`}
              width={500}
              height={500}
            ></Image>
            <p>{`"${name}" by ${artist}`}</p>
          </Link>
        ))}
      </>
    );
  }
  return <h1>Loadin...</h1>;
}
