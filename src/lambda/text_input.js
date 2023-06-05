import axios from "axios"
export async function handler(event, context) {
    try {
        this.state = {}
        if (!(event.body.replace(/"/g, '').length===0)) {
            this.setState({input: event.body.replace(/"/g, '')});
            this.setState({
                response: await axios({
                    method: 'POST',
                    url: "https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/",
                    body: this.state.input,
                })
            });
        } else  {
                    return { // no input handling
                        statusCode: 200,
                        body: JSON.stringify({ msg: '', ermsg: 'Error: no input'})
                    }
                }

    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 200,
            body: JSON.stringify({error: err.message,
                msg: '',
                ermsg: 'Error: disconnect between netlify and DEVWEB API'})
        }
    }

    if (this.state.response.data.SCARLET_output && !(this.state.response.data.SCARLET_output.length===0)) {
        return {
            statusCode: 200,
            body: JSON.stringify({msg: ('user: ' + this.state.input + '~ ~ SCARLET: ' + this.state.response.data.SCARLET_output + '~ ~')}),
        }
    } else if (this.state.response.data.ermsg && !(this.state.response.data.ermsg.length===0)) {
        return {
            statusCode: 200,
            body: JSON.stringify({msg: '', ermsg: this.state.response.data.ermsg})
        }
    } else {
        return { // no input handling
            statusCode: 200,
            body: JSON.stringify({
                msg: '',
                ermsg: "Error: This error message should never appear: connection to DEVWEB: succeeded ermsg: null, msg: null"})
        }
    }
}
