class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        if (!(message.length === 0)) {
            //const lowercase = message.toLowerCase();
            // if (lowercase === 'save'){
            //     this.actionProvider.textSave();
            // } else
            // if (lowercase === '/restart'){
            //     this.actionProvider.reinitialise();
            //     this.actionProvider.Handler(message);
            // } else {
            this.actionProvider.Handler(message);
            //}
        }
    }
}

export default MessageParser;