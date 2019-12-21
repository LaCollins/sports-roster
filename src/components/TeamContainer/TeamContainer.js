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
    playerToEdit: {},
    editMode: false,
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

  addPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((error) => console.error(error));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((error) => console.error(error));
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  setShowPlayerForm = (e) => {
    e.preventDefault();
    this.setState({ showPlayerForm: true });
  }

  closeForm = (e) => {
    e.preventDefault();
    this.setState({ showPlayerForm: false });
  }

  render() {
    return(
      <div>
      <button className="btn btn-info m-2" onClick={this.setShowPlayerForm}>Add New Player</button>
      { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} closeForm={this.closeForm} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} />}
      <div className="playerContainer row m-2 d-flex justify-content-around">{this.state.players.map((player) => <SinglePlayer key={player.id} player={player} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} deletePlayer={this.deletePlayer} />)}</div>
      </div>
    );
  }
}

export default TeamContainer;
