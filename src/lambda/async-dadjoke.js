// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler(event, context) {
  try {
    const response = await axios.get("https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/");
    const data = response.data;
    return {
      statusCode: response.status,
      body: JSON.stringify({msg: ("user: " + event.body + ', , SCARLET: '+ data + ', ')}),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 200,
      body: JSON.stringify(err.message) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
