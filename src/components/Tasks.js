import React, { Component } from 'react';

import './widget.css';

class Tasks extends Component {
  render() {
    return (
      <div className="w3-padding-16">
        <div className="w3-card widget">
          <header className="w3-container w3-blue">
            <h1>Tasks</h1>
          </header>
          <div className="w3-container">
            <p>Lorem ipsum...</p>
          </div>
          <footer className="w3-container w3-light-gray">
            <h5>Footer</h5>
          </footer>
        </div>
      </div>
    );
  }
}

export default Tasks;
