import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "TruRide Mobile Application",
    href: "/projects",
    tags: [
      "ReactNative",
      "TypeScript",
      "MongoDB",
      "Kotlin",
      "Firebase",
      "Nodejs",
      "Expressjs",
      "Figma",
    ],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Text Emotion Detection",
    href: "/projects",
    tags: [
      "HTML",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Flask Micro Framework",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "AI Chatbot",
    href: "/projects",
    tags: ["APIs", "Python", "HTML", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "TruRide Mobile Application",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "It is a innovation from Rapido and Uber transport technologies.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontre",
    liveWebsiteHref: "https://jsontree.vercel.ap",
  },
  {
    name: "Text Emotion Detection",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "It is emotion capturer from given text, so that any AI ChatBots can understand the emotion in our prompt.",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanba",
    liveWebsiteHref: "https://kannban-board.vercel.ap",
  },
  {
    name: "AI Chatbot",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "AI Chatbot that can assist you in movie suggestions, games, and quizzes. It uses open source APIs to get data.",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGame",
    liveWebsiteHref: "https://manygames.vercel.ap",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
