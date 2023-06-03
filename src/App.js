import React, { Component } from "react"
import "./App.css"


class SCARLET_frontend extends Component {
  constructor(props) {
    super(props)
    this.state = {saved: false, failure: false, loading: false, saving: false, msg: null, msg2: null, value: '', previous: [], output: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearClick(){
      alert('clear');
  }
  handleClick = api=> e => {
      e.preventDefault();
      this.setState({saving: true, saved: false});
      fetch("/.netlify/functions/" + api, {
          method: 'POST',
          body: JSON.stringify(this.state.output)})
          .then(response => response.json())
          .then(outlink => {
              alert('close this alert or press enter to download history as ' + outlink.name +'.txt  ' +
                  'to restart just reload the page, please email me with any output files.')
              const textToBLOB = new Blob([outlink.data], { type: "text/plain" });
              let newLink = document.createElement("a");
              newLink.download = outlink.name;

              if (window.webkitURL != null) {
                  newLink.href = window.webkitURL.createObjectURL(textToBLOB);
              } else {
                  newLink.href = window.URL.createObjectURL(textToBLOB);
                  newLink.style.display = "none";
                  document.body.appendChild(newLink);
              }

              newLink.click();
              this.setState({saving: false, saved: true, loading: false})
          })


  }

    handleClick2 = api=> e => {
        e.preventDefault();
        this.setState({loading: true, failure: false});
        fetch("/.netlify/functions/" + api, {
            method: 'GET'
            }
        )
            .then(response => response.json())
            .then(output => {
                console.log(output.body);
                this.setState({loading: false, failure: false});
            })}

  handleChange(event) {
      this.setState({saved: false, value: event.target.value, loading: false});
    }
    handleSubmit = api=> e => {
      e.preventDefault();
      this.setState({saved: false, loading: true});
      fetch("/.netlify/functions/" + api, {
          method: 'POST',
          body: JSON.stringify(this.state.value)
      })
        .then(response => response.json())
        .then(json => {
            if (this.state.previous.length===0){
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
            this.setState({saved: false, loading: false, value: ''})
        })

    }

  render() {
    const {msg, previous, output, loading, saving, saved, failure} = this.state

    return (
      <div>
        <div className="App-scroller" id="scroller">
            <span id="inner" dangerouslySetInnerHTML={{ __html: output }}/>
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
            <button className="App-button2" type="submit" onClick={this.handleClick("text_output")}>{saving ? "Saving conversation...": saved ? "Saved" : "Download history"}</button>
          </div>
          <div className="App-button-holder">
              <button className="App-button2" type="submit" onClick={this.handleClick2("async-dadjoke")}>{loading ? "trying": failure ? "failed" : "success"}</button>
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
