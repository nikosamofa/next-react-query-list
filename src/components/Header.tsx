import { FC } from "react";

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = "Rick and Morty Characters" }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};
