import { Champion } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";

const transformChampionData = (data: any): Champion[] => {
  return Object.entries(data).map(([id, champion]: [string, any]) => ({
    id,
    key:champion.key,
    name: champion.name,
    title: champion.title,
    tags: champion.tags || [],
    image: { full: champion.image.full },
  }));
};

const transformChampionDetail = (data: any, id: string): ChampionDetail => {
  const champion = data[id];

  return {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    description: champion.blurb,
    stats: {
      hp: champion.stats.hp,
      attack: champion.info.attack,
      defense: champion.info.defense,
      magic: champion.info.magic,
    },
  };
};

// 최신 데이터 가져오기
export const fetchLatestVersion = async (): Promise<string> => {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  if (!res.ok) throw new Error("Failed to fetch versions");
  const versions: string[] = await res.json();
  return versions[0];
};

// 챔피언 리스트 가져오기
export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await fetchLatestVersion();
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
  if (!res.ok) throw new Error("Failed to fetch champion list");
  const data = await res.json();
  return transformChampionData(data.data);
};

// 챔피언 상세정보 가져오기
export const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  const version = await fetchLatestVersion();
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`);
  if (!res.ok) throw new Error(`Failed to fetch champion detail for ${id}`);
  const data = await res.json();
  return transformChampionDetail(data.data, id);
};
