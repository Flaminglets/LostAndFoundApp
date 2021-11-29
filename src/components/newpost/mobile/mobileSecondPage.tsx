/*
By Yoonseo @Flaminglets
this file contains second page of post form for mobile size window used in NewPost and UpdatePost function
getting inputs from user that includes: last seen date and time
validates input and show error message when input value is not valid, and prevents from going to next page
*/

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material';

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

const FlamingoNextButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#A2AA9D"
    },
})

// @params: useState data.(date, time) from NewPost and UpdatePost functions
// @return: last seen date and time form
export default function SecondPage(props) {
    const [date, setDate] = useState(props.date || "2021-01-01");
    const [time, setTime] = useState(props.time || "00:00");

    const handleSetDate = async (event) => { 
        props.handlePageData({date: event.target.value});
        setDate(event.target.value);
        setDateError("")
    }
    const handleSetTime = async (event) => { 
        props.handlePageData({time: event.target.value});
        setTime(event.target.value);
        setTimeError("")
    }

    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");

    const handleNextClick = () => {
        if(date == "2021-01-01") {setDateError("Please select date"); }
        else if(time == "00:00") { setTimeError("Please select time"); }

        if (date != "2021-01-01" && time != "00:00") {
            props.handleNextClick();
        }
    };

    const handlePrevClick = () => {
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
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "50vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Previous
                </FlamingoNextButton>
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "50vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}