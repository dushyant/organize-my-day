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
          <ul className="w3-ul">
            <li className="w3-display-container">
              <input className="w3-input w3-border-0" type="text" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tasks;
