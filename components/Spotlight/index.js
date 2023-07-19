import Image from "next/image";

export default function Spotlight({ data }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if (!data) {
    return <p>loading...</p>;
  }

  const randomNumber = getRandomInt(data.length);

  const randomArtPiece = data[randomNumber];

  return (
    <>
      <Image
        src={randomArtPiece.imageSource}
        alt={`${randomArtPiece.name} by ${randomArtPiece.artist}`}
        width={500}
        height={500}
      />
      <h1>{randomArtPiece.artist}</h1>
    </>
  );
}
