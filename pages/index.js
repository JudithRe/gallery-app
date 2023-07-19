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

export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher);
  console.log(data);
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
