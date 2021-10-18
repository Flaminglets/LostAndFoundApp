import React, { useState } from "react";

const LoginRegister = () => {
    const [event, setEvent] = useState("");
    return (
        <div className={`L_container ${event}`} id="container">
            <div className="form-container  sign-up-container">
                <form>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="NAME" />
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD" />
                    <button type="submit">REGISTER</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form>
                    <h1>Login</h1>
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD" />
                    <p className="L_p">Forgot Your Password?</p>
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h3>Welcome Back!</h3>
                        <button className="ghost" id="signIn" onClick={() => setEvent("left-panel-active")}>
                            LOGIN
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h3>Need An Account?</h3>
                        <button className="ghost" id="signUp" onClick={() => setEvent("right-panel-active")}>
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;