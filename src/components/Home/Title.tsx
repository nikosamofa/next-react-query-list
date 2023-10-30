import { FC } from "react";
import styles from "./Title.module.css";

interface TitleProps {
  title?: string;
}

export const Title: FC<TitleProps> = ({ title = "Rick and Morty Characters" }) => {
  return <h2 className={styles.titleText}>{title}</h2>;
};
