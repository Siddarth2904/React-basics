import { useState } from "react";
import Shopping from "./Shopping";

const Login = ({ user }) => {
    const [showShopping, setShowShopping] = useState(false);

    if (showShopping) {
        return <Shopping user={user} />;
    }

    return (
        <div>
            <h3>Welcome back, {user.name}!</h3>
            <button onClick={() => setShowShopping(true)}>
                Start Shopping
            </button>
        </div>
    );
};

export default Login;