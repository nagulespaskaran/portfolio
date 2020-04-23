import React, { Component } from "react";
import Projects from "./Projects";

class App extends Component {
  state = { displayBio: false };

  // constructor() {
  //   super();
  //   this.state = { displayBio: false };

  //   console.log("Component this", this);
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
    //this.state.displayBio = !this.state.displayBio; do not modify state directly
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My Name is Naguleswaran, I'm a Software Developer</p>
        <p>I'm always looking forward to working on meaningful projects </p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Auckland, and I code everyday</p>
            <p>
              My favourit language is Javascript, I think React.js is awesome.
            </p>
            <p>besides coding, I also love music and movies</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
      </div>
    );
  }
}

export default App;
