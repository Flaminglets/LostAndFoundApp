import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

export default function FourthPage(props) {
    const [l_fname, setL_fname] = useState('');
    const [l_lname, setL_lname] = useState('');
    const [gender, setGender] = useState('');
    const [otherGender, setOtherGender] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [eyecolor, setEyecolor] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [additional, setAdditional] = useState('');
    const handleSetL_fname = async (event) => { const val = event.target.value; setL_fname(val); }
    const handleSetL_lname = async (event) => { const val = event.target.value; setL_lname(val); }
    const handleSetGender = async (event) => { const val = event.target.value; setGender(val); }
    const handleSetOtherGender = async (event) => { const val = event.target.value; setOtherGender(val); }
    const handleSetAge = async (event) => { const val = event.target.value; setAge(val); }
    const handleSetWeight = async (event) => { const val = event.target.value; setWeight(val); }
    const handleSetHeight = async (event) => { const val = event.target.value; setHeight(val); }
    const handleSetEyecolor = async (event) => { const val = event.target.value; setEyecolor(val); }
    const handleSetEthnicity = async (event) => { const val = event.target.value; setEthnicity(val); }
    const handleSetAdditional = async (event) => { const val = event.target.value; setAdditional(val); }


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
                    className="newpost_form_element"
                    onChange={handleSetL_fname}
                    value={l_fname}
                />
                <TextField
                    required
                    name="l_lname"
                    id="outlined-required"
                    label="Last Name"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetL_lname}
                    value={l_lname}
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
            </div>
            <div className="newpost_buttons">
                <Button variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </Button>
            </div>
        </div>
    )
}