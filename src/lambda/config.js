import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";


const config = {
    botName: "SCARLET",
    customComponents: {
        header: () => <div style={{backgroundColor: '#666666', color: '#000000'}}>SCARLET</div>,
        //botAvatar: () => <botAvatar {...props}>S</botAvatar>
    },
    initialMessages: [
        createChatBotMessage(`Say "hello" to start`, {
            widget: "options",
        }),
    ],
    /*widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: 'none',
            widgetFunc: (props) => <Options {...props}/>,
        },
    ],*/
};

export default config;