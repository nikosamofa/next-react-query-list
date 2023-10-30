import { useCharacterById } from "@/client";
import { FC } from "react";
import styles from "./CharacterCard.module.css";
import { CharacterCard } from "./CharacterCard";

interface CharacterCardByUrlProps {
  url: string;
}

export const CharacterCardByUrl: FC<CharacterCardByUrlProps> = ({ url }) => {
  const { data, error, status } = useCharacterById(url);

  if (status === "pending") {
    // This gives better UX instead of showing loading status
    return null;
  }

  if (status === "error") {
    return <div className={styles.card}>Error: {error.message}</div>;
  }

  return <CharacterCard data={data} />;
};
