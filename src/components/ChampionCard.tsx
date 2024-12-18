"use client";

import React from "react";
import { ChampionCardProps } from "@/types/ChampionCardProps";
import Image from "next/image";

const ChampionCard = ({ champion, onClick }: ChampionCardProps) => {
  return (
    <div
      key={champion.id}
      onClick={onClick}
      className="relative group cursor-pointer bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="w-full h-40 relative">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-xl font-bold text-white">{champion.name}</h3>
        <p className="text-gray-300 text-sm">{champion.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
