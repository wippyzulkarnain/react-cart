import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Counter extends Component {
  state ={
    count : 0,
    imageUrl: 'https://picsum.photos/200'
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageURL} />
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
    
  }
  formatCount(){
    const {count} = this.state;
    return count === 0 ? "Zero" : count
  }
}

export default Counter;
