import React, { useState } from "react";

const Header = () => {
    const [event, setEvent] = useState("");
    return (
        <div className="header_div">
            <div className="header_container">
                <div className="header_hamburger_wrapper">
                    <button className="hamburger-btn hamburger--collapse" id="hamburger" type="button">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                            <div className="hamburger-inner"></div>
                            <div className="hamburger-inner"></div>
                        </div>
                    </button>
                </div>

                <div className="header_right">
                    <div className="header_logo_div">
                        <a className="header_logo" href="/">Lost and Found</a>
                    </div>

                    <div className="header_nav_wrapper">
                        <ul className="header_nav">
                            <li className="header_list"><a href="/posts">Pets</a></li>
                            <li className="header_list"><a href="/posts">People</a></li>
                        </ul>
                    </div>
                </div>

                <div className="header_left">
                    <div className="header_search">
                        <p>search</p>
                    </div>
                    <div className="header_user">
                        <ul>
                            <li className="header_list"><a href="/loginregister">LogIn / Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;