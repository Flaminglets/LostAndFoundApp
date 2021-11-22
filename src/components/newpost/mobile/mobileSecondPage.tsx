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
        setDate(event.target.value);
        setDateError('')
    }
    const handleSetTime = async (event) => { 
        props.handlePageData({time: event.target.value});
        setTime(event.target.value);
        setTimeError('')
    }

    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');

    const handleNextClick = (event) => {
        if(date == '2021-01-01') {setDateError("Please select date"); }
        else if(time == '00:00') { setTimeError("Please select time"); }

        if (date != '2021-01-01' && time != '00:00' ) {
            props.handleNextClick();
        }
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
                        required
                        name="date"
                        id="outlined-required"
                        label="Select date"
                        variant="filled"
                        color="success"
                        className="newpost_form_element newpost_form_element_dt"
                        type="date"
                        onChange={handleSetDate}
                        value={date}
                        error={!!dateError}
                        helperText={dateError}
                    />
                    <TextField
                        required
                        name="time"
                        id="outlined-required"
                        label="Select time"
                        variant="filled"
                        color="success"
                        className="newpost_form_element newpost_form_element_dt"
                        type="time"
                        onChange={handleSetTime}
                        value={time}
                        error={!!timeError}
                        helperText={timeError}
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