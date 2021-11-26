import React from "react";
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PostCard(props) {

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
                    <PopupState variant="popover" popupId="demo-popup-popover" className="home_card_button_div">
                        {(popupState) => (
                            <div className="home_card_button_div">
                            <Button size="small" color="primary" className="home_card_button" {...bindTrigger(popupState)}>
                                Contact
                            </Button>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
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