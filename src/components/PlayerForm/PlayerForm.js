import './PlayerForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    closeForm: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    updatePlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImg: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ playerName: playerToEdit.name, playerPosition: playerToEdit.position, playerImg: playerToEdit.imageUrl });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.playerToEdit.id !==this.props.playerToEdit.id) && this.props.editMode) {
      this.setState({ playerName: this.props.playerToEdit.name, playerPosition: this.props.playerToEdit.position, playerImg: this.props.playerToEdit.imageUrl })
    }
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      name: this.state.playerName,
      position: this.state.playerPosition,
      imageUrl: this.state.playerImg,
      uid: authData.getUid(),
    }
    updatePlayer(playerToEdit.id, updatedPlayer);
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
    const { editMode } = this.props;
    
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
          <div className="justify-content-around row d-flex">
          { 
            (editMode) ? (<button className="btn btn-dark" onClick= {this.updatePlayerEvent}>Update</button>) : (<button className="btn btn-dark" onClick= {this.savePlayerEvent}>Save</button>)
          }
          <button className="btn btn-dark" onClick={this.props.closeForm}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerForm;
