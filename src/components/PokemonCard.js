import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    front: true
  };
  handlleClick = () => {
    this.setState({
      front: !this.state.front
    });
  };

  getBackImage = () => {};
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={
                this.state.front
                  ? this.props.pokemon.sprites.front
                  : this.props.pokemon.sprites.back
              }
              onClick={this.handlleClick}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
