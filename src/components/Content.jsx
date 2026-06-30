import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content({ theme }) {
    return (
        <div>
            <h1>This is content</h1>
            <Counter theme={theme}>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                    />
                )}
            </Counter>
        </div>
    )
}