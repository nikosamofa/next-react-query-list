import { Episode } from "@/types";
import { FC } from "react";
import styles from "./EpisodeItem.module.css";
import classNames from "classnames";

interface EpisodeItemProps {
  data: Episode;
  selectedEpisodeId: number | null;
  setSelectedEpisodeId: (value: number | null) => void;
}

export const EpisodeItem: FC<EpisodeItemProps> = ({
  data,
  selectedEpisodeId,
  setSelectedEpisodeId,
}) => {
  const selected = data.id === selectedEpisodeId;

  const handleClick = () => {
    setSelectedEpisodeId(selected ? null : data.id);
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
