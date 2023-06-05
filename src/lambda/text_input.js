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
                return {
                    statusCode: 200,
                    body: JSON.stringify({msg: ('user: ' + input + '~ ~ SCARLET: ' + data + '~ ~')}),
                }
            } else if (response.data.ermsg && !(response.data.ermsg.length===0)) {
                return { // no input handling
                    statusCode: 200,
                    body: JSON.stringify({msg: '', ermsg: response.data.ermsg})
                }
            } else {
                return { // no input handling
                    statusCode: 200,
                    body: JSON.stringify({
                        msg: '',
                        ermsg: "Error: This error is special, it shouldn't even be accessible, well done"})
                }
            }
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
}
