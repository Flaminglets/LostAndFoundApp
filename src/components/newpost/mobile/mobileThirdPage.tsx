/*
By Yoonseo @Flaminglets
this file contains third page of post form for mobile size window used in NewPost and UpdatePost function
getting inputs from user that includes: last seen location
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

// @params: useState data.location from NewPost and UpdatePost functions
// @return: location form
export default function ThirdPage(props) {
    const [location, setLocation] = useState(props.location || "");
    const handleSetLocation = async (event) => { 
        props.handlePageData({location: event.target.value});
        setLocation(event.target.value); 
        setLocationError("");
    }

    const [locationError, setLocationError] = useState("");

    const handleNextClick = () => {
        if(location == "") { setLocationError("Please enter location"); }

        if (location != "") {
            props.handleNextClick();
        }
    };

    const handlePrevClick = () => {
        props.handlePrevClick();
    }

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
                <p className="newpost_form_label">Where have you lost pet/person?</p>
                <TextField
                    required
                    name="location"
                    id="outlined-required"
                    label="Location"
                    variant="filled"
                    color="success"
                    className="newpost_form_element"
                    inputProps={{ maxLength:  120}}
                    onChange={handleSetLocation}
                    value={location}
                    error={!!locationError}
                    helperText={locationError}
                    sx={{margin: "1vw 0"}}
                />
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