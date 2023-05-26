import React, { Component } from "react"
import "./App.css"

class SCARLET_frontend extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, loading2: false, msg: null, msg2: null, value: '', previous: [], output: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick = api=> e => {
      e.preventDefault();
      this.setState({loading2: true});
      fetch("/.netlify/functions/" + api, {
          method: 'POST',
          body: JSON.stringify(this.state.output)})
          .then(response => response.json())
          .then(json => this.setState({loading2: false}))}

  handleChange(event) {
      this.setState({value: event.target.value, loading: false});
    }
    handleSubmit = api=> e => {
      e.preventDefault();
      this.setState({loading: true});
      fetch("/.netlify/functions/" + api, {
          method: 'POST',
          body: JSON.stringify(this.state.value)
      })
        .then(response => response.json())
        .then(json => {
            if (this.state.previous.length===0){
                console.log('message length = ' + json.msg.length)
                if (!(json.msg.length===0)) {
                    this.setState(prevState => ({
                        loading: false, msg: json.msg, previous: [...prevState.previous, json.msg], output:
                            json.msg.replace(/"/g, '').replace(/,/g, '<br />')
                    }))
                }

            } else {
                if (!(json.msg.length===0)) {
                    this.setState(prevState => ({
                        loading: false,
                        msg: json.msg,
                        previous: [...prevState.previous, json.msg]
                    }))
                    this.setState({loading: false,
                        output:
                            JSON.stringify(this.state.previous, null, 2)
                                .replace(/]/g, '')
                                .replace('[', '')
                                .replace(/,/g, '<br />')
                                .replace(/"/g, '')
                                .replace(/\\/g, '')
                                .replace(/null/g, '')
                    })
                }
            }
        })
        this.setState({loading: false, value: ''})
    }

  render() {
    const {msg, previous, output, loading, loading2 } = this.state

    return (
      <div>
        <div className="App-scroller">
            <span dangerouslySetInnerHTML={{ __html: output }}/>
        </div>
        <br />
        <form className="App-form" onSubmit={this.handleSubmit("text_input")}>
            <label>
                <input className='App-input_box' type="text" value={this.state.value} onChange={this.handleChange}   placeholder='Type Here'/>
            </label>
            <input className='App-button' type="submit" value={loading ? "..." : "Send"}/>
        </form>
        <br />

          <div className="App-button-holder">
            <button className="App-button2" onClick={this.handleClick("text_output")}>{loading2 ? "Saving conversation..." : "Save"}</button>
          </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <html>
      <header className='App-header'>
          <p>
              SCARLET
          </p>
      </header>
      <body className="App-body">
            <SCARLET_frontend />
      </body>
      </html>
    )
  }
}

export default App
