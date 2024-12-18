import { Champion } from "./Champion";

export interface ChampionCardProps {
    champion: Champion;
    onClick?: () => void;
  }