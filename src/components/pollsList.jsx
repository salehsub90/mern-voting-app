import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PollsList extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Link className="btn btn-primary" to="/create">
          Create your own Poll
        </Link>
        <p>Polls list should be here</p>
      </div>
    );
  }
}
 
export default PollsList;