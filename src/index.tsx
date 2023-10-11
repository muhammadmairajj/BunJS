import React, { useState } from "react";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
    const [count, setCount] = useState<Number>(0);

    const incrementCount = () => {
        setCount((prev: any) => prev + 1);
    }

    const decrementCount = () => {
        setCount((prev: any) => prev - 1);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={incrementCount}>IncrementCount</button>
            <button onClick={decrementCount}>DecrementCount</button>
        </div>
    )
}

root.render(<App />);



