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
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>{props.location}</p>
            <p>{props.lostFname}</p>
            <p>{props.lostLname}</p>
            <p>{props.gender}</p>
            <p>{props.age}</p>
            <p>{props.weihgt}</p>
            <p>{props.height}</p>
            <p>{props.eyecolor}</p>
            <p>{props.ethnicity}</p>
            <p>{props.additional}</p>
            <p>{props.userFname}</p>
            <p>{props.userLname}</p>
            <p>{props.phoneNum}</p>
            <p>{props.email}</p>
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