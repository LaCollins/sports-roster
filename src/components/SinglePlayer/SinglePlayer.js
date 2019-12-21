import React from 'react';
// import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';
import './SinglePlayer.scss';

class SinglePlayer extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

render() {
  const { player } = this.props;

  return(
    <div className="card text-white bg-dark playerCard">
      <img className="card-img-top" src={player.imageUrl} alt={player.name} />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">Position: {player.position}</p>
      </div>
    </div>
  );
  }
}

export default SinglePlayer;
