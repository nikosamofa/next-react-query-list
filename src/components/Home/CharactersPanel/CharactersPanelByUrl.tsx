import { FC } from "react";
import styles from "./CharactersPanel.module.css";
import { CharacterCardByUrl } from "./CharacterCardByUrl";

interface CharactersPanelByUrlProps {
  urlList: Array<string>;
}

export const CharactersPanelByUrl: FC<CharactersPanelByUrlProps> = ({ urlList }) => {
  return (
    <div className={styles.container}>
      {urlList.map((url) => (
        <CharacterCardByUrl key={url} url={url} />
      ))}
    </div>
  );
};
