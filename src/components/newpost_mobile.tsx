import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

export default function NewPost_mobile () {
    const [type, setType] = useState('');
    const [date, setDate] = useState('2020-05-24');
    const [time, setTime] = useState('07:30');
    const [location, setLocation] = useState('');
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
    // const [image, setImage] = useState('');
    const [c_fname, setC_fname] = useState('');
    const [c_lname, setC_lname] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');

    const handleSetType = async (event) => { const val = event.target.value; setType(val); }
    const handleSetDate = async (event) => { const val = event.target.value; setDate(val); }
    const handleSetTime = async (event) => { const val = event.target.value; setTime(val); }
    const handleSetLocation = async (event) => { const val = event.target.value; setLocation(val); }
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
    const handleSetC_fname = async (event) => { const val = event.target.value; setC_fname(val); }
    const handleSetC_lname = async (event) => { const val = event.target.value; setC_lname(val); }
    const handleSetPhoneNum = async (event) => { const val = event.target.value; setPhoneNum(val); }
    const handleSetEmail = async (event) => { const val = event.target.value; setEmail(val); }

    // handling next / previous page
    const [page, setPage] = useState('first');
    const handleNextPage = async (event) => {
        setPage("next");
    }

    const handleFirstPage = async (event) => {
        setPage("first");
    }

    const handleSecondPage = async (event) => {
        setPage("second");
    }

    const handleThirdPage = async (event) => {
        setPage("third");
    }

    const handleFourthPage = async (event) => {
        setPage("fourth");
    }

    const handleFifthPage = async (event) => {
        setPage("fifth");
    }
    const handleSixthPage = async (event) => {
        setPage("sixth");
    }

    // handling submit (fetch api, create data, and send to backend)
    const handleSubmit = async (event) => {
        var data = {};
        if(gender == 'other') {
            data = {
                type: type,
                date: date,
                time: time,
                location: location,
                lostFname: l_fname,
                lostLname: l_lname,
                gender: gender,
                otherGender: otherGender,
                age: age,
                weight: weight,
                height: height,
                eyecolor: eyecolor,
                ethnicity: ethnicity,
                additional: additional,
                userFname: c_fname,
                userLname: c_lname,
                phoneNum: phoneNum,
                email: email
            }
        }
        else{
            data = {
                type: type,
                date: date,
                time: time,
                location: location,
                lostFname: l_fname,
                lostLname: l_lname,
                gender: gender,
                age: age,
                weight: weight,
                height: height,
                eyecolor: eyecolor,
                ethnicity: ethnicity,
                additional: additional,
                userFname: c_fname,
                userLname: c_lname,
                phoneNum: phoneNum,
                email: email
            }
        }
        
    }

    return (
        <div className="new_div">
            <div className="newpost">
                <p className="newpost_title">Fill out the form to upload the post</p>
                <div className="newpost_form">
                {page == "first" && (
                    <>
                        <p className="newpost_form_label">What have you lost?</p>
                        <TextField
                            name="type"
                            required
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
                        <Button variant="contained" onClick={handleSecondPage} className="newpost_button_next">
                            Next
                        </Button>
                    </>
                )}
                {page == "second" && (
                    <>
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
                        <Button variant="contained" onClick={handleFirstPage} className="newpost_button_next">
                            Previous
                        </Button>
                        <Button variant="contained" onClick={handleThirdPage} className="newpost_button_next">
                            Next
                        </Button>
                    </>
                )}
                {page == "third" && (
                    <>
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
                        <Button variant="contained" onClick={handleSecondPage} className="newpost_button_next">
                            Previous
                        </Button>
                        <Button variant="contained" onClick={handleFourthPage} className="newpost_button_next">
                            Next
                        </Button>
                    </>
                )}
                {page == "fourth" && (
                    <>
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
                        <Button variant="contained" onClick={handleThirdPage} className="newpost_button_next">
                            Previous
                        </Button>
                        <Button variant="contained" onClick={handleFifthPage} className="newpost_button_next">
                            Next
                        </Button>
                    </>
                )}
                {page == "fifth" && (
                    <>
                        <p className="newpost_form_label">Uplouad a most recent photo of the missing pet/person</p>
                        <div className="newpost_form_image">
                            <input
                                name="image"
                                id="outlined-required"
                                type="file"
                                accept="image/*"
                                className="myimage"
                            />
                        </div>
                        <Button variant="contained" onClick={handleFourthPage} className="newpost_button_next">
                            Previous
                        </Button>
                        <Button variant="contained" onClick={handleSixthPage} className="newpost_button_next">
                            Next
                        </Button>
                    </>
                )}
                {page == "sixth" && (
                    <>
                        <p className="newpost_form_label">Your Contact information</p>
                        <TextField
                            name="c_fname"
                            id="outlined-required"
                            label="First Name"
                            variant="filled"
                            className="newpost_form_element"
                            onChange={handleSetC_fname}
                            value={c_fname}
                        />
                        <TextField
                            name="c_lname"
                            id="outlined-required"
                            label="Last Name"
                            variant="filled"
                            className="newpost_form_element"
                            onChange={handleSetC_lname}
                            value={c_lname}
                        />
                        <TextField
                            required
                            name="phoneNum"
                            id="outlined-required"
                            label="Phone Number"
                            variant="filled"
                            className="newpost_form_element"
                            onChange={handleSetPhoneNum}
                            value={phoneNum}
                        />
                        <TextField
                            required
                            name="email"
                            id="outlined-required"
                            label="Email"
                            variant="filled"
                            className="newpost_form_element"
                            onChange={handleSetEmail}
                            value={email}
                        />
                        <Button variant="contained" onClick={handleFifthPage} className="newpost_button_next">
                            Previous
                        </Button>
                        <Button variant="contained" onClick={handleSubmit} className="newpost_button_next">
                            Submit
                        </Button>
                    </>
                )}
                </div>
            </div>
        </div>
    )
}