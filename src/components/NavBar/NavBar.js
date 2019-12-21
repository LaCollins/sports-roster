import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';

import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  buttonSwap = () => {
    const { authed } = this.props;
    if (!authed) {
      return (<Auth />)
    } else if (authed) {
      return (<div className="btn btn-outline-info" onClick={this.logMeOut}>Log Out</div>)
    }
  }

  render() {
    return(
    <div className="NavBar">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="https://user-images.githubusercontent.com/51382883/71045838-1981b600-20fc-11ea-99e6-268460213f63.png" alt="Mythic Dungeons" />
        </a>
        {this.buttonSwap()}
      </nav>
    </div>
    );
  }
}

export default NavBar;
