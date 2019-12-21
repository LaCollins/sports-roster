import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import NavBar from '../components/NavBar/NavBar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamContainer from '../components/TeamContainer/TeamContainer';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render () {
    const { authed } = this.state;
    return (
      <div className="App"><NavBar authed={authed} />
      <div className="authedContainer">
      {
      (authed) ? (<TeamContainer />) : (<img className="logo" src="https://user-images.githubusercontent.com/51382883/71045838-1981b600-20fc-11ea-99e6-268460213f63.png" />)
    }
      </div>
    </div>
    )
  }
}

export default App;
