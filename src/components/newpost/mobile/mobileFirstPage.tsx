import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FlamingoNextButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#A2AA9D'
    },
})

export default function FirstPage(props) {
    const [type, setType] = useState(props.type || '');
    const handleSetType = (event) => { 
        setType(event.target.value); 
        props.handlePageData({type: event.target.value});
        setTypeError('')
    }

    const [typeError, setTypeError] = useState('');

    const handleNextClick = () => {
        if(type == '') { setTypeError("Please select type"); }

        if (type != '') {
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
                >
                    <MenuItem className="newpost_form_element" value="pet">Pet</MenuItem>
                    <MenuItem className="newpost_form_element" value="person">Person</MenuItem>
                </TextField>
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}

