import { Item } from "@/types/Item";

export const itemUtils = (data: any): Item[] => {
  return Object.entries(data).map(([id, item]: any) => ({
    id,
    name: item.name,
    description: item.description,
    gold: {
      total: item.gold.total,
      sell: item.gold.sell,
    },
    tags: item.tags,
  }));
};
