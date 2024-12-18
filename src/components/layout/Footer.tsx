"use client";

import React from "react";
import Link from "next/link";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-dark-navy text-gray-400 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              About Riot Games
            </h4>
            <p className="text-sm">
              Riot Games was founded in 2006 to develop, publish, and support
              the most player-focused games in the world.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/riotgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/riotgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/riotgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <p className="text-sm">
              Riot Games, Inc.
              <br />
              12345 Somewhere Lane
              <br />
              Los Angeles, CA 90000
              <br />
              <a
                href="mailto:support@riotgames.com"
                className="hover:text-gold transition duration-300"
              >
                support@riotgames.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Riot Games, Inc. All Rights Reserved.
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={scrollToTop}
            className="inline-block text-gold font-bold text-lg hover:underline transition duration-300"
          >
            To the Surface
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
