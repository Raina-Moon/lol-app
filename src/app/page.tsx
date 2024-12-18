"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-dark-navy text-white overflow-hidden">
      <video
        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* 브라우저가 비디오를 지원하지 않는 경우 나타남 */}
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <Image
          src="https://www.riotgames.com/darkroom/original/9a50f5b3bdcfb815580ef103ec9b6ee2:d49b78b12cf185e10127cdf81b144a00/lol-logo-rendered-hi-res.png"
          alt="League of Legends Logo"
          width={500}
          height={200}
          priority
          className="object-contain mb-8"
        />

        <Link href="/rotation">
          <button className="relative bg-gold text-white text-lg font-semibold px-6 py-3 outline outline-1 outline-white outline-offset-4">
          View This week&apos;s Rotation
          </button>
        </Link>
      </div>
    </div>
  );
}
