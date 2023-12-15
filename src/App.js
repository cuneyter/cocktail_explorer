import React from 'react';
import { robots } from "./robots";
import CardList from "./CardList";

const App = () => {
  return (
    <main className="tc">
      <h1>RoboFriends</h1>
      <CardList robots={robots} />
    </main>
  );
}

export default App;
