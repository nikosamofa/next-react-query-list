import { useState } from "react";
import { Title } from "./Title";
import { EpisodeList } from "./EpisodeList";
import { CharactersPanel, CharactersPanelByUrl } from "./CharactersPanel";
import styles from "./index.module.css";
import { Episode } from "@/types";

export const Home = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.main}>
        <EpisodeList selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode} />
        {!!selectedEpisode ? (
          <CharactersPanelByUrl
            urlList={selectedEpisode?.characters}
            episodeTitle={selectedEpisode.name}
          />
        ) : (
          <CharactersPanel />
        )}
      </div>
    </div>
  );
};
