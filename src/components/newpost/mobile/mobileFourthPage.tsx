/* By Yoonseo @Flaminglets
this file contains fourth page of post form for mobile size window used in NewPost and UpdatePost function
getting inputs from user that includes: (lost pet/person's) firstName, lastName, gender, age, weight, height, eyecolor, additional info
validates input and show error message when input value is not valid, and prevents from going to next page */

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
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

// @params: useState data.(lostFname, lostLname, gender, age, weight, height, eyecolor, additional) from NewPost and UpdatePost functions
// @return: lost pet/person detail information (lostFname, lostLname, gender, age, weight, height, eyecolor, additional) form
export default function FourthPage(props) {
    const [lostFname, setLostFname] = useState(props.lostFname || "");
    const [lostLname, setLostLname] = useState(props.lostLname || "");
    const [gender, setGender] = useState(props.gender || "");
    const [otherGender, setOtherGender] = useState(props.otherGender || "");
    const [age, setAge] = useState(props.age || "");
    const [weight, setWeight] = useState(props.weight || "");
    const [height, setHeight] = useState(props.height || "");
    const [eyecolor, setEyecolor] = useState(props.eyecolor || "");
    const [additional, setAdditional] = useState(props.additional || "");
    const [lostFnameError, setLostFnameError] = useState("");
    const [lostLnameError, setLostLnameError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [weightError, setWeightError] = useState("");
    const [heightError, setHeightError] = useState("");
    const [eyecolorError, setEyecolorError] = useState("");

    // set input value to data
    const handleSetLostFname = async (event) => { props.handlePageData({lostFname: event.target.value}); setLostFname(event.target.value); setLostFnameError("");}
    const handleSetLostLname = async (event) => { props.handlePageData({lostLname: event.target.value}); setLostLname(event.target.value); setLostLnameError("");}
    const handleSetGender = async (event) => { props.handlePageData({gender: event.target.value}); setGender(event.target.value); setGenderError("");}
    const handleSetOtherGender = async (event) => { props.handlePageData({otherGender: event.target.value}); setOtherGender(event.target.value);}
    const handleSetAge = async (event) => { props.handlePageData({age: event.target.value}); setAge(event.target.value); setAgeError("");}
    const handleSetWeight = async (event) => { props.handlePageData({weight: event.target.value}); setWeight(event.target.value); setWeightError("");}
    const handleSetHeight = async (event) => { props.handlePageData({height: event.target.value}); setHeight(event.target.value); setHeightError("");}
    const handleSetEyecolor = async (event) => { props.handlePageData({eyecolor: event.target.value}); setEyecolor(event.target.value); setEyecolorError("");}
    const handleSetAdditional = async (event) => { props.handlePageData({additional: event.target.value}); setAdditional(event.target.value);}

    // validate name
    const isNameValid = (name) => { 
        var valid = /^[a-z]+$/i.test(name);
        return valid;
    }

    // validat input & go to next page
    const handleNextClick = () => {
        if(lostFname == "") { setLostFnameError("Please enter first name"); }
        if(!isNameValid(lostFname)) {  setLostFnameError("Please enter a valid name") }
        if(lostLname == "") { setLostLnameError("Please enter last name"); }
        if(!isNameValid(lostLname)) { setLostLnameError("Please enter a valid last name")}
        if(gender == "") { setGenderError("Please select gender"); }
        if(age == "") { setAgeError("Please enter age"); }
        if(parseInt(age) <= 0) { setAgeError("Please enter proper age"); }
        if(age % 1 != 0) {setAgeError("Invalid age selected");}
        if(weight == "") { setWeightError("Please enter weight"); }
        if(parseInt(weight) <= 0) { setWeightError("Please enter proper weight"); }
        if(height == "") { setHeightError("Please enter height"); }
        if(parseInt(height) <= 0) { setHeightError("Please enter proper height"); }
        if(eyecolor == "") { setEyecolorError("Please enter eye colour"); }

        if (lostFname != "" &&
        lostLname != "" &&
        isNameValid(lostFname) &&
        isNameValid(lostLname) &&
        gender != "" &&
        age != "" && 
        parseInt(age) > 0 &&
        age % 1 === 0 &&
        weight != "" && 
        parseInt(weight) > 0 &&
        height != "" && 
        parseInt(height) > 0 &&
        eyecolor != "") {
            props.handleNextClick();
        }
    };

    const handlePrevClick = () => {
        props.handlePrevClick();
    }

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
                <p className="newpost_form_label">Lost pet/person information</p>
                <TextField
                    required
                    name="l_fname"
                    id="outlined-required"
                    label="First Name"
                    variant="filled"
                    color="success"
                    className="newpost_form_element"
                    inputProps={{ maxLength:  25}}
                    onChange={handleSetLostFname}
                    value={lostFname}
                    error={!!lostFnameError}
                    helperText={lostFnameError}
                    sx={{margin: "1vw 0"}}
                />
                <TextField
                    required
                    name="l_lname"
                    id="outlined-required"
                    label="Last Name"
                    variant="filled"
                    color="success"
                    className="newpost_form_element"
                    inputProps={{ maxLength:  25}}
                    onChange={handleSetLostLname}
                    value={lostLname}
                    error={!!lostLnameError}
                    helperText={lostLnameError}
                    sx={{margin: "1vw 0"}}
                />
                <div className="newpost_form_lostinfo">
                    <TextField
                        required
                        name="gender"
                        select
                        id="outlined-required"
                        label="Gender"
                        variant="filled"
                        color="success"
                        className="newpost_form_element newpost_form_lostinfo_element"
                        onChange={handleSetGender}
                        value={gender}
                        error={!!genderError}
                        helperText={genderError}
                        sx={{margin: "1vw 0"}}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </TextField>
                    
                    <TextField
                        required
                        name="age"
                        id="outlined-required"
                        label="Age"
                        variant="filled"
                        color="success"
                        type="number"
                        className="newpost_form_element newpost_form_lostinfo_element"
                        InputProps={{ inputProps: { min: 0, max: 120 } }}
                        onChange={handleSetAge}
                        value={age}
                        error={!!ageError}
                        helperText={ageError}
                        sx={{margin: "1vw 0"}}
                    />
                    <TextField
                        required
                        name="weight"
                        id="outlined-required"
                        label="Weight"
                        variant="filled"
                        color="success"
                        type="number"
                        className="newpost_form_element newpost_form_lostinfo_element"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">kg
                                </InputAdornment>
                            ),
                            inputProps: { min: 0, max: 300 }
                        }}
                        onChange={handleSetWeight}
                        value={weight}
                        error={!!weightError}
                        helperText={weightError}
                        sx={{margin: "1vw 0"}}
                    />
                    <TextField
                        required
                        name="height"
                        id="outlined-required"
                        label="Height"
                        variant="filled"
                        color="success"
                        type="number"
                        className="newpost_form_element newpost_form_lostinfo_element"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">cm
                                </InputAdornment>
                            ),
                            inputProps: { min: 0, max: 300 }
                        }}
                        onChange={handleSetHeight}
                        value={height}
                        error={!!heightError}
                        helperText={heightError}
                        sx={{margin: "1vw 0"}}
                    />
                    <TextField
                        required
                        name="eyecolor"
                        id="outlined-required"
                        label="Eye colour"
                        variant="filled"
                        color="success"
                        className="newpost_form_element newpost_form_lostinfo_element"
                        inputProps={{ maxLength:  10}}
                        onChange={handleSetEyecolor}
                        value={eyecolor}
                        error={!!eyecolorError}
                        helperText={eyecolorError}
                        sx={{margin: "1vw 0"}}
                    />
                </div>
                {gender == "other" && (
                    <TextField
                        required
                        name="otherGender"
                        id="outlined-required"
                        label="Other Gender"
                        variant="filled"
                        color="success"
                        className="newpost_form_element"
                        inputProps={{ maxLength:  20}}
                        onChange={handleSetOtherGender}
                        value={otherGender}
                        error={!!genderError}
                        helperText={genderError}
                        sx={{margin: "1vw 0"}}
                    />
                )}
                <TextField
                    name="additional"
                    multiline
                    rows={4}
                    id="outlined-required"
                    label="Additional Description"
                    variant="filled"
                    color="success"
                    className="newpost_form_element"
                    inputProps={{ maxLength:  500}}
                    onChange={handleSetAdditional}
                    value={additional}
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