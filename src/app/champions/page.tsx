//ISR
import React from "react";
import { fetchChampionList } from "@/utils/serverApi";
import ChampionList from "@/components/ChampionList";

export const revalidate = 86400;

export default async function ChampionsPage() {
  const champions = await fetchChampionList();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="py-16">
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide">
          Leage Of Legends Champions
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Discover all League of Legends champions, including their abilities,
          stats, and skins.
        </p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChampionList champions={champions} />
        </div>
      </div>
    </div>
  );
}
