import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { FC, Fragment, useEffect, useRef } from "react";
import { getEpisodesByPageInfinite, useEpisodesByPage } from "@/client";
import { BASE_URL } from "@/client/config";
import { Response } from "@/client/types";
import { Episode } from "@/types";
import styles from "./index.module.css";
import { EpisodeItem } from "./EpisodeItem";

interface EpisodeListProps {
  selectedEpisodeId: number | null;
  setSelectedEpisodeId: (value: number | null) => void;
}

export const EpisodeList: FC<EpisodeListProps> = ({ selectedEpisodeId, setSelectedEpisodeId }) => {
  const observerTarget = useRef(null);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["episodesByPage"],
      queryFn: getEpisodesByPageInfinite,
      initialPageParam: `${BASE_URL}episode?page=1`,
      getNextPageParam: (lastPage: Response<Episode>) => lastPage.info.next,
    });
  console.log("episodes.data", data);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, fetchNextPage, hasNextPage]);

  if (status === "pending") {
    return <div className={styles.episodeList}>Loading...</div>;
  }

  if (status === "error") {
    return <div className={styles.episodeList}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.episodeList}>
      {data.pages.map((page, i) => (
        <Fragment key={`episode-page-${i}`}>
          {page.results.map((episode) => (
            <EpisodeItem
              key={`episode-item-${episode.id}`}
              data={episode}
              selectedEpisodeId={selectedEpisodeId}
              setSelectedEpisodeId={setSelectedEpisodeId}
            />
          ))}
        </Fragment>
      ))}

      <div ref={observerTarget} />
    </div>
  );
};
