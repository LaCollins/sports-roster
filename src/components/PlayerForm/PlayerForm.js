import './PlayerForm.scss';
import React from 'react';
// import playerShape from '../../helpers/propz/playerShape';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  state = {
    playerName: '',
    playerPosition: '',
  }

  // savePlayerEvent = (e) => {
  //   e.preventDefault();
  //   const { addPlayer } = this.props;
  //   const newPlayer = {
  //     name: this.state.playerName,
  //     position: this.state.playerPosition,
  //     uid: authData.getUid(),
  //   };
  //   addPlayer(newPlayer);
  // }

  render() {
    return(
      <div className='popup'>
        <div className='inner'>
        <form className='col-6 offset-3 playerForm'>
        <div className="form-group">
          <label htmlFor="player-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={() => {}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-position">Player Position:</label>
          <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="Enter player position"
            value={this.state.playerPosition}
            onChange={() => {}}
          />
        </div>
        </form>
          <button className="btn btn-dark" onClick=
          {() => {}}>Save</button>
        </div>
      </div>
    );
  }
}

export default PlayerForm;
