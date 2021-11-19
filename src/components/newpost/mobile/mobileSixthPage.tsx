import { useState } from 'react';
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

export default function SixthPage(props) {
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

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
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
                    required
                    name="phoneNum"
                    id="outlined-required"
                    label="Phone Number"
                    variant="filled"
                    color="success"
                    className="newpost_form_element"
                    onChange={handleSetPhoneNum}
                    value={phoneNum}
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
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </FlamingoNextButton>
                <FlamingoSubmitButton variant="contained" onClick={handleSubmitClick} className="newpost_button_next newpost_button_submit">
                    Submit
                </FlamingoSubmitButton>
            </div>
        </div>
    )
}