import { FC, Fragment } from "react";
import styles from "./CharactersPanel.module.css";
import { CharacterCardByUrl } from "./CharacterCardByUrl";

interface CharactersPanelByUrlProps {
  urlList: Array<string>;
  episodeTitle: string;
}

export const CharactersPanelByUrl: FC<CharactersPanelByUrlProps> = ({ urlList, episodeTitle }) => {
  return (
    <div>
      <p>
        {urlList.length} Characters in episode &quot;{episodeTitle}&quot;
      </p>
      <div className={styles.container}>
        {urlList.map((url) => (
          <CharacterCardByUrl key={url} url={url} />
        ))}
      </div>
    </div>
  );
};
