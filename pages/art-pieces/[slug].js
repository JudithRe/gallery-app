import ArtPieceDetails, { BackButton } from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ data }) {
  const router = useRouter();
  const pieceSlug = router.query.slug;
  if (!data) {
    return <p>loading ...</p>;
  }
  const currentPiece = data.find((piece) => {
    return piece.slug === pieceSlug;
  });
  console.log(currentPiece);
  return (
    <ArtPieceDetails
      image={currentPiece.imageSource}
      title={currentPiece.name}
      year={currentPiece.year}
      genre={currentPiece.genre}
      artist={currentPiece.artist}
    />
  );
}
