/* By Abbe, Harman, Yoonseo, Sarina @Flaminglets
this file contains first page of post form used in NewPost and UpdatePost function
getting inputs from user that includes
 (type, date(lastSeen), time(lastSeen), location(lastSeen), 
    (lost pet/person's) firstName, lastName, gender, age, weight, height, eyecolor, additional info, image)
validates input and show error message when input value is not valid, and prevents from going to next page */

import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
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

// @params: useState data from NewPost and UpdatePost functions
// @return: lost pet/person information form
export default function WebFirstPage(props) {
    const [type, setType] = useState(props.type || "");
    const [date, setDate] = useState(props.date || "2021-01-01");
    const [time, setTime] = useState(props.time || "00:00");
    const [location, setLocation] = useState(props.location || "");
    const [lostFname, setLostFname] = useState(props.lostFname || "");
    const [lostLname, setLostLname] = useState(props.lostLname || "");
    const [gender, setGender] = useState(props.gender || "");
    const [otherGender, setOtherGender] = useState(props.otherGender || "");
    const [age, setAge] = useState(props.age || "");
    const [weight, setWeight] = useState(props.weight || "");
    const [height, setHeight] = useState(props.height || "");
    const [eyecolor, setEyecolor] = useState(props.eyecolor || "");
    const [additional, setAdditional] = useState(props.additional || "");
    const [image, setImage] = useState(props.image || "");
    const [typeError, setTypeError] = useState("");
    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [lostFnameError, setLostFnameError] = useState("");
    const [lostLnameError, setLostLnameError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [weightError, setWeightError] = useState("");
    const [heightError, setHeightError] = useState("");
    const [eyecolorError, setEyecolorError] = useState("");
    const [imageError, setImageError] = useState("");

    // set input value to data
    const handleSetType = async (event) => { setType(event.target.value); props.handlePageData({type: event.target.value}); setTypeError("")}
    const handleSetDate = async (event) => { props.handlePageData({date: event.target.value}); setDate(event.target.value); setDateError("")}
    const handleSetTime = async (event) => { props.handlePageData({time: event.target.value}); setTime(event.target.value); setTimeError("")}
    const handleSetLocation = async (event) => { props.handlePageData({location: event.target.value}); setLocation(event.target.value); setLocationError("")}
    const handleSetLostFname = async (event) => { props.handlePageData({lostFname: event.target.value}); setLostFname(event.target.value); setLostFnameError("")}
    const handleSetLostLname = async (event) => { props.handlePageData({lostLname: event.target.value}); setLostLname(event.target.value); setLostLnameError("")}
    const handleSetGender = async (event) => { props.handlePageData({gender: event.target.value}); setGender(event.target.value); setGenderError("")}
    const handleSetOtherGender = async (event) => { props.handlePageData({otherGender: event.target.value}); setOtherGender(event.target.value);}
    const handleSetAge = async (event) => { props.handlePageData({age: event.target.value}); setAge(event.target.value); setAgeError("")}
    const handleSetWeight = async (event) => { props.handlePageData({weight: event.target.value}); setWeight(event.target.value); setWeightError("")}
    const handleSetHeight = async (event) => { props.handlePageData({height: event.target.value}); setHeight(event.target.value); setHeightError("")}
    const handleSetEyecolor = async (event) => { props.handlePageData({eyecolor: event.target.value}); setEyecolor(event.target.value); setEyecolorError("")}
    const handleSetAdditional = async (event) => { props.handlePageData({additional: event.target.value}); setAdditional(event.target.value); }

    // using the async function getImageToBase64(imageURL) converts the image url to base64 string of image
    const handleSetImage = async (event) => {
        await getImageToBase64(event.target.files[0], (result) => {
            props.handlePageData({ image: result });
            setImage(result);
            setImageError("");
        });
    };
    const getImageToBase64 = (file: any, cb: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };

    // validate name
    const isNameValid = (name) => { 
        var valid = /^[a-z]+$/i.test(name);
        return valid;
    }

    // validat input & go to next page
    const handleNextClick = () => {
        // resource: https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
        var dateObj = new Date();
        console.log(dateObj)
        // current date
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = parseInt(dateObj.toString().substr(8, 2));
        console.log(parseInt(dateObj.toString().substr(8, 2)));
        var year = dateObj.getUTCFullYear();
        // input date
        var date_year = parseInt(date.substr(0, 4));
        var date_month = parseInt(date.substr(5,2));
        var date_day = parseInt(date.substr(8, 2));
        
        if(type == "") { setTypeError("Please select type"); }
        if(date == "2021-01-01") {setDateError("Please select date"); }
        if(date_year > year ) {setDateError("Invalid year selected"); }
        if(time == "00:00") { setTimeError("Please select time"); }
        if(location == "") { setLocationError("Please enter location"); }
        if(lostFname == "") { setLostFnameError("Please enter first name"); }
        if(!isNameValid(lostFname)) {  setLostFnameError("Please enter a valid name") }
        if(lostLname == "") { setLostLnameError("Please enter last name"); }
        if(!isNameValid(lostLname)) { setLostLnameError("Please enter a valid last name")}
        if(gender == "") { setGenderError("Please select gender"); }
        if(age == "") { setAgeError("Please enter age"); }
        if(parseInt(age) < 0) { setAgeError("Please enter proper age"); }
        if(age % 1 != 0) {setAgeError("Invalid age selected");}
        if(weight == "") { setWeightError("Please enter weight"); }
        if(parseInt(weight) <= 0) { setWeightError("Please enter proper weight"); }
        if(height == "") { setHeightError("Please enter height"); }
        if(parseInt(height) <= 0) { setHeightError("Please enter proper height"); }
        if(eyecolor == "") { setEyecolorError("Please enter eye colour"); }
        if (image == "") {setImageError("Please select image")}
        console.log("herewer")
        if(date_year == year) {
            if(date_month > month) {
                console.log("here")
                setDateError("Invalid month selected")
            } 
        }
        if(date_year == year) {
            if(date_month == month) {
                if(date_day > day) {
                    console.log("here 2")
                    setDateError("Invalid day selected")
                }
            }
        }

        if (type != "" && 
        date != "2021-01-01" && 
        date_year <= year &&
        time != "00:00" && 
        location != "" &&
        lostFname != "" &&
        lostLname != "" &&
        isNameValid(lostFname) &&
        isNameValid(lostLname) &&
        gender != "" &&
        age != "" && 
        age % 1 === 0 &&
        parseInt(age) > 0 &&
        weight != "" && 
        parseInt(weight) > 0 &&
        height != "" && 
        parseInt(height) > 0 &&
        eyecolor != "" &&
        image != "") {
            console.log("here2wef33")
            if (date_year <= year) {
                console.log("yesr")
                if (date_month <= month) {
                    console.log("month")
                    console.log(day)
                    if (date_day <= day) {
                        console.log(date_day)
                        console.log("here33")
                        props.handleNextClick();
                    } 
                }
            }
        }
    };

    return (
        <div className="newpost_form">
            <form action="">
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
                sx={{margin: "0.5rem 0"}}
            >
                <MenuItem value="pet">Pet</MenuItem>
                <MenuItem value="person">Person</MenuItem>
            </TextField>
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
                    sx={{margin: "0.5rem 0"}}
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
                    sx={{margin: "0.5rem 0"}}
                />
            </div>
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
                sx={{margin: "0.5rem 0"}}
            />
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
                sx={{margin: "0.5rem 0"}}
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
                sx={{margin: "0.5rem 0"}}
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
                    inputProps={{ maxLength:  30}}
                    value={gender}
                    error={!!genderError}
                    helperText={genderError}
                    sx={{margin: "0.5rem 0"}}>
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
                    InputProps={{ inputProps: { min: 0, max: 130 } }}
                    onChange={handleSetAge}
                    value={age}
                    error={!!ageError}
                    helperText={ageError}
                    sx={{margin: "0.5rem 0"}}
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
                        inputProps: { min: 0, max: 450 }
                    }}
                    onChange={handleSetWeight}
                    value={weight}
                    error={!!weightError}
                    helperText={weightError}
                    sx={{margin: "0.5rem 0"}}
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
                        inputProps: { min: 0, max: 230 }
                    }}
                    onChange={handleSetHeight}
                    value={height}
                    error={!!heightError}
                    helperText={heightError}
                    sx={{margin: "0.5rem 0"}}
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
                    sx={{margin: "0.5rem 0"}}
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
                    sx={{margin: "0.5rem 0"}}
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
                sx={{margin: "0.5rem 0"}}
            />
            <p className="newpost_form_label">Upload a most recent photo of the missing pet/person</p>
            <div className="newpost_form_image">
                <input
                    name="image"
                    id="outlined-required"
                    type="file"
                    accept="image/*"
                    className="myimage"
                    onChange={handleSetImage}
                    required
                />
                {image == "" && (
                    <p className="newpost_image_error">{imageError}</p>
                )}
                {image != "" && (
                    <div className="input_image_div">
                        <p>Chosen image</p>
                        <CardMedia className="input_image"
                            component="img"
                            image={props.image}
                            alt="missing pet/person image"
                            sx={{width: "13rem", height: "10rem"}}
                        />
                    </div>
                )}
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "40vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Next
                </FlamingoNextButton>
            </div>
            </form>
        </div>
    )
}