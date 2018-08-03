import React from "react";
// components
import ShowCard from "./ShowCard";
import preload from "../data.json";

const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}
  </div>
);

export default Search;
