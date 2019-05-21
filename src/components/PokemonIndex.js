import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }));
  }
  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.updateSearchTerm} showNoResults={false} />
        <br />
        <PokemonCollection
          pokemons={this.state.pokemons}
          searchTerm={this.state.searchTerm}
        />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
