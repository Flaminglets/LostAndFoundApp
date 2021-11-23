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
    const handleFinalClick = () => {
        props.handleFinalClick();
    };

    const handleSubmitPrevClick = () => {
        props.handleSubmitPrevClick();
    }

    return (
        <div className="newpost_form">
            <p className="newpost_form_label">Do you want to submit?</p>
            <div className="newpost_form_last_info">
                <p>Type: {props.type}</p>
                <p>Lost date: {props.date}</p>
                <p>Lost time: {props.time}</p>
                <p>Last seen: {props.location}</p>
                <p>Lost {props.type} firstname: {props.lostFname}</p>
                <p>Lost {props.type} lastname: {props.lostLname}</p>
                <p>Gender: {props.gender} {props.otherGender}</p>
                <p>Age: {props.age}</p>
                <p>Weight: {props.weihgt}</p>
                <p>Height: {props.height}</p>
                <p>Eye color: {props.eyecolor}</p>
                <p>Additional information: {props.additional}</p>
                <p>User firstname: {props.userFname}</p>
                <p>User lastname: {props.userLname}</p>
                <p>Contact info</p>
                <p>Phone number: {props.phoneNum}</p>
                <p>Email: {props.email}</p>
            </div>
            
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