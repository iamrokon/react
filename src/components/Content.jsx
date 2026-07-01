import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../context/themeContext";

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

export default function Content() {
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <ThemeContext.Consumer>
                        {(theme) => (
                            <HoverCounter
                                count={counter}
                                incrementCount={incrementCount}
                                theme={theme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    )
}