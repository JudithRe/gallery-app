import { useState } from "react";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};
export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) => {
          if (info.slug !== slug) {
            return info;
          }
          return {
            ...info,
            isFavorite: !info.isFavorite,
          };
        });
      }
      console.log("artPiecesInfo", artPiecesInfo);
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        data={data}
        {...pageProps}
      />
      <Layout />
    </>
  );
}
