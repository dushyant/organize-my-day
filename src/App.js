import React, { Component } from 'react';
import './App.css';

import MustDoToday from './components/MustDoToday';
import Tasks from './components/Tasks';
import Appointments from './components/Appointments';
import Health from './components/Health';
import Notes from './components/Notes';
import ToBuy from './components/ToBuy';

class App extends Component {
  render() {
    return (
      <div className="App w3-myfont">
        <header className="w3-container w3-blue w3-center App-header ">
          <h1 className="w3-margin w3-xxxlarge">
            <i className="fa fa-clock-o"></i>
            Organize My Day
          </h1>
        </header>
        <div className="w3-container w3-padding-24">
          <div className="w3-row">
              <div className="w3-row-padding">
                <div className="w3-half">
                  <MustDoToday />
                  <Appointments />
                  <Notes />
                </div>
                <div className="w3-half">
                  <Tasks />
                  <Health />
                  <ToBuy />
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
