export interface DataDragonChampion {
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    tags: string[];
    image: { full: string };
    stats: {
      hp: number;
    };
    info: {
      attack: number;
      defense: number;
      magic: number;
    };
  }

export interface DataDragonResponse {
  data: {
    [key: string]: DataDragonChampion;
  };
}
