import { useState } from "react";
import Payment from "./Payment";

const Cart = ({ user }) => {
    const [showPayment, setShowPayment] = useState(false);

    if (showPayment) {
        return <Payment user={user} />;
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Your cart total: ₹5000</p>
            <button onClick={() => setShowPayment(true)}>
                Proceed to Payment
            </button>
        </div>
    );
};

export default Cart;