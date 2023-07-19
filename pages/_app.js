import GlobalStyle from "../styles";
import useSWR from "swr";

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

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
