import { useEpisodesByPage } from "@/client";

export const EpisodeList = () => {
  const episodes = useEpisodesByPage(1);
  console.log("episodes.data", episodes.data);

  return <div>EpisodeList</div>;
};
