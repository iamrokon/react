import Content from "./Content";
import React from "react";

// export default function Section({ theme }) {
//     return (
//         <div>
//             <h1>This is section</h1>
//             <Content theme={theme} />
//         </div>
//     )
// }

// export default function Section() {
//     return (
//         <div>
//             {/* <h1>This is section</h1> */}
//             <Content />
//         </div>
//     )
// }

export default class Section extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        console.log('Section rendered');
        return (
            <div>
                {/* <h1>This is section</h1> */}
                <Content />
            </div>
        )
    }
}