import React from 'react';
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <main className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </main>
  );
}

export default App;
