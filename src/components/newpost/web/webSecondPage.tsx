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
    const handleSetUserFname = async (event) => { props.handlePageData({userFname: event.target.value}); const val = event.target.value; setUserFname(val); }
    const handleSetUserLname = async (event) => { props.handlePageData({userLname: event.target.value}); const val = event.target.value; setUserLname(val); }
    const handleSetPhoneNum = async (event) => { props.handlePageData({phoneNum: event.target.value}); const val = event.target.value; setPhoneNum(val); }
    const handleSetEmail = async (event) => { props.handlePageData({email: event.target.value}); const val = event.target.value; setEmail(val); }

    const handleSubmitClick = (event) => {
        
        props.handleSubmitClick();
    };

    const handlePrevClick = (event) => {
        props.handlePrevClick();
    }

    const initialState = {helperText: '', error: false};
    const [state, setState] = useState(initialState);

    const onChange = (event) => {
        props.handlePageData({phoneNum: event.target.value}); const val = event.target.value; setPhoneNum(val);
        if (event.target.value.length >= 10) {
            setState({ helperText: '', error: false })
        } else {
            setState({ helperText: 'Invalid format: ##########', error: true })
        }
    }

    

    return (
        <div className="newpost_form">
            
            <p className="newpost_form_label">Your Contact information</p>
            <TextField
                name="c_fname"
                id="outlined-required"
                label="First Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                onChange={handleSetUserFname}
                value={userFname}
            />
            <TextField
                name="c_lname"
                id="outlined-required"
                label="Last Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                onChange={handleSetUserLname}
                value={userLname}
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
                onChange={onChange}
                value={phoneNum}
                error={state.error}
                helperText={state.helperText}
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