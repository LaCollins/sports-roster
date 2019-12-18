import React from 'react';

import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return(
    <div className="NavBar">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="https://user-images.githubusercontent.com/51382883/71045838-1981b600-20fc-11ea-99e6-268460213f63.png" alt="Mything Dungeons" />
        </a>
        <button className="btn btn-outline-info">Log In</button>
      </nav>
    </div>
    );
  }
}

export default NavBar;
