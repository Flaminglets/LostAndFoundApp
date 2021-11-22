import { useState } from 'react';
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

export default function FourthPage(props) {
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
    const handleSetLostFname = async (event) => { props.handlePageData({lostFname: event.target.value}); setLostFname(event.target.value); setLostFnameError('');}
    const handleSetLostLname = async (event) => { props.handlePageData({lostLname: event.target.value}); setLostLname(event.target.value); setLostLnameError('');}
    const handleSetGender = async (event) => { props.handlePageData({gender: event.target.value}); setGender(event.target.value); setGenderError('');}
    const handleSetOtherGender = async (event) => { props.handlePageData({otherGender: event.target.value}); setOtherGender(event.target.value); setOtherGenderError('');}
    const handleSetAge = async (event) => { props.handlePageData({age: event.target.value}); setAge(event.target.value); setAgeError('');}
    const handleSetWeight = async (event) => { props.handlePageData({weight: event.target.value}); setWeight(event.target.value); setWeightError('');}
    const handleSetHeight = async (event) => { props.handlePageData({height: event.target.value}); setHeight(event.target.value); setHeightError('');}
    const handleSetEyecolor = async (event) => { props.handlePageData({eyecolor: event.target.value}); setEyecolor(event.target.value); setEyecolorError('');}
    const handleSetAdditional = async (event) => { props.handlePageData({additional: event.target.value}); setAdditional(event.target.value);}

    const [lostFnameError, setLostFnameError] = useState('');
    const [lostLnameError, setLostLnameError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [otherGenderError, setOtherGenderError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [eyecolorError, setEyecolorError] = useState('');


    const handleNextClick = (event) => {
        if(lostFname == '') { setLostFnameError("Please enter first name"); }
        else if(lostLname == '') { setLostLnameError("Please enter last name"); }
        else if(gender == '') { setGenderError("Please select gender"); }
        else if(age == '') { setAgeError("Please enter age"); }
        else if(parseInt(age) <= 0) { setAgeError("Please enter proper age"); }
        else if(weight == '') { setWeightError("Please enter weight"); }
        else if(parseInt(weight) <= 0) { setWeightError("Please enter proper weight"); }
        else if(height == '') { setHeightError("Please enter height"); }
        else if(parseInt(height) <= 0) { setHeightError("Please enter proper height"); }
        else if(eyecolor == '') { setEyecolorError("Please enter eye colour"); }

        if (lostFname != '' &&
        lostLname != '' &&
        gender != '' &&
        age != '' && 
        parseInt(age) > 0 &&
        weight != '' && 
        parseInt(weight) > 0 &&
        height != '' && 
        parseInt(height) > 0 &&
        eyecolor != '') {
            props.handleNextClick();
        }
    };

    const handlePrevClick = (event) => {
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
                />
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