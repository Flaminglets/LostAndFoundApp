import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FlamingoNextButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#A2AA9D'
    },
})

const FlamingoSubmitButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#455451'
    },
})


export default function WebSecondPage(props) {
    
    const [userFname, setUserFname] = useState(props.userFname || '');
    const [userLname, setUserLname] = useState(props.userLname || '');
    const [phoneNum, setPhoneNum] = useState(props.phoneNum || '');
    const [email, setEmail] = useState(props.email || '');
    const handleSetUserFname = async (event) => { props.handlePageData({userFname: event.target.value}); setUserFname(event.target.value); setUserFnameError('')}
    const handleSetUserLname = async (event) => { props.handlePageData({userLname: event.target.value}); setUserLname(event.target.value); setUserLnameError('')}
    const handleSetPhoneNum = async (event) => { props.handlePageData({phoneNum: event.target.value}); setPhoneNum(event.target.value); setPhoneNumError('')}
    const handleSetEmail = async (event) => { props.handlePageData({email: event.target.value}); setEmail(event.target.value); setEmailError('')}

    const [userFnameError, setUserFnameError] = useState('');
    const [userLnameError, setUserLnameError] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmitClick = (event) => {
        if (userFname == '') {setUserFnameError("Please enter first name")}
        else if (userLname == '') {setUserLnameError("Please enter last name")}
        else if (phoneNum == '') {setPhoneNumError("Please enter phone number")}
        else if (phoneNum === String) {setPhoneNumError("Please enter phone number")}
        else if (email == '') {setEmailError("Please enter email")}

        if (userFname != '' && 
        userLname != '' &&
        phoneNum != '' &&
        email != '') {
            props.handleSubmitClick();
        }
    };

    const handlePrevClick = (event) => {
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
                onChange={handleSetUserFname}
                value={userFname}
                error={!!userFnameError}
                helperText={userFnameError}
            />
            <TextField
                name="userLname"
                id="outlined-required"
                label="Last Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                onChange={handleSetUserLname}
                value={userLname}
                error={!!userLnameError}
                helperText={userLnameError}
            />
            <TextField
                required={true}
                name="phoneNum"
                id="outlined-required"
                label="Phone Number"
                variant="filled"
                color="success"
                placeholder="(000) 000-0000"
                className="newpost_form_element"
                onChange={handleSetPhoneNum}
                value={phoneNum}
                error={!!phoneNumError}
                helperText={phoneNumError}
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
                onChange={handleSetEmail}
                value={email}
                error={!!emailError}
                helperText={emailError}
            />
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </FlamingoNextButton>
                <FlamingoSubmitButton type="submit" variant="contained" color="success" onClick={handleSubmitClick} className="newpost_button_next newpost_button_submit">
                    Submit
                </FlamingoSubmitButton>
            </div>
        </div>
    )
}