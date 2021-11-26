import React from 'react';

export default function Footer() {
    return (
        <div className="footer_div">
            <p className="footer_about_title">ABOUT US</p>
            <p className="footer_about_content">
                We help you find what you've lost.
                <br/>
                With this software you will be reunited with your lost pet or person.
                <br/>
                We know that you value them, so we will value you too.
            </p>
            <div className="footer_line1"></div>
            <p className="footer_contact_title">CONTACT US</p>
            <p className="footer_contact_content">Address : VCC Downtown, 250 W Pender St, Vancouver, BC</p>
            <p className="footer_contact_content">Phone Number : +1 (604) 871-7000</p>
            <p className="footer_contact_content">Email : lnf@lnfinc.com</p>
            <p className="footer_contact_content">Operating hours : Monday to Friday, 9:00am to 5:00pm</p>
            <div className="footer_line2"></div>
            <p className="footer_copyright">Some other information that needs to be added - this is copy right</p>
        </div>
    );
}