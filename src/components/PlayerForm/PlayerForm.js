import './PlayerForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
// import playerShape from '../../helpers/propz/playerShape';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    closeForm: PropTypes.func,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImg: '',
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { addPlayer } = this.props;
    const newPlayer = {
      name: this.state.playerName,
      position: this.state.playerPosition,
      imageUrl: this.state.playerImg,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imgChange = (e) => {
    e.preventDefault();
    this.setState({ playerImg: e.target.value });
  }

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
            onChange={this.nameChange}
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
            onChange={this.positionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-img">Player Image Url:</label>
          <input
            type="text"
            className="form-control"
            id="player-image"
            placeholder="Enter URL for Player Image"
            value={this.state.playerImg}
            onChange={this.imgChange}
          />
        </div>
        </form>
          <div className="justify-content-around row d-flex"><button className="btn btn-dark" onClick=
          {this.savePlayerEvent}>Save</button>
          <button className="btn btn-dark" onClick={this.props.closeForm}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerForm;
