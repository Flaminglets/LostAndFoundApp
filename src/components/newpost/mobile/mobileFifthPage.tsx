import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FlamingoNextButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#A2AA9D'
    },
})

export default function FifthPage(props) {
    const [image, setImage] = useState(props.image || '');
     // const handleSetImage = async (event) => { 
    //     props.handlePageData({image: event.target.value}); 
    //     const val = event.target.value; setImage(val); 
    // }
    const handleSetImage = async (event) => {
        debugger;
        props.handlePageData({ image: event.target.value });
        const val = event.target.value;
        setImage(val);
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
