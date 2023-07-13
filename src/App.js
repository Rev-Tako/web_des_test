import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import "./App.css";
import image from './botLogo.png';


import config from "./lambda/config";
import ActionProvider from "./lambda/text_input";
import MessageParser from "./lambda/MessageParser";

class App extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { loading: false, msg: null, value: '' };
    //     this.openCity = this.openCity.bind(this);
    // }
    // openCity(cityName) {
    //     // Declare all variables
    //     var i, tabcontent, tablinks;
    //     var event = this.event
    //     // Get all elements with class="tabcontent" and hide them
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < tabcontent.length; i++) {
    //         tabcontent[i].style.display = "none";
    //     }
    //
    //     // Get all elements with class="tablinks" and remove the class "active"
    //     tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //         tablinks[i].className = tablinks[i].className.replace(" active", "");
    //     }
    //     console.log(cityName)
    //     console.log(event)
    //     // Show the current tab, and add an "active" class to the button that opened the tab
    //     // document.getElementById(cityName).style.display = "block";
    //     //event.currentTarget.className += " active";
    // }

    render() {
        return (
                <div className='App-body' >
                    <div className="App-chatbox">
                            <Chatbot
                                config={config}
                                actionProvider={ActionProvider}
                                messageParser={MessageParser}
                                steps={[ ]}
                                botAvater={image}
                            />
                    </div>

                        <div className="App-form">
                            {/*<span> SCARLET is currently offline for maintenance.</span>*/}
                            {/*<div className="tab">*/}
                            {/*    <button className="tablinks" onClick={this.openCity("London")}>London</button>*/}
                            {/*    <button className="tablinks" onClick={this.openCity("Paris")}>Paris</button>*/}
                            {/*</div>*/}

                            {/*/!*Tab content*!/*/}
                            {/*<div id="London" className="tabcontent">*/}
                            {/*    <h3>London</h3>*/}
                            {/*    <p>London is the capital city of England.</p>*/}
                            {/*</div>*/}

                            {/*<div id="Paris" className="tabcontent">*/}
                            {/*    <h3>Paris</h3>*/}
                            {/*    <p>Paris is the capital of France.</p>*/}
                            {/*</div>*/}
                            <div className="App-scroller">
                                <h3>SCARLET Testing strategy</h3>
                                <p>
                                    What we are testing for:
                                </p>
                                <p>
                                   * Does the system respond appropriately?<br/>
                                   * Does the system continue to respond appropriately when queries are misspelled?<br/>
                                   * Does the system respond similarly to rephrased queries?<br/>
                                   * Does the system detect the user’s meaning and intent reliably?<br/>
                                </p>
                                <p>
                                    Query sets are split into command and retrieval interactions, with command interactions being the basic functions of SCARLET, and retrievals being utterances which illicit specific information.
                                </p>
                                <p>
                                    For the command tests, please use the /restart command after each input. Once these are completed you can move on to the retrieval interactions.<br/>
                                    For commands h. and m., please repeat with the blank filled with topics of your choosing.<br/>
                                    Note the topics below and I will collate these.<br/>
                                    Each time a command is used, please note whether the system responds appropriately. This will improve the captured data.<br/>
                                </p>
                                <p>
                                    Queries in the Retrieval set have one base query then variants thereof, this is to test robustness.
                                </p>
                                <p>
                                    Please work through the provided questions and mark the chatbot’s responses as True Positive (TP) if it responds exactly as expected, as False Positive (FP) if it responds as if a different input was detected, and as False Negative (FN) if it fails to answer when it should have been able to.
                                </p>
                                <p>
                                    The provided questions should all provoke a positive response so any failure to answer, including the failure message should be marked as a false negative.
                                </p>
                                <p>
                                    For question e. please fill the blank with a topic of your choosing, and repeat for up to 5 topics. Note the topics you select in the space below.
                                </p>
                                <p>
                                    It may be hard to tell if the system produces a false positive, if there is doubt, please ask Graye or Dimitar.
                                </p>
                                <p>
                                    When retrieving information, once a result set has been retrieved, please ask some questions about the data points that you feel are not answered by the data that has been returned. This will help us create a dataset of human-generated questions that we can use to improve our capture system.
                                </p>
                                <p>
                                    If you can write down these questions and whether the system answers them or not, that will help us greatly.
                                </p>
                                <p>
                                    You do not need to attempt the full set in one sitting, it may take some time. Any results you do gather can be sent back to me in a piecemeal fashion so that I can analyse and collate them.
                                </p>
                                <p>
                                    Thank you for taking part.
                                </p>
                                <h3>Command Interactions</h3>
                                <p>
                                    a. Hi
                                </p>
                                <p>
                                    b. hello
                                </p>
                                <p>
                                    c. hey
                                </p>
                                <p>
                                    d. hi there
                                </p>
                                <p>
                                    e. I want to learn
                                </p>
                                <p>
                                    f. I want to retrieve a lesson
                                </p>
                                <p>
                                    g. I want you to tell me something
                                </p>
                                <p>
                                    h. Tell me about ___
                                </p>
                                <p>
                                    i. Teach me something
                                </p>
                                <p>
                                    j. I want to tell you something
                                </p>
                                <p>
                                    k. I want to capture a lesson
                                </p>
                                <p>
                                    l. I want to give you a lesson
                                </p>
                                <p>
                                    m. I want to tell you about ___
                                </p>
                                <p>
                                    n. I want to teach you something
                                </p>
                                <h3>Retrieval Interactions</h3>
                                <p>
                                    a. Tell me about Propulsion?
                                </p>
                                <p>
                                    a.a) What is propulsion?
                                </p>
                                <p>
                                    a.b) What can you tell me about
                                    propulsion?
                                </p>
                                <p>
                                    a.c) Do you have information about
                                    propulsion?
                                </p>
                                <p>
                                    a.d) Do you have any lessons about
                                    propulsion?
                                </p>
                                <p>
                                    a.e) Who is propulsion? - (inappropriate
                                    phrasing)
                                </p>
                                <p>
                                    a.f) what is porpulsion? - (spelling error) a.g) what is proplusion? - (spelling error)
                                </p>
                                <p>
                                    b. Tell me about optics
                                </p>
                                <p>
                                    b.a) What is optics?
                                </p>
                                <p>
                                    b.b) What can you tell me about optics?
                                </p>
                                <p>
                                    b.c) What is optics the study of?
                                </p>
                                <p>
                                    b.d) Do you have any lessons about optics?
                                </p>
                                <p>
                                    b.e) What is otpics?
                                </p>
                                <p>
                                    b.f) Who is optics?
                                </p>
                                <p>
                                    c. Tell me about Buzz Aldrin
                                </p>
                                <p>
                                    c.a) Who is Buzz Aldrin?
                                </p>
                                <p>
                                    c.b) Who was Buzz Aldrin?
                                </p>
                                <p>
                                    c.c) What do you know about Buzz Aldrin?
                                </p>
                                <p>
                                    c.d) What is Buzz Aldrin?
                                </p>
                                <p>
                                    c.e) Who is Buz Aldrin?
                                </p>
                                <p>
                                    c.f) Who is Buzz Alrdin?
                                </p>
                                <p>
                                    d. Tell me about ESA
                                </p>
                                <p>
                                    d.a) What is ESA?
                                </p>
                                <p>
                                    d.b) Who is ESA?
                                </p>
                                <p>
                                    d.c) What do you know about ESA?
                                </p>
                                <p>
                                    e. What lessons do you have on ___
                                </p>
                                <h3>Capture Interactions</h3>
                                <p>
                                    a. I want to add a lesson
                                </p>
                                <p>
                                    a.a) The topic is ___
                                </p>
                                <p>
                                    a.b) The lesson is ___
                                </p>
                                <p>
                                    a.c) (add background) - yes
                                </p>
                                <p>
                                    a.d) The background is ___
                                </p>
                                <p>
                                    a.e) (is this correct?) - yes
                                </p>
                                <p>
                                    a.f) The topic is ___
                                </p>
                                <p>
                                    a.g) The lesson is ___
                                </p>
                                <p>
                                    a.h) (add background) - no
                                </p>
                                <p>
                                    a.i) (is this correct?) - yes
                                </p>
                                <p>
                                    a.j) The topic is ___
                                </p>
                                <p>
                                    a.k) The lesson is ___
                                </p>
                                <p>
                                    a.l) (add background) - yes
                                </p>
                                <p>
                                    a.m) The background is ___
                                </p>
                                <p>
                                    a.n) (is this correct?) - no
                                </p>
                                <p>
                                    a.o) make corrections at your discretion
                                </p>
                                <p>
                                    b. I want to add a lesson about ___
                                </p>
                                <p>
                                    b.a) Follow the above protocol as before
                                </p>
                            </div>
                        </div>

                </div>

        )
    }
}

