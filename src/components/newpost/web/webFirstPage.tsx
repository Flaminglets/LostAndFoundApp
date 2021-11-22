import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FlamingoNextButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#A2AA9D'
    },
})

const FlamingoSubmitButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#455451'
    },
})

export default function WebFirstPage(props) {
    const [type, setType] = useState(props.type || '');
    const [date, setDate] = useState(props.date || '2021-01-01');
    const [time, setTime] = useState(props.time || '00:00');
    const [location, setLocation] = useState(props.location || '');
    const [lostFname, setLostFname] = useState(props.lostFname || '');
    const [lostLname, setLostLname] = useState(props.lostLname || '');
    const [gender, setGender] = useState(props.gender || '');
    const [age, setAge] = useState(props.age || '');
    const [weight, setWeight] = useState(props.weight || '');
    const [height, setHeight] = useState(props.height || '');
    const [eyecolor, setEyecolor] = useState(props.eyecolor || '');
    const [ethnicity, setEthnicity] = useState(props.ethnicity || '');
    const [additional, setAdditional] = useState(props.additional || '');
    const [image, setImage] = useState(props.image || '');

    const handleSetType = async (event) => { setType(event.target.value); props.handlePageData({type: event.target.value}); setTypeError('')}
    const handleSetDate = async (event) => { props.handlePageData({date: event.target.value}); setDate(event.target.value); setDateError('')}
    const handleSetTime = async (event) => { props.handlePageData({time: event.target.value}); setTime(event.target.value); setTimeError('')}
    const handleSetLocation = async (event) => { props.handlePageData({location: event.target.value}); setLocation(event.target.value); setLocationError('')}
    const handleSetLostFname = async (event) => { props.handlePageData({lostFname: event.target.value}); setLostFname(event.target.value); setLostFnameError('')}
    const handleSetLostLname = async (event) => { props.handlePageData({lostLname: event.target.value}); setLostLname(event.target.value); setLostLnameError('')}
    const handleSetGender = async (event) => { props.handlePageData({gender: event.target.value}); setGender(event.target.value); setGenderError('')}
    const handleSetAge = async (event) => { props.handlePageData({age: event.target.value}); setAge(event.target.value); setAgeError('')}
    const handleSetWeight = async (event) => { props.handlePageData({weight: event.target.value}); setWeight(event.target.value); setWeightError('')}
    const handleSetHeight = async (event) => { props.handlePageData({height: event.target.value}); setHeight(event.target.value); setHeightError('')}
    const handleSetEyecolor = async (event) => { props.handlePageData({eyecolor: event.target.value}); setEyecolor(event.target.value); setEyecolorError('')}
    const handleSetAdditional = async (event) => { props.handlePageData({additional: event.target.value}); setAdditional(event.target.value); }
    const handleSetImage = async (event) => { props.handlePageData({image: event.target.value}); setImage(event.target.value); }

    const [typeError, setTypeError] = useState('');
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [locationError, setLocationError] = useState('');
    const [lostFnameError, setLostFnameError] = useState('');
    const [lostLnameError, setLostLnameError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [eyecolorError, setEyecolorError] = useState('');

    const handleNextClick = (event) => {
        
        if(type == '') { setTypeError("Please select type"); }
        else if(date == '2021-01-01') {setDateError("Please select date"); }
        else if(time == '00:00') { setTimeError("Please select time"); }
        else if(location == '') { setLocationError("Please enter location"); }
        else if(lostFname == '') { setLostFnameError("Please enter first name"); }
        else if(lostLname == '') { setLostLnameError("Please enter last name"); }
        else if(gender == '') { setGenderError("Please select gender"); }
        else if(age == '') { setAgeError("Please enter age"); }
        else if(weight == '') { setWeightError("Please enter weight"); }
        else if(height == '') { setHeightError("Please enter height"); }
        else if(eyecolor == '') { setEyecolorError("Please enter eye colour"); }

        if (type != '' && 
        date != '2021-01-01' && 
        time != '00:00' && 
        location != '' &&
        lostFname != '' &&
        lostLname != '' &&
        gender != '' &&
        age != '' &&
        weight != '' &&
        height != '' &&
        eyecolor != '') {
            props.handleNextClick();
        }
        
    };

    return (
        <div className="newpost_form">
            <form action="">
            <p className="newpost_form_label">What have you lost?</p>
            <TextField
                name="type"
                required={true}
                // inputRef={props.myRef}
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
            >
                <MenuItem value="pet">Pet</MenuItem>
                <MenuItem value="person">Person</MenuItem>
            </TextField>
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
                    onChange={handleSetDate}
                    value={date}
                    error={!!dateError}
                    helperText={dateError}
                />
                <TextField
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
            <p className="newpost_form_label">Where have you lost pet/person?</p>
            <TextField
                name="location"
                id="outlined-required"
                label="Location"
                variant="filled"
                color="success"
                className="newpost_form_element"
                onChange={handleSetLocation}
                value={location}
                error={!!locationError}
                helperText={locationError}
            />
            <p className="newpost_form_label">Lost pet/person information</p>
            <TextField
                required={true}
                inputRef={props.myRef}
                name="l_fname"
                id="outlined-required"
                label="First Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                onChange={handleSetLostFname}
                value={lostFname}
                error={!!lostFnameError}
                helperText={lostFnameError}
            />
            <TextField
                required={true}
                inputRef={props.myRef}
                name="l_lname"
                id="outlined-required"
                label="Last Name"
                variant="filled"
                color="success"
                className="newpost_form_element"
                onChange={handleSetLostLname}
                value={lostLname}
                error={!!lostLnameError}
                helperText={lostLnameError}
            />
            <div className="newpost_form_lostinfo">
                <TextField
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
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField>
                
                <TextField
                    name="age"
                    id="outlined-required"
                    label="Age"
                    variant="filled"
                    color="success"
                    type="number"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetAge}
                    value={age}
                    error={!!ageError}
                    helperText={ageError}
                />
                <TextField
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
                    }}
                    onChange={handleSetWeight}
                    value={weight}
                    error={!!weightError}
                    helperText={weightError}
                />
                <TextField
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
                    }}
                    onChange={handleSetHeight}
                    value={height}
                    error={!!heightError}
                    helperText={heightError}
                />
                <TextField
                    name="eyecolor"
                    id="outlined-required"
                    label="Eye colour"
                    variant="filled"
                    color="success"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetEyecolor}
                    value={eyecolor}
                    error={!!eyecolorError}
                    helperText={eyecolorError}
                />
                {/* <TextField
                    name="ethnicity"
                    select
                    id="outlined-required"
                    label="Ethnicity"
                    variant="filled"
                    color="success"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetEthnicity}
                    value={ethnicity}
                    error={typeError}
                >
                    <MenuItem value="American Indian">American Indian</MenuItem>
                    <MenuItem value="Asian">Asian</MenuItem>
                    <MenuItem value="African American">African American</MenuItem>
                    <MenuItem value="Hispanic">Hispanic</MenuItem>
                    <MenuItem value="Native Hawaiian">Native Hawaiian</MenuItem>
                    <MenuItem value="White">White</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField> */}
            </div>
            {gender == "other" && (
                <TextField
                    name="otherGender"
                    id="outlined-required"
                    label="Other Gender"
                    variant="filled"
                    color="success"
                    className="newpost_form_element"
                    onChange={handleSetGender}
                    value={gender}
                    error={!!genderError}
                    helperText={genderError}
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
                onChange={handleSetAdditional}
                value={additional}
            />
            <p className="newpost_form_label">Uplouad a most recent photo of the missing pet/person</p>
            <div className="newpost_form_image">
                <input
                    name="image"
                    id="outlined-required"
                    type="file"
                    accept="image/*"
                    className="myimage"
                    onChange={handleSetImage}
                    value={image}
                    required
                />
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </FlamingoNextButton>
            </div>
            </form>
        </div>
    )
}