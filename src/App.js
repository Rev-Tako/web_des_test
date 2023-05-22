import React, { Component } from "react"
import logo from "./strath_logo.png"
import logo2 from "./esa_grey.png"
import "./App.css"
/*import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';*/

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      alert('You entered the text: ' + this.state.value);
      event.preventDefault();
    }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Binging..." : "Say WORDS"}</button>
        <button onClick={this.handleClick("middle")}>{loading ? "Banging..." : "middle button"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Bonging..." : "Make a dumb joke"}</button>
        <br />
        <span>{msg}</span>
          <br />
          <form onSubmit={this.handleSubmit}>
              <label>
                  Input:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
          </form>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo2" alt="logo" /><img src={logo2} className="App-logo" alt="logo" />
          <p>
            SCARLET
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
