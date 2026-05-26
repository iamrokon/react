import { useState } from "react";

export default function Increment() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 id="display">{count}</h1>
            <div>
                <button id="button" onClick={() => setCount(count + 1)}>Increment +</button>
            </div>
        </div>
    );
}