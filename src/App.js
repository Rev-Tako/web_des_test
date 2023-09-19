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
                                <h4>Part 2</h4>
                                <p>
                                    What we are testing for:
                                </p>
                                <p>
                                    * Does the system respond accurately to user requests? <br/>
                                    * Is the interface understandable: can users reliably navigate to desired functions? <br/>
                                    * Does the system perform better for Laypeople or Expert Users? <br/>
                                    * Is system performance reflected by self-assessment? <br/>
                                </p>
                                <p>
                                    As Before, please be aware that SCARLET is not ChatGPT, it is not designed to hold conversations on topics outside of the ESA Lessons Learned format.
                                </p>
                                <p>
                                    The following tests are not as strictly prescribed as the last campaign. However, after every response from the bot, please type ‘TP’, ‘FP’, or ‘FN’, meaning True Positive, False Positive, or False Negative. This allows us to analyse the chatbot performance, compared to our expectations and also user expectations.<br/>
                                    Example 1: <br/> user: 'Tell me about optics' bot: 'what is the topic of the lesson?' - this would be a false positive <br/>
                                    Example 2: <br/> user: 'I want to enter a lesson' bot: 'That isn't something I know how to do' - this would be a false negative <br/>
                                    Example 3: <br/> user: 'What is the weather in Panama?' bot: 'That isn't something I know how to do' - this would be a true negative and does not need to be marked <br/>
                                    In the case of asking 'what is [topic]?', the chatbot may give a one word answer that is not strictly correct, as long as this word comes from the retrieved lesson this is actually a True Positive. <br/>
                                    The reason being that the current question answering system can't tell the difference, it's trying its best. I am working on capablity to tell it the returned answer is wrong and offer it a correction. <br/>
                                </p>
                                <p>
                                    It is important that you do not try to ask questions about a topic without first retrieving the stored lessons on that topic. This is because the Question Answering model relies on the context provided by the active lesson. Without this it cannot perform the QA function.<br/>
                                    You can retrieve lessons via ‘tell me about___’, ‘I want to learn about___’ or ‘teach me about ____’ prompts.
                                </p>
                                <p>
                                    When retrieving information, once a result set has been retrieved, please ask some questions about the data points that you feel are not answered by the data that has been returned. This will help us create a dataset of human-generated questions that we can use to improve our capture system.
                                </p>
                                <p>
                                    If you can write down these questions and whether the system answers them or not, that will help us greatly.
                                </p>
                                <p>
                                    You should also be able to add new lessons, once you have added a lesson, please retrieve that lesson and ask questions about it. You can rate the chatbot’s responses by typing ‘rating: [0-10]’.
                                </p>
                                <p>
                                    Thank you for your time.
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



