const axios = require('axios')
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        if (localStorage.getItem('userID') === null){
            this.user_ID = Math.floor(Math.random() * 1000000000000);
            localStorage.setItem('userID', this.user_ID.toString())
        } else {
            this.user_ID = parseInt(localStorage.getItem('userID'))
        }
        this.iterant = 0
    }


    async Handler(message){
        try {
            var initFlag = false
            // console.log('user:' + this.user_ID + '_' + this.iterant)
            const lowercase = message.toLowerCase();
            if (lowercase === '/restart'){
            //     console.log('switch to reinitialise')
            //     this.reinitialise();
            //     console.log('back to handler')
                    initFlag = true
            }
            console.log(this.user_ID)
            // var conversation_number = this.user_ID + '_' + this.iterant
            //console.log('new number: ' + conversation_number)
            const scarlet_response =  await axios.post(
                'https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/',
                {
                    body: message,
                    user_id: this.user_ID,
                    reinit: initFlag,
                },
            )
            console.log(await scarlet_response)
            var scarlet = await scarlet_response.data.body.SCARLET_output
            console.log(await scarlet)
            for (const inner of await scarlet)
            {
                const output = this.createChatBotMessage(inner.text);
                this.addMessageToState(await output);
            }
        } catch (error) {
            const output = this.createChatBotMessage('no return from SCARLET: ' + error.message);
            this.addMessageToState(await output);
        }
    }


    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

    // async textSave(){
    //     try {
    //         console.log('textSave TRY')
    //         const saved = await axios.get(
    //             'https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/save')
    //         console.log(await saved)
    //         const output = this.createChatBotMessage(await saved.data.body.SCARLET_output[0].text);
    //         this.addMessageToState(output);
    //     } catch (err) {
    //         console.log('textSave CATCH')
    //         const output = this.createChatBotMessage('Conversation not saved: ' + err.message);
    //         this.addMessageToState(output);
    //     }
    // };
    reinitialise() {
        try{
            console.log('try initialise')
            this.setState((prevState) => ({
                iterant: prevState.iterant + 1
            }))
            console.log('updated user:' + this.user_ID + '_' + this.iterant)
        } catch (err) {
            console.log('catch initialise')
            console.log(err.message)
        }
        // try {
        //     const uplink = await axios.get(
        //         'https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/uplink')
        //     const output = this.createChatBotMessage(await uplink.data.body.SCARLET_output[0].text);
        //     this.addMessageToState(output);
        // } catch (err){
        //     const output = this.createChatBotMessage('bot inactive, initialise failed: ' + err.message);
        //     this.addMessageToState(output);
        // }
    };
}

export default ActionProvider;







/*export async function handler(event, context) {
    try {
        this.state = {}
        if (!(event.body.replace(/"/g, '').length===0)) {
            this.state.input = event.body.replace(/"/g, '')
            this.state.response =  await axios({
                    method: 'POST',
                    url: "https://devweb2022.cis.strath.ac.uk/pqb20197-nodejs/",
                    body: this.state.input,
            })
        } else  {
            return { // no input handling
                statusCode: 200,
                body: JSON.stringify({ msg: '', ermsg: 'Error: no input'})
            }
        }

    } catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: err.message,
                msg: ('user: ' + this.state.input + '~ ~ SCARLET: An error occurred accessing my API'),
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
            body: JSON.stringify({
                msg: ('user: ' + this.state.input + '~ ~ SCARLET: An error occurred accessing my knowledge graph'),
                ermsg: this.state.response.data.ermsg})
        }
    } else {
        return { // no input handling
            statusCode: 200,
            body: JSON.stringify({
                msg: ('user: ' + this.state.input + '~ ~ SCARLET: No response available'),
                ermsg: "Did not return response or error"})
        }
    }
}
*/