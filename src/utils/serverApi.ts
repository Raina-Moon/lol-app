import { DataDragonResponse, DataDragonChampion } from "@/types/DataDragon";
import { Champion } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";

// 최신 데이터 버전 가져오기
export const fetchLatestVersion = async (): Promise<string> => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  if (!res.ok) throw new Error("Failed to fetch versions");
  const versions: string[] = await res.json();
  return versions[0];
};

// Riot API 호출
const fetchFromRiotAPI = async (endpoint: string): Promise<any> => {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) throw new Error("API key not found");

  const res = await fetch(`https://kr.api.riotgames.com${endpoint}`, {
    headers: { "X-Riot-Token": apiKey },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json();
};

// Data Dragon 호출
const fetchFromDataDragon = async (url: string): Promise<any> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch Data Dragon data: ${res.status}`);
  }
  return res.json();
};

// 모든 챔피언 데이터 가져오기 (Champion 페이지)
export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await fetchLatestVersion(); // 최신 버전
  const data: DataDragonResponse = await fetchFromDataDragon(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );

  return Object.values(data.data).map((champion: DataDragonChampion) => ({
    id: champion.id,
    key: champion.key,
    name: champion.name,
    title: champion.title,
    tags: champion.tags || [],
    image: { full: champion.image.full },
  }));
};

// 로테이션 챔피언 데이터 가져오기 (Rotation 페이지)
export const fetchRotationChampions = async (): Promise<Champion[]> => {
  const version = await fetchLatestVersion(); // 최신 버전
  const rotationData = await fetchFromRiotAPI(`/lol/platform/v3/champion-rotations`); 

  if (!rotationData || !rotationData.freeChampionIds) {
    throw new Error("Failed to fetch rotation data");
  }

  const allChampions = await fetchChampionList(); // 모든 챔피언 데이터 가져오기
  return rotationData.freeChampionIds.map((id: number) => {
    const champion = allChampions.find((champ) => parseInt(champ.key) === id);

    if (!champion) {
      throw new Error(`Champion with ID ${id} not found`);
    }

    return champion;
  });
};

// 챔피언 상세정보 가져오기
export const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  const version = await fetchLatestVersion(); // Data Dragon 최신 버전
  const data: DataDragonResponse = await fetchFromDataDragon(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`
  );

  const champion = data.data[id] as DataDragonChampion;
  if (!champion) {
    throw new Error(`Champion with ID ${id} not found`);
  }

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
