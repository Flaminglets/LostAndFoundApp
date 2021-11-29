/*
By Yoonseo @Flaminglets
this file contains first page of post form for mobile size window used in NewPost and UpdatePost function
getting inputs from user that includes: type (pet or person)
validates input and show error message when input value is not valid, and prevents from going to next page
*/

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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

// @params: useState data.type from NewPost and UpdatePost functions
// @return: type form
export default function FirstPage(props) {
    const [type, setType] = useState(props.type || "");
    const handleSetType = (event) => { 
        setType(event.target.value); 
        props.handlePageData({type: event.target.value});
        setTypeError("")
    }

    const [typeError, setTypeError] = useState("");

    const handleNextClick = () => {
        if(type == "") { setTypeError("Please select type"); }

        if (type != "") {
            props.handleNextClick();
        }
    };

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
                <p className="newpost_form_label">What have you lost?</p>
                <TextField
                    name="type"
                    required
                    select
                    color="success"
                    id="outlined-required"
                    label="Pet / Person"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetType}
                    value={type}
                    error={!!typeError}
                    helperText={typeError}
                    sx={{margin: "1vw 0"}}
                >
                    <MenuItem className="newpost_form_element" value="pet">Pet</MenuItem>
                    <MenuItem className="newpost_form_element" value="person">Person</MenuItem>
                </TextField>
            </div>
            <div className="newpost_buttons_2">
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw 0", width: "41vw", fontSize: "2.5vw", height: "2.3rem"}, 
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}

