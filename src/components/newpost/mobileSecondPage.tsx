import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SecondPage(props) {
    const [date, setDate] = useState('2020-05-24');
    const [time, setTime] = useState('07:30');
    const handleSetDate = async (event) => { const val = event.target.value; setDate(val); }
    const handleSetTime = async (event) => { const val = event.target.value; setTime(val); }

    const handleNextClick = (event) => {
        props.handleNextClick();
    };

    const handlePrevClick = (event) => {
        props.handlePrevClick();
    }

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
                <p className="newpost_form_label">When was the last time you saw your missing pet/person?</p>
                <div className="newpost_form_lasttime">
                    <TextField
                        name="date"
                        id="outlined-required"
                        label="Select date"
                        variant="filled"
                        className="newpost_form_element newpost_form_element_dt"
                        type="date"
                        //defaultValue="2020-05-24"
                        onChange={handleSetDate}
                        value={date}
                    />
                    <TextField
                        name="time"
                        id="outlined-required"
                        label="Select date"
                        variant="filled"
                        className="newpost_form_element newpost_form_element_dt"
                        type="time"
                        // defaultValue="07:30"
                        onChange={handleSetTime}
                        value={time}
                    />
                </div>
            </div>
            <div className="newpost_buttons">
                <Button variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </Button>
            </div>
        </div>
    )
}