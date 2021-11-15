import { useState } from 'react';
import Button from '@mui/material/Button';

export default function FifthPage(props) {
    const [image, setImage] = useState('');
    const handleSetImage = async (event) => { 
        props.handlePageData({image: event.target.value}); 
        const val = event.target.value; setImage(val); 
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
                <p className="newpost_form_label">Uplouad a most recent photo of the missing pet/person</p>
                <div className="newpost_form_image">
                    <input
                        name="image"
                        id="outlined-required"
                        type="file"
                        accept="image/*"
                        className="myimage"
                        onChange={handleSetImage}
                    />
                </div>
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