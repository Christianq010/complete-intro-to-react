import React, { Component } from "react";
// components
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  handleSearchChange = event => {
    // don't change state directly
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows.map(show => (
            <ShowCard key={show.imdbID} show={show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
