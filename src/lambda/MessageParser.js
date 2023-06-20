class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        console.log(message);
        if (!(message.length === 0)){
            this.actionProvider.Handler(message);
        }
    }
}

export default MessageParser;