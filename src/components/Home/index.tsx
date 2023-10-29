import { Fragment, useState } from "react";
import { Header } from "./Header";
import { EpisodeList } from "./EpisodeList";
import { CharactersPanel } from "./CharactersPanel";
import styles from "./index.module.css";

export const Home = () => {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <EpisodeList
          selectedEpisodeId={selectedEpisodeId}
          setSelectedEpisodeId={setSelectedEpisodeId}
        />
        <CharactersPanel />
      </div>
    </div>
  );
};
