import React, { useState } from "react";
import { getProviders, signIn, getSession } from "next-auth/client";

// By Danny @Flaminglets
// Sign in page for users
// The providers are mapped based of [...nextauth].js content.
// Only Google and Facebook is provided as a login method.

export default function LoginRegister({ providers }) {
    const [event] = useState("");

    return (
        <div>
            <div className={`L_container ${event}`} id="container">
                <div className="form-container sign-in-container">
                    <div className="login-signup-form">
                        <h1 className="h1-title">Login/Register</h1>
                        {Object.values(providers).map((provider: any) => {
                            return (
                                <div key={provider.name}>
                                    <button className="provider-button" onClick={() => signIn(provider.id)}>
                                        Sign in with {provider.name}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Get the LoginRegister based on the context.
// @params context, context provides the props with a request or response
// @return an undefined session, and a Promise for providers and csrftoken
export async function getServerSideProps(context) {
    const { req, res } = context;
    const session = await getSession({ req });
    const providers = await getProviders();

    if (session && res) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
    }

    return {
        props: {
            providers,
            session: null,
        }
    };
};