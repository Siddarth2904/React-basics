import { useState } from "react";
import Cart from "./Cart";

const Shopping = ({ user }) => {
    const [showCart, setShowCart] = useState(false);

    if (showCart) {
        return <Cart user={user} />;
    }

    return (
        <div>
            <h3>Welcome {user.name}!</h3>
            <p>Browse our amazing products</p>
            <button onClick={() => setShowCart(true)}>
                View Cart
            </button>
        </div>
    );
};

export default Shopping;