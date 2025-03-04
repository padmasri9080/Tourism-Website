import { useState, useContext } from "react";
import { AuthContext } from "../Component/AuthContext";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { email };
        login(userData);
        navigate("/");
    };

    return (
        <div className="login-page">
            <div className="login-container"> {/* Updated Class Name */}
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Signup</a></p>
            </div>
        </div>
    );
};

export default Login;
