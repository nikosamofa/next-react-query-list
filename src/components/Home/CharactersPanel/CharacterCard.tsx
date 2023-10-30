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
      <div className={styles.image}>
        <Image
          src={data.image}
          width={320}
          height={180}
          style={{ objectFit: "cover" }}
          alt={`image for ${data.name}`}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{data.name}</p>
        <p className={styles.gender}>Gender: {data.status}</p>
        <p className={styles.status}>Status: {data.status}</p>
      </div>
    </div>
  );
};
