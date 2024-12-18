export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  description: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    magic: number;
  };
}
