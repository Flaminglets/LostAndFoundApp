/*
Flaminglets
Yoonseo
this file contains a card function that can be used to display each card
displays a post information including name, image, location, date, time
when the image is clicked, redirects to detail page with post id
when 'contact' button is click, displays contact information with popup
*/

import React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PostCard(props) {

    // redirects to detail page of the post
    const router = useRouter();
    const handleCardClick = () => {
        router.push({
            pathname: `/detailpage/${props.id}`,
            query: {
                id: props.id
            }
        })
    }

    return (
        <Card className="home_cards" elevation={5}>
            {/* redirect to detail page when clicked */}
            <CardActionArea onClick={handleCardClick} className="home_card">
                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                    {props.lostFname} {props.lostLname}
                </Typography>
                <CardMedia className="home_card_media"
                    component="img"
                    image={props.image}
                    alt="lost pet/person image"
                />
                <CardContent className="home_card_info_div">
                <div className="home_card_info_div">
                    <p className="home_card_info">Location: {props.location}</p>
                    <p className="home_card_info">Last seen: {props.date}. {props.time}</p>
                </div>
                </CardContent>
            </CardActionArea>
            <CardActions className="home_card_button_div">
                {/* resource: https://mui.com/components/popover/ */}
                {/* display contact info */}
                <PopupState variant="popover" popupId="demo-popup-popover" className="home_card_button_div">
                    {(popupState) => (
                        <div className="home_card_button_div">
                        <Button size="small" color="primary" className="home_card_button" {...bindTrigger(popupState)}>
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
                                PhoneNum: {props.phoneNum ? `${props.phoneNum}` : "N/A"} <br />
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