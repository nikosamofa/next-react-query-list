import { Episode } from "@/types";
import { FC } from "react";
import styles from "./EpisodeItem.module.css";
import classNames from "classnames";

interface EpisodeItemProps {
  data: Episode;
  selectedEpisode: Episode | null;
  setSelectedEpisode: (value: Episode | null) => void;
}

export const EpisodeItem: FC<EpisodeItemProps> = ({
  data,
  selectedEpisode,
  setSelectedEpisode,
}) => {
  const selected = data.id === selectedEpisode?.id;

  const handleClick = () => {
    setSelectedEpisode(selected ? null : data);
  };

  return (
    <div
      className={classNames(styles.item, { [styles.itemSelected]: selected })}
      onClick={handleClick}
    >
      {data.name}
    </div>
  );
};
