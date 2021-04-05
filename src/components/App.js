import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PollsList from './pollsList';
import CreatePoll from './createPoll';
import NavTitle from '../components/navTitle';
import * as PollsAPI from '../utils/PollsAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/App.css';

class App extends Component {  

  state = {
    polls: []
  }

  componentDidMount() {
    PollsAPI.getAll().then((polls) => this.setState({ polls }));
  }

  //create/add new polls and concat the added poll into the array fo polls
  createPoll = (poll) => {
    PollsAPI.create(poll).then(poll => {
      this.setState(state => ({
        polls: state.polls.concat([ poll ])
      }))
    })
  }

  render() {
    const title = "Voting Dojo";
    return (
      <Router>
        <div className="container">
          <NavTitle title={title} />          
          <Route path="/" exact component={PollsList} />
          <Route path="/create" render={ ({ history }) => (
            <CreatePoll 
              onCreatePoll={(poll) => {
                this.createPoll(poll)
                history.push('/')
              }} 
            />
          )}/>  
        </div>      
      </Router>
    );
  }
}

export default App;