export default App

/*class SCARLET_frontend extends Component {
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
            method: 'POST',
            body: JSON.stringify(this.state.value)
            }
        )
            .then(response => response.json())
            .then(output => {
                console.log(output.msg);
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
                            json.msg.replace(/"/g, '').replace(/~/g, '<br />')
                    }))
                } else if (json.ermsg && !(json.ermsg.length===0)) {
                    console.log(json.ermsg)
                    if ((json.error && !(json.error.length===0))) {
                    console.log(json.error)}
                } else {console.log('Error: This error message should never appear: previous: null, msg: null, ermsg: null')}
            } else {
                if (!(json.msg.length===0)) {
                    this.setState(prevState => ({
                        loading: false,
                        msg: json.msg,
                        previous: [...prevState.previous, json.msg]
                    }))
                    let scroll_logger = JSON.stringify(this.state.previous, null, 2)
                        .replace(/]/g, '')
                        .replace(/\[/g, '')
                        .replace(/~/g, '<br />')
                        .replace(/"/g, '')
                        .replace(/\n/g, '')
                        .replace(/\\/g, '')
                        .replace(/null/g, '')
                    scroll_logger = scroll_logger.replace(/>,/g, '>')

                    console.log(scroll_logger)
                    this.setState({loading: false,
                        output: scroll_logger,
                    })
                } else if (json.ermsg && !(json.ermsg.length===0) && json.msg.length===0) {
                    console.log(json.ermsg)
                } else {console.log('Error: This error message should never appear: previous: exists, msg: null, ermsg: null')}
            }
            this.setState({saved: false, loading: false, value: ''})
        })

    }

    render () {
        const {msg, previous, output, loading, saving, saved, failure} = this.state
      return (
          <div>
              <div className="App-button-holder">
                  <button className="App-button2" type="submit" onClick={this.handleClick("text_output")}>{saving ? "Saving conversation...": saved ? "Saved" : "Download history"}</button>
              </div>
          </div>
      )
    }*/
  /* render() {
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
            <input className='App-button' type="submit" value={loading ? "trying": failure ? "failed" : "Send"}/>
        </form>
        <br />

          <div className="App-button-holder">
            <button className="App-button2" type="submit" onClick={this.handleClick("text_output")}>{saving ? "Saving conversation...": saved ? "Saved" : "Download history"}</button>
          </div>
      </div>
    )
  }*/





/*function App () {
        return (
            <div className="App-chatbox">
                <div style={{ maxWidth: "300px" }}>
                    <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={MessageParser}
                    />
                </div>
            </div>
        )
}*/



