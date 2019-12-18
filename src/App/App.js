import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"><NavBar />
    <div className="authedContainer">
      <img className="logo" src="https://user-images.githubusercontent.com/51382883/71045838-1981b600-20fc-11ea-99e6-268460213f63.png" />
    </div>
  </div>
  )
}

export default App;
