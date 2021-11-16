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
    const handleSetLostFname = async (event) => { props.handlePageData({lostFname: event.target.value}); setLostFname(event.target.value); }
    const handleSetLostLname = async (event) => { props.handlePageData({lostLname: event.target.value}); setLostLname(event.target.value); }
    const handleSetGender = async (event) => { props.handlePageData({gender: event.target.value}); setGender(event.target.value); }
    const handleSetOtherGender = async (event) => { props.handlePageData({otherGender: event.target.value}); setOtherGender(event.target.value); }
    const handleSetAge = async (event) => { props.handlePageData({age: event.target.value}); setAge(event.target.value); }
    const handleSetWeight = async (event) => { props.handlePageData({weight: event.target.value}); setWeight(event.target.value); }
    const handleSetHeight = async (event) => { props.handlePageData({height: event.target.value}); setHeight(event.target.value); }
    const handleSetEyecolor = async (event) => { props.handlePageData({eyecolor: event.target.value}); setEyecolor(event.target.value); }
    const handleSetEthnicity = async (event) => { props.handlePageData({ethnicity: event.target.value}); setEthnicity(event.target.value); }
    const handleSetAdditional = async (event) => { props.handlePageData({additional: event.target.value}); setAdditional(event.target.value); }


    const handleNextClick = (event) => {
        props.handleNextClick();
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
                    onChange={handleSetLostFname}
                    value={lostFname}
                />
                <TextField
                    required
                    name="l_lname"
                    id="outlined-required"
                    label="Last Name"
                    variant="filled"
                    color="success"
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
                        color="success"
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
                        color="success"
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
                    />
                    <TextField
                        name="ethnicity"
                        select
                        id="outlined-required"
                        label="Ethnicity"
                        variant="filled"
                        color="success"
                        className="newpost_form_element newpost_form_lostinfo_element"
                        onChange={handleSetEthnicity}
                        value={ethnicity}
                    >
                        <MenuItem value="American Indian">American Indian</MenuItem>
                        <MenuItem value="Asian">Asian</MenuItem>
                        <MenuItem value="African American">African American</MenuItem>
                        <MenuItem value="Hispanic">Hispanic</MenuItem>
                        <MenuItem value="Native Hawaiian">Native Hawaiian</MenuItem>
                        <MenuItem value="White">White</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </TextField>
                </div>
                {gender == "other" && (
                    <TextField
                        name="otherGender"
                        id="outlined-required"
                        label="Other Gender"
                        variant="filled"
                        color="success"
                        className="newpost_form_element"
                        onChange={handleSetOtherGender}
                        value={gender}
                    />
                )}
                {ethnicity == "other" && (
                    <TextField
                        name="otherEthnicity"
                        id="outlined-required"
                        label="Other Ethnicity"
                        variant="filled"
                        color="success"
                        className="newpost_form_element"
                        onChange={handleSetOtherGender}
                        value={ethnicity}
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