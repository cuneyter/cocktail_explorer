import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading...</h1>;
    }

    return (
      <main className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </main>
    );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
}

export default App;
