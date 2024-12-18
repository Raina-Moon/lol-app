//SSG
import React from "react";
import ItemList from "../../components/ItemList";
import { Item } from "@/types/Item";
import { itemUtils } from "@/utils/itemUtils";

const ItemPage = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/item.json"
  );
  const data = await res.json();

  const items: Item[] = itemUtils(data.data);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="py-16">
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide">
          League of Legends Items
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Browse all in-game items, their effects, stats, and gold costs for
          better gameplay.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ItemList items={items} />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
