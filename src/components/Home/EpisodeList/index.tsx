import { useInfiniteQuery } from "@tanstack/react-query";
import { FC, Fragment, useEffect, useRef } from "react";
import { getEpisodesByPageUrlInfinite } from "@/client";
import { BASE_URL } from "@/client/config";
import { Response } from "@/client/types";
import { Episode } from "@/types";
import styles from "./index.module.css";
import { EpisodeItem } from "./EpisodeItem";

interface EpisodeListProps {
  selectedEpisode: Episode | null;
  setSelectedEpisode: (value: Episode | null) => void;
}

export const EpisodeList: FC<EpisodeListProps> = ({ selectedEpisode, setSelectedEpisode }) => {
  const observerTarget = useRef(null);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["episodesByPage"],
      queryFn: getEpisodesByPageUrlInfinite,
      initialPageParam: `${BASE_URL}episode?page=1`,
      getNextPageParam: (lastPage: Response<Episode>) => lastPage.info.next,
    });

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
    return <div className={styles.container}>Loading...</div>;
  }

  if (status === "error") {
    return <div className={styles.container}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.text}>Episodes</p>
      <hr />
      <div className={styles.episodeList}>
        {data.pages.map((page, i) => (
          <Fragment key={`episode-page-${i}`}>
            {page.results.map((episode) => (
              <EpisodeItem
                key={`episode-item-${episode.id}`}
                data={episode}
                selectedEpisode={selectedEpisode}
                setSelectedEpisode={setSelectedEpisode}
              />
            ))}
          </Fragment>
        ))}

        {isFetchingNextPage && <p className={styles.loadingText}>Loading more...</p>}
        {isFetching && !isFetchingNextPage && <p className={styles.loadingText}>Fetching...</p>}

        <div ref={observerTarget} className={styles.observer} />
      </div>
    </div>
  );
};
