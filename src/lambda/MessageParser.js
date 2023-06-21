class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        console.log('inside parser');
        if (!(message.length === 0)){
            this.actionProvider.Handler(message.text);
        }
    }
}

export default MessageParser;