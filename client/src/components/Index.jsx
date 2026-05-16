import { useState } from "react";
import Login from "./Login";

const Index = () => {
    const user = {
        name: 'Siddarth',
        balance: 30000
    };

    const [showLogin, setShowLogin] = useState(false);

    if (showLogin) {
        return <Login user={user} />;
    }

    return (
        <div>
            <h1>Welcome to Shopping App</h1>
            <button onClick={() => setShowLogin(true)}>
                Login
            </button>
        </div>
    );
};

export default Index;