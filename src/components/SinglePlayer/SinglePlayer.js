import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';
import './SinglePlayer.scss';

class SinglePlayer extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  setEditMode = (e) => {
    const { setEditMode, setPlayerToEdit, player } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
  }

render() {
  const { player } = this.props;

  return(
    <div>
    <div className="card text-white bg-dark playerCard">
      <img className="card-img-top" src={player.imageUrl} alt={player.name} />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">Position: {player.position}</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-outline-info" onClick={this.setEditMode}>Edit</button>
    </div>
    </div>
   </div>
  );
  }
}

export default SinglePlayer;
