export async function handler(event, context) {
    if (!(event.body.replace(/"/g, '').length===0)) { // send user input to SCARLET here
        const data = event.body
        // SCARLET call goes here scarlet
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: ("user: " + data + ', , SCARLET: returned item , ') })
        }
    } else  {
        return { // no input handling
            statusCode: 200,
            body: JSON.stringify({ msg: ''})
        }
    }
}
