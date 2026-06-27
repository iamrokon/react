import Emoji from "./Emoji";

// // Inheritance in React
// export default class Text extends Emoji {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const decoratedText = this.addEmoji('I am Javascript Language', '😎');
//         return super.render(decoratedText);
//     }
// }

// Composition in React
export default function Text({ addEmoji, addBracket }) {
    let text = 'I am Javascript Programming Language';
    
    if (addEmoji) {
        text = addEmoji(text, '😎')
    }

    if (addBracket) {
        text = addBracket(text)
    }

    return <div>{text}</div>;
}
