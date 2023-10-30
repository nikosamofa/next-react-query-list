import { useCharactersByPage } from "@/client";
import styles from "./CharactersPanel.module.css";
import { CharacterCard } from "./CharacterCard";

export const CharactersPanel = () => {
  const { data, error, status } = useCharactersByPage(1);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      {data.results.map((character) => (
        <CharacterCard key={`character-${character.id}`} data={character} />
      ))}
    </div>
  );
};
