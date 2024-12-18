import { Champion } from "@/types/Champion";

export interface ChampionListProps {
  champions: Champion[];
  onChampionClick?: (champion: Champion) => void;
}
