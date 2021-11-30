/* By Yoonseo @Flaminglets
this file contains second page of post form for mobile size window used in NewPost and UpdatePost function
getting inputs from user that includes: last seen date and time
validates input and show error message when input value is not valid, and prevents from going to next page */

import { useState } from 'react';
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

// @params: useState data.(date, time) from NewPost and UpdatePost functions
// @return: last seen date and time form
export default function SecondPage(props) {
    const [date, setDate] = useState(props.date || "2021-01-01");
    const [time, setTime] = useState(props.time || "00:00");
    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");

    // set input value to data
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

    // validat input & go to next page
    const handleNextClick = () => {
        var dateObj = new Date();
        // current date
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        // input date
        var date_year = parseInt(date.substr(0, 4));
        var date_month = parseInt(date.substr(5,2));
        var date_day = parseInt(date.substr(8, 2));

        if(date == "2021-01-01") {setDateError("Please select date"); }
        if(time == "00:00") { setTimeError("Please select time"); }
        if(date_year > year ) {setDateError("Invalid year selected"); }
        if(date_year == year) {
            if(date_month > month) {
                setDateError("Invalid month selected")
            } 
        }
        if(date_year == year) {
            if(date_month == month) {
                if(date_day > day) {
                    setDateError("Invalid day selected")
                }
            }
        }

        if (date != "2021-01-01" && 
        date_year <= year &&
        time != "00:00") {
            if (date_year <= year) {
                if (date_month <= month) {
                    if (date_day <= day) {
                        props.handleNextClick();
                    } 
                }
            }
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
                        sx={{margin: "1vw 0"}}
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
                        sx={{margin: "1vw 0"}}
                    />
                </div>
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw 0", width: "39.6vw", fontSize: "2.5vw", height: "2.3rem"}, 
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Previous
                </FlamingoNextButton>
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw 0", width: "39.6vw", fontSize: "2.5vw", height: "2.3rem"}, 
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}