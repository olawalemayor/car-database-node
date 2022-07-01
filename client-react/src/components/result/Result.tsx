import React from "react";
import SearchResult from "./SearchResult";

export default function Result() {
  return (
    <div className="w-full h-full border pt-5 px-5 bg-gradient-to-bl from-black to-blue-400">
      <div className="border-b-4 border-red-600 py-2">
        <h2 className="text-white text-2xl lg:text-5xl">SEARCH RESULT:</h2>
      </div>

      <div className="">
        <SearchResult />
      </div>
    </div>
  );
}
