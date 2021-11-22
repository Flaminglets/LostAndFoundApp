import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FlamingoNextButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#A2AA9D'
    },
})

export default function SecondPage(props) {
    const [date, setDate] = useState(props.date || '2021-01-01');
    const [time, setTime] = useState(props.time || '00:00');

    const handleSetDate = async (event) => { 
        props.handlePageData({date: event.target.value});
        const val = event.target.value; setDate(val);
    }
    const handleSetTime = async (event) => { 
        props.handlePageData({time: event.target.value});
        const val = event.target.value; setTime(val);
    }

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
                        color="success"
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
                        color="success"
                        className="newpost_form_element newpost_form_element_dt"
                        type="time"
                        //defaultValue="07:30"
                        onChange={handleSetTime}
                        value={time}
                    />
                </div>
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </FlamingoNextButton>
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}