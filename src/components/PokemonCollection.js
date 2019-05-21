import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  filterPokemons = () => {
    const pokemons = this.props.pokemons;
    const searchTerm = this.props.searchTerm.toLowerCase();
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
  };
  render() {
    const filteredPokemons = this.filterPokemons();
    return (
      <Card.Group itemsPerRow={6}>
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
