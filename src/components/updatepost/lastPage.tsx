/*
By Yoonseo @Flaminglets
this file contains lastpage of updatePost
getting updated data from updatePost
displays the data as what the detail page would look like for user to finalize
when submit button is clicked, it Submit function is called from UpdatePost function
*/

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

// button style
const FlamingoNextButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#A2AA9D"
    },
})

const FlamingoSubmitButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#455451"
    },
})

// @params: updated post data from UpdatePost function
// @return: last page displaying all the updated info as it will look like detail page
export default function LastPage(props) {
    // submit update
    const handleFinalClick = () => {
        props.handleFinalClick();
    };

    // go back to form
    const handleSubmitPrevClick = () => {
        props.handleSubmitPrevClick();
    }

    return (
        <div className="newpost_form">
            <p className="newpost_form_label">Do you want to submit?</p>
            <div className="newpost_form_last_info">
                <div className="newpost_lp_name">
                    <p>{props.lostFname} {props.lostLname}</p>
                </div>
                <div className="lp_image_div">
                    <CardMedia className="lp_image"
                        component="img"
                        image={props.image}
                        alt="missing pet/person image"
                    />
                </div>
                <div className="lp_elements">
                    <div className="lp_element_left">
                        <p>Gender: <strong>{props.gender} {props.otherGender}</strong></p>
                        <p>Age: <strong>{props.age}</strong></p>
                        <p>Weight: <strong>{props.weight} kg</strong></p>
                        <p>Height: <strong>{props.height} cm</strong></p>
                        <p>Eye color: <strong>{props.eyecolor}</strong></p>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem className="lp_divider" style={{fill: "black"}}/>
                    <div className="lp_element_right">
                        <p>Last seen</p>
                        <p>- Location: <strong>{props.location}</strong></p>
                        <p>- Date: <strong>{props.date}</strong></p>
                        <p>- Time: <strong>{props.time}</strong></p>
                        <p>Contact info</p>
                        <p>- Phone num: <strong>{props.phoneNum}</strong></p>
                        <p>- Email: <strong>{props.email}</strong></p>
                    </div>
                </div>
                {props.additional != null && props.additional != "" && (
                    <div className="lp_adinfo">
                        <p>Additional information: </p>
                        <p><strong>{props.additional}</strong></p>
                    </div>
                )}
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