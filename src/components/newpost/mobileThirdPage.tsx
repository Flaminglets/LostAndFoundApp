import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ThirdPage(props) {
    const [location, setLocation] = useState('');
    const handleSetLocation = async (event) => { 
        props.handlePageData({location: event.target.value});
        const val = event.target.value; setLocation(val); 
    }


    const handleNextClick = (event) => {
        props.handleNextClick();
    };

    const handlePrevClick = (event) => {
        props.handlePrevClick();
    }

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
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