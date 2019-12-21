import './TeamContainer.scss';
import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

class TeamContainer extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayerByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return(
      <div className="playerContainer row m-2 d-flex justify-content-around">{this.state.players.map((player) => <SinglePlayer key={player.id} player={player} />)}</div>
    );
  }
}

export default TeamContainer;
