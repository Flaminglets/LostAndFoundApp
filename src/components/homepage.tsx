import React, { useState } from "react";

const Homepage = () => {
    const [event, setEvent] = useState("");
    return (
        <div className="home_div">
            <div className="home_backcolor"></div>
            <div className="home_main">
                <p className="home_title">Today's latest cases</p>

                <div className="home_dashboard">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti
                    rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore 
                    ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit 
                    fuga dolor id.
                    </p>
                </div>
            </div>
            <div className="home_content"></div>
        </div>
    );
};

export default Homepage;