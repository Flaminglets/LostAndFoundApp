/* By Yoonseo @Flaminglets
this file contains a card function that can be used to display each card
displays a post information including name, image, location, date, time
when the image is clicked, redirects to detail page with post id
when 'contact' button is click, displays contact information with popup */

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, createTheme } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

// for mui style
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

// @params: a post data
// @return: a post card
export default function PostCard(props) {
    // redirects to detail page of the post
    const handleCardClick = () => {
        location.href = `/detailpage/${props.id}`;
    }

    return (
        <Card className="home_cards" elevation={5} 
            sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", height: "60vw"}, padding: "0.5rem", height: "20.5rem"}}>
            {/* redirect to detail page when clicked */}
            <CardActionArea onClick={handleCardClick} className="home_card"
            sx={{padding: "0", margin: "0"}}>
                <p className="home_card_title">
                    {props.lostFname} {props.lostLname}
                </p>
                <CardMedia className="home_card_media"
                    component="img"
                    image={props.image}
                    alt="lost pet/person image"
                />
                <CardContent className="home_card_info_div"
                sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", height: "10vw"}, padding: "0.7rem", height: "4rem"}}>
                <div className="home_card_info_div">
                    <p className="home_card_info">Location: {props.location}</p>
                    <p className="home_card_info">Last seen: {props.date}. {props.time}</p>
                </div>
                </CardContent>
            </CardActionArea>
            <CardActions className="home_card_button_div" sx={{[theme.breakpoints.down('sm')]: {padding: "0", margin: "0"}, padding: "0"}}>
                {/* resource: https://mui.com/components/popover/ */}
                {/* display contact info */}
                <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div className="home_card_button_div">
                        <Button size="small" className="home_card_button" {...bindTrigger(popupState)}
                        sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", marginTop: "2vw", fontSize: "2.5vw"}, 
                        color: "#505f5f", marginLeft: "0.5rem", marginTop: "0.5rem", height: "1.5rem"}}>
                            Contact
                        </Button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                            }}
                            transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                            }}
                        >
                            <Typography sx={{ p: 2 }}>
                                Contact Info <br />
                                PhoneNum: {props.phoneNum ? `${props.phoneNum}` : "911"} <br />
                                Email: {props.email ? `${props.email}` : "N/A"}
                            </Typography>
                        </Popover>
                        </div>
                    )}
                </PopupState>
            </CardActions>
        </Card>
    )
}