import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getCharactersByPage, getEpisodesByPageUrlInfinite } from "@/client";
import { BASE_URL } from "@/client/config";
import { Episode } from "@/types";
import { Response } from "@/client/types";
import { Home } from "@/components/Home";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchInfiniteQuery({
      queryKey: ["episodesByPage"],
      queryFn: getEpisodesByPageUrlInfinite,
      initialPageParam: `${BASE_URL}episode?page=1`,
      getNextPageParam: (lastPage: Response<Episode>) => lastPage.info.next,
    }),
    queryClient.prefetchQuery({
      queryKey: ["charactersBypage", 1],
      queryFn: () => getCharactersByPage(1),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Index() {
  return <Home />;
}
