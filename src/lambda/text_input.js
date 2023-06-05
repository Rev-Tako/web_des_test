import axios from "axios"
export async function handler(event, context) {
    try {
        if (!(event.body.replace(/"/g, '').length===0)) {
            const input = event.body.replace(/"/g, '');
            const response = await axios({
                method: 'POST',
                url: "https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/",
                body: input,
            });
            let data = response.data.msg
            if (response.data.SCARLET_output && !(response.data.SCARLET_output.length===0)) {
                data = response.data.SCARLET_output;
            }
            return {
                statusCode: 200,
                body: JSON.stringify({msg: ('user: ' + input + '~ ~ SCARLET: ' + data + '~ ~')}),
            }
        } else  {
            return { // no input handling
                statusCode: 200,
                body: JSON.stringify({ msg: '', alert: 'no input'})
            }
        }
    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 200,
            body: JSON.stringify({error: err.message,
                msg: '',
                alert: 'Something went wrong, contact Graye or Dimitar to ensure SCARLET server is online'})
        }
    }
}
