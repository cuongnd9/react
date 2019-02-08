import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button color='primary'>Click!!!</Button>
        <Alert color='danger'>Error, try this again!</Alert>
      </div>
    );
  }
}

export default App;
