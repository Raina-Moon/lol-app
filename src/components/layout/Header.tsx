"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
<header className="sticky top-0 bg-dark-navy text-white shadow-md border-b border-gold z-50">
<div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src="https://www.riotgames.com/darkroom/original/9a50f5b3bdcfb815580ef103ec9b6ee2:d49b78b12cf185e10127cdf81b144a00/lol-logo-rendered-hi-res.png"
              alt="League of Legends Logo"
              width={100}
              height={40}
              className="mr-4 cursor-pointer"
            />
          </Link>
        </div>

        <nav>
          <ul className="flex justify-start space-x-6 text-lg font-semibold">
            <li>
              <Link
                href="/rotation"
                className="hover:text-gold transition duration-300"
              >
                Champion Rotation
              </Link>
            </li>
            <li>
              <Link
                href="/champions"
                className="hover:text-gold transition duration-300"
              >
                Champion List
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="hover:text-gold transition duration-300"
              >
                Item List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
