import React from "react";
// import { text } from "stream/consumers";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        // // Inheritance code
        // let text = 'I am the Emoji Component';
        // if (override) {
        //     text = override
        // }
        // return <div>{text}</div>;
        return this.props.children({ addEmoji: this.addEmoji })
    }
}