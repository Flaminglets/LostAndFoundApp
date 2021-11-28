import React, { useState } from "react";
import { providers, signIn, getSession, getCsrfToken } from "next-auth/client";

// By Danny @Flaminglets
// Sign in page for users
// The providers are mapped based of [...nextauth].js content.
// Only Google and Facebook is provided as a login method.

export default function LoginRegister({ providers, csrfToken }) {
    const [event] = useState("");

    return (
        <div>
            <div className={`L_container ${event}`} id="container">
                <div className="form-container sign-in-container">
                    <form className="login-signup-form">
                        <h1 className="h1-title">Login/Register</h1>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        {Object.values(providers).map((provider: any) => {
                            return (
                                <div key={provider.name}>
                                    <button className="provider-button" onClick={() => signIn(provider.id)}>
                                        Sign in with {provider.name}
                                    </button>
                                </div>
                            );
                        })}
                    </form>
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


// Get the initial props of LoginRegister based on the context.
// @params context, context provides the props with a request or response
// @return an undefined session, and a Promise for providers and csrftoken
LoginRegister.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

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
        csrfToken: await getCsrfToken(context),
    };
};
