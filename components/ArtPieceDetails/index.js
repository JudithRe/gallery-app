import Image from "next/image";
import { styled } from "styled-components";

export default function ArtPieceDetails({ image, title, year, genre, artist }) {
  return (
    <>
      <figure>
        <Image
          src={image}
          alt={`${title} by ${artist}`}
          width={500}
          height={500}
        ></Image>
        <figcaption>{`${title} by ${artist} (${year}) ${genre}`}</figcaption>
      </figure>
      <BackButton as="a" href="/art-pieces/">
        Return to List
      </BackButton>
    </>
  );
}

const BackButton = styled.button`
  background-color: yellow;
`;
