// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler(event, context) {
  try {
    if (!(event.body.replace(/"/g, '').length===0)) {
      const response = await axios.get("https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/");
      let data = response.data.msg
      if (!(response.data.SCARLET_output===0)) {
        data = response.data.SCARLET_output;
      }
      const input = event.body.replace(/"/g, '');
      return {
        statusCode: response.status,
        body: JSON.stringify({msg: ('user: ' + input + ', , SCARLET: ' + data + ', ')}),
      }
    } else  {
      return { // no input handling
        statusCode: 200,
        body: JSON.stringify({ msg: ''})
      }
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify(err.message) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
