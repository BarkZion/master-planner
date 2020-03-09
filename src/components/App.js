import React, { Component } from 'react';
import PlannerList from "./PlannerList";

class App extends Component {
  render() {
      return (
          <div className="App">
              <h2>Hello MasterPlanner</h2>
              <PlannerList title="test"/>
          </div>
      );
  }
}

export default App;
