import { Champion } from "@/types/Champion";

export const createIdToNameMap = (championList: Champion[]): Record<number, string> => {
  const idToNameMap: Record<number, string> = {};
  championList.forEach((champion) => {
    idToNameMap[Number(champion.key)] = champion.id;
  });
  return idToNameMap;
};
