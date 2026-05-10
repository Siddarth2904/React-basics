import { useState } from "react"

const Header = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default Header
