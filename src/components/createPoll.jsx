import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePoll extends Component {
  state = { 
    yourQuestion: '',
    options: {}
   }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submittted!");
    if (this.props.onCreatePoll) {
      this.props.onCreatePoll("hello");
    }
  }

  render() { 
    return ( 
      <div>
        <Link className="btn btn-primary" to="/">Back to home</Link>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Textarea1">Your question:</label>
            <textarea className="form-control" id="Textarea1" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="option1">Option 1:</label>
            <input type="text" className="form-control" id="option1" />
          </div>                    
          <div className="form-group">
            <label htmlFor="option2">Option 2:</label>
            <input type="text" className="form-control" id="option2" />
          </div>                    
          <div className="form-group">
            <label htmlFor="option3">Option 3:</label>
            <input type="text" className="form-control" id="option3" />
          </div>                    
          <div className="form-group">
            <label htmlFor="option4">Option 4:</label>
            <input type="text" className="form-control" id="option4" />
          </div> 
          <button className="btn btn-primary">Submit Poll</button>                   
        </form>
      </div>
     );
  }
}
 
export default CreatePoll;