"use client";

import React from "react";
import { fetchChampionList } from "@/utils/serverApi";
import { ChampionRotation } from "@/types/ChampionRotation";
import { Champion } from "@/types/Champion";
import RotationList from "@/components/RotationList";
import { createIdToNameMap } from "@/utils/campionUtils";
import { useQuery } from "react-query";

const ChampionRotationPage = () => {
const {
  data:rotationData,
  isLoading,
  isError,
} = useQuery<ChampionRotation>([`championRotation`], async () => {
  const res = await fetch('/api/rotation')
  if (!res.ok) throw new Error (`Failed to fetch ${res.status}`)
    return res.json()
})

const {
  data:allChampions,
  isLoading:isChampionLoading,
  isError:isChampionError,
} = useQuery<Champion[]>([`allChampions`],fetchChampionList)

  if (isLoading || isChampionLoading) return <p>Loading...</p>;
  if (isError || isChampionError || !rotationData || !allChampions) return <p>Failed to fetch rotation data</p>;

  const idToName = createIdToNameMap(allChampions);
  const championNames = rotationData.freeChampionIds.map((id) => idToName[id]);
  const filteredChampions = allChampions.filter((champion) =>
    championNames.includes(champion.id)
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="py-16">
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide">
          Weekly Champion Rotation
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Check out this week's free-to-play champions!
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RotationList champions={filteredChampions} />
        </div>
      </div>
    </div>
  );
};

export default ChampionRotationPage;
