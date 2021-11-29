/* By Yoonseo @Flaminglets
this file contains lastpage of newpost
getting new data from newpost
displays the data as what the detail page would look like for user to finalize
when submit button is clicked, it Submit function is called from NewPost function */

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material';

// for mui style
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});

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

// @params: new input post data from NewPost function
// @return: last page displaying all the new input post info as it will look like detail page
export default function LastPage(props) {
    // submit create
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
                        <p>Weight: <strong>{props.weight} cm</strong></p>
                        <p>Height: <strong>{props.height} kg</strong></p>
                        <p>Eye color: <strong>{props.eyecolor}</strong></p>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem className="lp_divider" style={{fill: "black"}}
                    sx={{[theme.breakpoints.down('sm')]: {width: "0.7vw", marginRight: "2vw"}}}/>
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
                <FlamingoNextButton variant="contained" onClick={handleSubmitPrevClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "40vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Previous
                </FlamingoNextButton>
                <FlamingoSubmitButton variant="contained" onClick={handleFinalClick} className="newpost_button_next newpost_button_submit"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw", width: "40vw", fontSize: "2.5vw", height: "2.3rem"}, 
                [theme.breakpoints.down('md')]: {margin: "1.5vw 0 1.5vw 1.5vw"},
                backgroundColor: "#5F7470", margin: "1rem 0 1rem 1rem", color:"white", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Submit
                </FlamingoSubmitButton>
            </div>
        </div>
    )
}