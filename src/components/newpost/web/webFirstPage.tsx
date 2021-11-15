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
    const [otherGender, setOtherGender] = useState(props.otherGender || '');
    const [age, setAge] = useState(props.age || '');
    const [weight, setWeight] = useState(props.weight || '');
    const [height, setHeight] = useState(props.height || '');
    const [eyecolor, setEyecolor] = useState(props.eyecolor || '');
    const [ethnicity, setEthnicity] = useState(props.ethnicity || '');
    const [additional, setAdditional] = useState(props.additional || '');
    const [image, setImage] = useState(props.image || '');

    const handleSetType = async (event) => { const val = event.target.value; setType(val); props.handlePageData({type: event.target.value}); }
    const handleSetDate = async (event) => { props.handlePageData({date: event.target.value}); const val = event.target.value; setDate(val); }
    const handleSetTime = async (event) => { props.handlePageData({time: event.target.value}); const val = event.target.value; setTime(val); }
    const handleSetLocation = async (event) => { props.handlePageData({location: event.target.value}); const val = event.target.value; setLocation(val); }
    const handleSetLostFname = async (event) => { props.handlePageData({lostFname: event.target.value}); const val = event.target.value; setLostFname(val); }
    const handleSetLostLname = async (event) => { props.handlePageData({lostLname: event.target.value}); const val = event.target.value; setLostLname(val); }
    const handleSetGender = async (event) => { props.handlePageData({gender: event.target.value}); const val = event.target.value; setGender(val); }
    const handleSetOtherGender = async (event) => { props.handlePageData({otherGender: event.target.value}); const val = event.target.value; setOtherGender(val); }
    const handleSetAge = async (event) => { props.handlePageData({age: event.target.value}); const val = event.target.value; setAge(val); }
    const handleSetWeight = async (event) => { props.handlePageData({weight: event.target.value}); const val = event.target.value; setWeight(val); }
    const handleSetHeight = async (event) => { props.handlePageData({height: event.target.value}); const val = event.target.value; setHeight(val); }
    const handleSetEyecolor = async (event) => { props.handlePageData({eyecolor: event.target.value}); const val = event.target.value; setEyecolor(val); }
    const handleSetEthnicity = async (event) => { props.handlePageData({ethnicity: event.target.value}); const val = event.target.value; setEthnicity(val); }
    const handleSetAdditional = async (event) => { props.handlePageData({additional: event.target.value}); const val = event.target.value; setAdditional(val); }
    const handleSetImage = async (event) => { props.handlePageData({image: event.target.value}); const val = event.target.value; setImage(val); }

    const handleNextClick = (event) => {
        props.handleNextClick();
    };

    return (
        <div className="newpost_form">
            <p className="newpost_form_label">What have you lost?</p>
            <TextField
                name="type"
                required={true}
                inputRef={props.myRef}
                select
                id="outlined-required"
                label="Pet / Person"
                variant="filled"
                className="newpost_form_element"
                onChange={handleSetType}
                value={type}
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
            <p className="newpost_form_label">Where have you lost pet/person?</p>
            <TextField
                name="location"
                id="outlined-required"
                label="Location"
                variant="filled"
                className="newpost_form_element"
                onChange={handleSetLocation}
                value={location}
            />
            <p className="newpost_form_label">Lost pet/person information</p>
            <TextField
                required={true}
                inputRef={props.myRef}
                name="l_fname"
                id="outlined-required"
                label="First Name"
                variant="filled"
                className="newpost_form_element"
                onChange={handleSetLostFname}
                value={lostFname}
            />
            <TextField
                required={true}
                inputRef={props.myRef}
                name="l_lname"
                id="outlined-required"
                label="Last Name"
                variant="filled"
                className="newpost_form_element"
                onChange={handleSetLostLname}
                value={lostLname}
            />
            <div className="newpost_form_lostinfo">
                <TextField
                    name="gender"
                    select
                    id="outlined-required"
                    label="Gender"
                    variant="filled"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetGender}
                    value={gender}
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
                    type="number"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetAge}
                    value={age}
                />
                <TextField
                    name="weight"
                    id="outlined-required"
                    label="Weight"
                    variant="filled"
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
                />
                <TextField
                    name="height"
                    id="outlined-required"
                    label="Height"
                    variant="filled"
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
                />
                <TextField
                    name="eyecolor"
                    id="outlined-required"
                    label="Eye colour"
                    variant="filled"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetEyecolor}
                    value={eyecolor}
                />
                <TextField
                    name="ethnicity"
                    select
                    id="outlined-required"
                    label="Ethnicity"
                    variant="filled"
                    className="newpost_form_element newpost_form_lostinfo_element"
                    onChange={handleSetEthnicity}
                    value={ethnicity}
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField>
            </div>
            {gender == "other" && (
                <TextField
                    name="otherGender"
                    id="outlined-required"
                    label="Other Gender"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetOtherGender}
                    value={otherGender}
                />
            )}
            <TextField
                name="additional"
                multiline
                rows={4}
                id="outlined-required"
                label="Additional Description"
                variant="filled"
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
                />
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}