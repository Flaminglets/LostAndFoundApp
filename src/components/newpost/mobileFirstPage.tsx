import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { useFormData } from '././index';

export default function FirstPage(props) {
    // const { setFormValues } = useFormData();
    const [type, setType] = useState('');
    // const newType = async () =>  {
    //     const newType = props.getData(type);
    //     setType(newType.type)
    //     console.log("testing type: ", type)
    // };
    const handleSetType = (event) => { 
        const val = event.target.value; setType(val); 
        props.handlePageData({type: event.target.value});
        const newType = props.getData(type);
        setType(newType);
        console.log("testing type: ", type)
    }

    const handleNextClick = (event) => {
        props.handleNextClick();
        // console.log("new type ", props.getData(setType(type)))
        // const newType = props.getData(type);
        // // const {type: type} = newType;
        // setType(newType.type);
        // console.log("testing type: ", newType)
        // setFormValues(newType)
        // console.log(setFormValues(props.data.type))
        
    };

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
                <p className="newpost_form_label">What have you lost?</p>
                <TextField
                    name="type"
                    required
                    select
                    id="type"
                    label="Pet / Person"
                    variant="filled"
                    className="newpost_form_element"
                    onChange={handleSetType}
                    value={type}
                    // defaultValue={type}
                >
                    <MenuItem className="newpost_form_element" value="pet">Pet</MenuItem>
                    <MenuItem className="newpost_form_element" value="person">Person</MenuItem>
                </TextField>
            </div>
            <div className="newpost_buttons">
                <Button variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </Button>
            </div>
        </div>
    )
}

