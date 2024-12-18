export interface Item {
  id: string;
  name: string;
  description: string;
  gold: {
    total: number;
    sell: number;
  };
  tags: string[];
}
