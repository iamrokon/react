import { useState } from "react";

export default function Fruits() {
    const [fruit, setFruit] = useState('');
    const [fruits, setFruits] = useState([]);

    return (
        <div className="container">
            <ul id="fruits">
                {fruits.sort().map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <br />
            <p><input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)}/></p>
            <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
        </div>
    )
}