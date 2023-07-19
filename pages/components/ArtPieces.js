export default function ArtPieces({ data }) {
  console.log(data);
  if (data) {
    return <h1>Data is here</h1>;
  }
  return <h1>Hello</h1>;
}
