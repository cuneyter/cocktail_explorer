import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      searchField: "",
      error: null,
    };
  }

  render() {
    const { cocktails, searchField } = this.state;
    const filteredCocktails = cocktails.filter((cocktail) => {
      return cocktail.strDrink
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if (this.state.error) {
      return <h1>Oops! Error: {this.state.error}</h1>;
    }

    return !cocktails.length ? (
      <h1>Loading...</h1>
    ) : (
      <main className="tc">
        <h1 className="f1">Cocktail Explorer</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList cocktails={filteredCocktails} />
          </ErrorBoundry>
        </Scroll>
      </main>
    );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
      .then((data) => {
        const cocktails = Array.isArray(data.drinks) ? data.drinks : [];
        this.setState({ cocktails: cocktails });
      })
      .catch((error) => this.setState({ error: error.message }));
  }
}

export default App;
