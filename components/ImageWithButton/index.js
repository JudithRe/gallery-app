import Image from "next/image";
import { styled } from "styled-components";
import HeartIcon from "../../assets/heart.svg";

export default function ImageWithButton({
  src,
  alt,
  width,
  height,

  handleToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const favoriteInfo = artPiecesInfo.find((piece) => {
    return piece.slug === slug;
  }) ?? { isFavorite: false };
  const { isFavorite } = favoriteInfo;

  return (
    <StyledFavoriteContainer>
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
      ></StyledImage>
      <StyledFavoriteButton onClick={() => handleToggleFavorite(slug)}>
        <HeartIcon height={30} fill={`${isFavorite ? "red" : "gray"}`} />
      </StyledFavoriteButton>
    </StyledFavoriteContainer>
  );
}

const StyledFavoriteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 10px 10px 5px 10px;
  background-color: white;
  border: none;
`;

const StyledFavoriteContainer = styled.div`
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;
