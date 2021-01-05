import React from "react";
import dynamic from "next/dynamic";
const HOST = process.env.NEXT_PUBLIC_HOST;
const Domains = dynamic(() => import("src/pages/domains"));
const Word = dynamic(() => import("src/pages/word"));

const Home = function HomePage() {
  return <>{HOST === "wordio.co" ? <Word /> : <Domains />}</>;
};

export default Home;
