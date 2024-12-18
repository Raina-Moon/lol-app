import React from "react";
import { Item } from "@/types/Item";
import Image from "next/image";

const ItemList = ({ items }: { items: Item[] }) => {
  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center mb-4">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.id}.png`}
              alt={item.name}
              width={64}
              height={64}
              priority
            />
          </div>

          <h3 className="text-lg font-bold text-gold mb-2 text-center">
            {item.name}
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            {stripHtml(item.description)}
          </p>
          <div className="text-gray-400 text-sm">
            <p className="mb-1">
              <span className="font-semibold text-gold">Price:</span>
              {item.gold.total}
              <span className="text-gray-400">(Sell: {item.gold.sell})</span>
            </p>
            <p>
              <span className="font-semibold text-gold">Tags:</span>
              {item.tags.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
