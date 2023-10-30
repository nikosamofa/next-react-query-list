import { Character } from "@/types";
import { FC } from "react";
import styles from "./CharacterCard.module.css";
import Image from "next/image";

interface CharacterCardProps {
  data: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={data.image}
          width={200}
          height={200}
          alt={`image for ${data.name}`}
          className={styles.image}
          placeholder="blur"
          blurDataURL="/assets/anonymous.png"
        />
      </div>
      <p className={styles.nameText}>{data.name}</p>
    </div>
  );
};
