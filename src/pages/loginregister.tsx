import React, { useState } from "react";
import Header from "../components/header";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

export default function LoginRegister({ providers, csrfToken }) {

    const [event, setEvent] = useState("");

    return (
        <div>
            <Header />
            <div className={`L_container ${event}`} id="container">

                <div className="form-container  sign-up-container">
                    <form className="login-signup-form" method="post" action="/api/auth/signup">
                        <h1 className="h1-title">Create Account</h1>
                        <input className="input-fields" type="text" placeholder="NAME" />
                        <input className="input-fields" type="email" placeholder="EMAIL" />
                        <input className="input-fields" type="password" placeholder="PASSWORD" />
                        <br />
                        <button className="submit-button" type="submit">REGISTER</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form className="login-signup-form" method="post" action="/api/auth/signin/credentials">
                        <h1 className="h1-title">Login</h1>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <input className="input-fields" type="email" placeholder="EMAIL" />
                        <input className="input-fields" type="password" placeholder="PASSWORD" />
                        <a className="forgot-password" href="#">Forgot Your Password?</a>
                        {Object.values(providers).map((provider: any) => {
                            if (provider.name === "Credentials") {
                                return;
                            }
                            return (
                                <div key={provider.name}>
                                    <button className="provider-button" onClick={() => signIn(provider.id)}>
                                        Sign in with {provider.name}
                                    </button>
                                </div>
                            );
                        })}
                        <button className="submit-button" type="submit">LOG IN</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h3>Welcome Back!</h3>
                            <button className="switch-button" id="signIn" onClick={() => setEvent("left-panel-active")}>
                                LOGIN
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h3>Need An Account?</h3>
                            <button className="switch-button" id="signUp" onClick={() => setEvent("right-panel-active")}>
                                REGISTER
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


LoginRegister.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });
    //console.log("This Session", session);

    if (session && res) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(),
        csrfToken: await csrfToken(context),
    };
};
