import './TeamContainer.scss';
import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import PlayerForm from '../PlayerForm/PlayerForm';

class TeamContainer extends React.Component {
  state = {
    players: [],
    showPlayerForm: false,
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

  setShowPlayerForm = (e) => {
    e.preventDefault();
    this.setState({ showPlayerForm: true });
  }

  render() {
    return(
      <div>
      <button className="btn btn-info m-2" onClick={this.setShowPlayerForm}>Add New Player</button>
      { this.state.showPlayerForm && <PlayerForm />}
      <div className="playerContainer row m-2 d-flex justify-content-around">{this.state.players.map((player) => <SinglePlayer key={player.id} player={player} />)}</div>
      </div>
    );
  }
}

export default TeamContainer;
