// import React from "react";

import withCounter from "./HOC/withCounter";

// export default class HoverCounter extends React.Component {
//     state = {
//         count: 0
//     };
//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }))
//     }
//     render() {
//         const { count } = this.state;
//         return (
//             <div>
//                 <button type="button" onMouseDown={this.incrementCount}>Hovered {count} times</button>
//             </div>
//         )
//     }
// }
const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    )
}
export default withCounter(HoverCounter);