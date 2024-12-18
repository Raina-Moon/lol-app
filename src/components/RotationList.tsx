"use client";

import React from "react";
import ChampionCard from "./ChampionCard";
import { ChampionListProps } from "@/types/ChampionListProps";
import Link from "next/link";

const RotationList = ({ champions, onChampionClick }: ChampionListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {champions.map((champion) => (
        <Link key={champion.id} href={`/rotation/${champion.id}`}>
        <ChampionCard
          champion={champion}
          key={champion.id}
          onClick={() => onChampionClick && onChampionClick(champion)}
        />
        </Link>
      ))}
    </div>
  );
};

export default RotationList;
