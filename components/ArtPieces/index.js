import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export default function ArtPieces({ data }) {
  console.log(data);
  if (data) {
    console.log("data", data[0]);
    return (
      <StyledList>
        {data.map(({ slug, name, artist, imageSource }) => (
          <StyledLink href={`/art-pieces/${slug}`} key={slug}>
            <Image
              src={imageSource}
              alt={`${name} by ${artist}`}
              width={500}
              height={500}
            ></Image>
            <p>{`"${name}" by ${artist}`}</p>
          </StyledLink>
        ))}
      </StyledList>
    );
  }
  return <h1>Loadin...</h1>;
}

const StyledList = styled.div`
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
  margin-bottom: 1.5rem;
`;
