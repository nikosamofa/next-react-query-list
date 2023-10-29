import { Fragment } from "react";
import { Header } from "@/components/Header";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { charactersByPageQueryKey, getCharactersByPage, getEpisodesByPageInfinite } from "@/client";
import { EpisodeList } from "@/components/EpisodeList";
import { BASE_URL } from "@/client/config";
import { Episode } from "@/types";
import { Response } from "@/client/types";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  const episodesPageUrl = `${BASE_URL}episode?page=1`;

  await Promise.all([
    queryClient.prefetchInfiniteQuery({
      queryKey: ["episodesByPage"],
      queryFn: getEpisodesByPageInfinite,
      initialPageParam: episodesPageUrl,
      getNextPageParam: (lastPage: Response<Episode>) => lastPage.info.next,
    }),
    queryClient.prefetchQuery({
      queryKey: charactersByPageQueryKey(1),
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
  return (
    <Fragment>
      <Header />
      <EpisodeList />
    </Fragment>
  );
}
