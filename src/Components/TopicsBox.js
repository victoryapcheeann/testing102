import React, {Component} from 'react';

class TopicsBox extends Component {
  state = { topics: ''};
  
  handleChange = event => {
      this.setState({ topics: event.target.value })
  }
  
  handleSubmit = event => {
      event.preventDefault(); //Prevent the page from auto-reload
      // TODO: Call an action creator 
      // TODO: Save the comment
      this.setState({ topics: "" })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Topics</h4>
        <textarea onChange={this.handleChange} value={this.state.topics}/> 
        <div>
          <button>Submit Topics</button>
        </div>
      </form>
    );
  }
}

export default TopicsBox