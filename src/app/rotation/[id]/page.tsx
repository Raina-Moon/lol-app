"use client";

import React from "react";
import { fetchChampionDetail } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/ChampionDetail";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useQuery } from "react-query";

const ChampionRotationDetailPage = () => {
  const { id } = useParams();

  const {
    data:champion,
    isLoading,
    isError,
  } = useQuery<ChampionDetail>([`championDetail`,id],() => fetchChampionDetail(id as string))

  if (isLoading) return <p>Loading...</p>;
  if (isError || !champion) return <p>Failed to load champion detail</p>;

  return (
    <div
      className="relative min-h-screen flex"
      style={{
        backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "right 10% center",
      }}
    >
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>

      <div className="relative z-10 w-1/3 p-8 flex flex-col justify-center bg-black bg-opacity-75 text-white animate-slide-in">
        <div className="mb-6 text-center">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`}
            alt={champion.name}
            width={120}
            height={120}
            priority
            className="rounded-full border-4 border-gold shadow-lg mx-auto"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gold text-center mb-4">
          {champion.name}
          <br />
          <span className="text-gray-300">{champion.title}</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
          {champion.description}
        </p>

        <div className="bg-gray-800 bg-opacity-80 rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold text-gold mb-2 text-center">
            Champion Stats
          </h3>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li>
              <span className="font-semibold text-white">HP :</span>{" "}
              {champion.stats.hp}
            </li>
            <li>
              <span className="font-semibold text-white">Attack :</span>{" "}
              {champion.stats.attack}
            </li>
            <li>
              <span className="font-semibold text-white">Defense :</span>{" "}
              {champion.stats.defense}
            </li>
            <li>
              <span className="font-semibold text-white">Magic :</span>{" "}
              {champion.stats.magic}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChampionRotationDetailPage;
