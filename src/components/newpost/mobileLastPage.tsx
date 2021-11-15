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

export default function LastPage(props) {
    const handleFinalClick = (event) => {
        props.handleFinalClick();
    };

    const handleSubmitPrevClick = (event) => {
        props.handleSubmitPrevClick();
    }

    return (
        <div className="newpost_form">
            {/* <p className="newpost_form_label">Where have you lost pet/person?</p> */}
            <p>{props.type}</p>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handleSubmitPrevClick} className="newpost_button_next">
                    Previous
                </FlamingoNextButton>
                <FlamingoSubmitButton variant="contained" onClick={handleFinalClick} className="newpost_button_next newpost_button_submit">
                    Submit
                </FlamingoSubmitButton>
            </div>
        </div>
    )
}