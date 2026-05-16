import { useState } from "react";

const Payment = ({ user }) => {
    const [currentBalance, setCurrentBalance] = useState(user.balance);
    const BILL_AMOUNT = 5000;

    const handlePayment = () => {
        if (currentBalance >= BILL_AMOUNT) {
            setCurrentBalance(prevBalance => prevBalance - BILL_AMOUNT);
            alert(`Payment successful! Remaining balance: ₹${currentBalance - BILL_AMOUNT}`);
        } else {
            const shortAmount = BILL_AMOUNT - currentBalance;
            alert(`Insufficient balance! Need ₹${shortAmount} more to complete payment.`);
        }
    };

    return (
        <div>
            <h1>Payment Details</h1>
            <div>
                <p><strong>Current Balance:</strong> ₹{currentBalance}</p>
                <p><strong>Bill Amount:</strong> ₹{BILL_AMOUNT}</p>
                <p><strong>After Payment:</strong> ₹{currentBalance - BILL_AMOUNT}</p>
            </div>
            <button onClick={handlePayment}>
                Pay ₹{BILL_AMOUNT}
            </button>
        </div>
    );
};

export default Payment;