import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PollsList from './pollsList';
import CreatePoll from './createPoll';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={PollsList} />
          <Route path="/create" component={CreatePoll} />  
        </div>      
      </Router>
    );
  }
}

export default App;
