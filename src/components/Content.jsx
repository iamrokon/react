import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../context/themeContext";
import React from "react";

// export default function Content({ theme }) {
//     return (
//         <div>
//             <h1>This is content</h1>
//             <Counter theme={theme}>
//                 {(counter, incrementCount) => (
//                     <HoverCounter
//                         count={counter}
//                         incrementCount={incrementCount}
//                         theme={theme}
//                     />
//                 )}
//             </Counter>
//         </div>
//     )
// }

// export default function Content() {
//     return (
//         <div>
//             <h1>This is content</h1>
//             <Counter>
//                 {(counter, incrementCount) => (
//                     <ThemeContext.Consumer>
//                         {({ theme, switchTheme }) => (
//                             <HoverCounter
//                                 count={counter}
//                                 incrementCount={incrementCount}
//                                 theme={theme}
//                                 switchTheme={switchTheme} 
//                             />
//                         )}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     )
// }

// export default class Content extends React.Component {
//     componentDidMount() {
//         console.log(this.context);
//     }
//     render() {
//         const { theme, switchTheme } = this.context;
//         return (
//             <div>
//                 {/* <h1>This is content</h1> */}
//                 <Counter>
//                     {(counter, incrementCount) => (
//                         <HoverCounter
//                             count={counter}
//                             incrementCount={incrementCount}
//                             theme={theme}
//                             switchTheme={switchTheme}
//                         />
//                     )}
//                 </Counter>
//             </div>
//         )
//     }
// }
// Content.contextType = ThemeContext;

export default function Content() {
    const context = React.useContext(ThemeContext);
    const { theme, switchTheme } = context;
    console.log('Content rendered');
    return (
        <div>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}