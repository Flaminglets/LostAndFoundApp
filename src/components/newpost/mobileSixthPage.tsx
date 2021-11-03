import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SixthPage(props) {
    const [c_fname, setC_fname] = useState('');
    const [c_lname, setC_lname] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const handleSetC_fname = async (event) => { const val = event.target.value; setC_fname(val); }
    const handleSetC_lname = async (event) => { const val = event.target.value; setC_lname(val); }
    const handleSetPhoneNum = async (event) => { const val = event.target.value; setPhoneNum(val); }
    const handleSetEmail = async (event) => { const val = event.target.value; setEmail(val); }


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
                    className="newpost_form_element"
                    onChange={handleSetC_fname}
                    value={c_fname}
                />
                <TextField
                    name="c_lname"
                    id="outlined-required"
                    label="Last Name"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetC_lname}
                    value={c_lname}
                />
                <TextField
                    required
                    name="phoneNum"
                    id="outlined-required"
                    label="Phone Number"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetPhoneNum}
                    value={phoneNum}
                />
                <TextField
                    required
                    name="email"
                    id="outlined-required"
                    label="Email"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetEmail}
                    value={email}
                />
            </div>
            <div className="newpost_buttons">
                <Button variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </Button>
                <Button variant="contained" onClick={handleSubmitClick} className="newpost_button_next newpost_button_submit">
                    Submit
                </Button>
            </div>
        </div>
    )
}