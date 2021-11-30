/* By Abbe, Harman, Yoonseo @Flaminglets
this file contains second page of post form used in NewPost and UpdatePost function
getting inputs from user that includes
 ((user's) firstName, lastName, phoneNumber, email)
validates input and show error message when input value is not valid, and prevents from going to next page */

import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material';

// for mui style
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});

// button style
const FlamingoNextButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#A2AA9D"
    },
})

const FlamingoSubmitButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#455451"
    },
})

// @params: useState data from NewPost and UpdatePost functions
// @return: user contact information form
export default function WebSecondPage(props) {
    const [userFname, setUserFname] = useState(props.userFname || "");
    const [userLname, setUserLname] = useState(props.userLname || "");
    const [phoneNum, setPhoneNum] = useState(props.phoneNum || "");
    const [email, setEmail] = useState(props.email || "");
    const [userFnameError, setUserFnameError] = useState("");
    const [userLnameError, setUserLnameError] = useState("");
    const [phoneNumError, setPhoneNumError] = useState("");
    const [emailError, setEmailError] = useState("");

    // set input value to data
    const handleSetUserFname = async (event) => { props.handlePageData({userFname: event.target.value}); setUserFname(event.target.value); setUserFnameError("")}
    const handleSetUserLname = async (event) => { props.handlePageData({userLname: event.target.value}); setUserLname(event.target.value); setUserLnameError("")}
    const handleSetPhoneNum = async (event) => { props.handlePageData({phoneNum: event.target.value}); setPhoneNum(event.target.value); setPhoneNumError("")}
    const handleSetEmail = async (event) => { props.handlePageData({email: event.target.value}); setEmail(event.target.value); setEmailError("")}

    // validate name
    const isNameValid = (name) => { 
        var valid = /^[a-z]+$/i.test(name);
        return valid;
    }

    // validate phone number
    const isPhoneValid = (phoneNum) => {
        var valid = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phoneNum);
        return valid;
    }

    const isEmailValid = (email) => {
        var valid = /\S+@\S+\.\S+/.test(email);
        return valid;
    }

    // validat input & go to last page
    const handleSubmitClick = () => {
        if (userFname == "") {setUserFnameError("Please enter a first name")}
        if(!isNameValid(userFname)) { setUserFnameError("Please enter a valid first name")}
        if (userLname == "") {setUserLnameError("Please enter a last name")}
        if(!isNameValid(userLname)) { setUserLnameError("Please enter a valid last name") }
        if (phoneNum == "") {setPhoneNumError("Please enter a phone number")}
        if(!isPhoneValid(phoneNum)){ setPhoneNumError("Please enter a valid phone number.") }
        if (phoneNum.length < 10) {setPhoneNumError("Please enter a phone number with minimum 10 numbers")}
        if (email == "") {setEmailError("Please enter an email")}
        if (!isEmailValid(email)) {setEmailError("Please enter an valid email")}

        if (userFname != "" && 
        userLname != "" &&
        phoneNum != ""  &&
        email != "" &&
        isNameValid(userFname) &&
        isNameValid(userLname) &&
        isPhoneValid(phoneNum) &&
        isEmailValid(email)
        ) {
            props.handleSubmitClick();
        }
    };

    const handlePrevClick = () => {
        props.handlePrevClick();
    }

    return (
        <div className="newpost_form">
            <p className="newpost_form_label">Your Contact information</p>
            <TextField
                name="userFname"
                id="outlined-required"
                label="First Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                inputProps={{ maxLength:  25}}
                onChange={handleSetUserFname}
                value={userFname}
                error={!!userFnameError}
                helperText={userFnameError}
                sx={{margin: "0.5rem 0"}}
            />
            <TextField
                name="userLname"
                id="outlined-required"
                label="Last Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                inputProps={{ maxLength:  25}}
                onChange={handleSetUserLname}
                value={userLname}
                error={!!userLnameError}
                helperText={userLnameError}
                sx={{margin: "0.5rem 0"}}
            />
            <TextField
                required
                name="phoneNum"
                id="outlined-required"
                label="Phone Number"
                variant="filled"
                color="success"
                className="newpost_form_element"
                placeholder="000-000-0000"
                inputProps={{ minLength: 10, maxLength: 12, }}
                onChange={handleSetPhoneNum}
                value={phoneNum}
                error={!!phoneNumError}
                helperText={phoneNumError}
                sx={{margin: "0.5rem 0"}}
            />
            <TextField
                required
                name="email"
                id="outlined-required"
                type="email"
                label="Email"
                variant="filled"
                color="success"
                className="newpost_form_element"
                inputProps={{ maxLength:  50 }}
                onChange={handleSetEmail}
                value={email}
                error={!!emailError}
                helperText={emailError}
                sx={{margin: "0.5rem 0"}}
            />
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "40vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Previous
                </FlamingoNextButton>
                <FlamingoSubmitButton type="submit" variant="contained" color="success" onClick={handleSubmitClick} className="newpost_button_next newpost_button_submit"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "40vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#5F7470", margin: "1rem 0 1rem 1rem", color:"white", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Finish
                </FlamingoSubmitButton>
            </div>
        </div>
    )
}