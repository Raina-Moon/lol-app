LOL-App

LOL-App은 Riot Games API와 Data Dragon을 활용하여 리그 오브 레전드 챔피언 로테이션 정보와 상세 정보 등을 제공하는 웹 애플리케이션입니다.

LOL-App is a web application that provides information about the weekly free champion rotation and detailed statistics for each champion in the game "League of Legends." This project leverages Riot Games API and Data Dragon to fetch and display real-time data.

 Features

 Weekly Champion Rotation: View the current free-to-play champions for the week

Champion Details: Access detailed information about each champion, including stats, abilities, and lore


기능 / Technologies Used

Frontend: React, Next.js, Tailwind CSS

State Management: React Query (Tanstack Query)

Data Fetching: Riot Games API, Data Dragon

공개 URL / Deployment

개발한 프로젝트는 Vercel을 통해 공개되었습니다.

This project is deployed using Vercel. Access the live application here:

https://lol-1vaz68ogk-raina-moons-projects.vercel.app

프로젝트 구조 / Project Structure

📦lol-app
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂pages
 ┃ ┣ 📂styles
 ┃ ┣ 📂utils
 ┃ ┗ 📂types
 ┣ .eslintrc.json
 ┣ .gitignore
 ┣ next.config.mjs
 ┣ package.json
 ┣ README.md
 ┣ tailwind.config.ts
 ┗ tsconfig.json
--------------------------------------------------------------
 public/: Static assets

src/components/: Reusable React components

src/pages/: Next.js page components

src/styles/: Styling files

src/utils/: Utility functions for data fetching and processing

src/types/: TypeScript type definitions


