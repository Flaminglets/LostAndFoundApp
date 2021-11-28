/*
Flaminglets
Yoonseo
this file contains function for dashboard for the homepage
dashboard displays 8 recent posts
if the number of posts in database is less then 8, it will only show that number of posts on dashboard
*/

import React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function Homepage(props) {
    props = props.props
    const router = useRouter();
    return (
        <div className="home_div">
            <div className="home_backcolor"></div>
            <div className="home_main">
                <p className="home_title">Today's latest cases</p>
                <div className="home_dashboard">
                    {props.posts.length > 0 && (
                        <>
                        <div className="home_cards_div1">
                            <Card className="dashboard_cards card_1" elevation={5}>
                                <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[0].id}`)}>
                                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                        {props.posts[0].lostFname} {props.posts[0].lostLname}
                                    </Typography>
                                    <CardMedia className="dashboard_card_media"
                                    component="img"
                                    image={props.posts[0].image}
                                    alt="lost pet/person image"
                                    />
                                </CardActionArea >
                                <CardActions className="home_card_button_div home_card_button_div2">
                                    <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                    PhoneNum: {props.posts[0].phoneNum ? `${props.posts[0].phoneNum}` : "N/A"} <br />
                                                    Email: {props.posts[0].email ? `${props.posts[0].email}` : "N/A"}
                                                </Typography>
                                            </Popover>
                                            </div>
                                        )}
                                    </PopupState>
                                </CardActions>
                            </Card>
                            {props.posts.length > 1 && (
                                <Card className="dashboard_cards card_2" elevation={5}>
                                <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[1].id}`)}>
                                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                        {props.posts[1].lostFname} {props.posts[1].lostLname}
                                    </Typography>
                                    <CardMedia className="dashboard_card_media"
                                    component="img"
                                    image={props.posts[1].image}
                                    alt="lost pet/person image"
                                    />
                                </CardActionArea>
                                <CardActions className="home_card_button_div home_card_button_div2">
                                    <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                    PhoneNum: {props.posts[1].phoneNum ? `${props.posts[1].phoneNum}` : "N/A"} <br />
                                                    Email: {props.posts[1].email ? `${props.posts[1].email}` : "N/A"}
                                                </Typography>
                                            </Popover>
                                            </div>
                                        )}
                                    </PopupState>
                                </CardActions>
                            </Card>
                            )}
                        </div>
                        {props.posts.length > 2 && (
                            <>
                            <div className="home_cards_div2">
                                <Card className="dashboard_cards card_3" elevation={5}>
                                    <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[2].id}`)}>
                                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                            {props.posts[2].lostFname} {props.posts[2].lostLname}
                                        </Typography>
                                        <CardMedia className="dashboard_card_media"
                                        component="img"
                                        image={props.posts[2].image}
                                        alt="lost pet/person image"
                                        />
                                    </CardActionArea>
                                    <CardActions className="home_card_button_div home_card_button_div2">
                                        <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                        PhoneNum: {props.posts[2].phoneNum ? `${props.posts[2].phoneNum}` : "N/A"} <br />
                                                        Email: {props.posts[2].email ? `${props.posts[2].email}` : "N/A"}
                                                    </Typography>
                                                </Popover>
                                                </div>
                                            )}
                                        </PopupState>
                                    </CardActions>
                                </Card>
                            </div>
                            {props.posts.length > 3 && (
                                <>
                                <div className="home_cards_div3">
                                    <Card className="dashboard_cards card_4" elevation={5}>
                                        <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[3].id}`)}>
                                            <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                {props.posts[3].lostFname} {props.posts[3].lostLname}
                                            </Typography>
                                            <CardMedia className="dashboard_card_media"
                                            component="img"
                                            image={props.posts[3].image}
                                            alt="lost pet/person image"
                                            />
                                        </CardActionArea>
                                        <CardActions className="home_card_button_div home_card_button_div2">
                                            <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                            PhoneNum: {props.posts[3].phoneNum ? `${props.posts[3].phoneNum}` : "N/A"} <br />
                                                            Email: {props.posts[3].email ? `${props.posts[3].email}` : "N/A"}
                                                        </Typography>
                                                    </Popover>
                                                    </div>
                                                )}
                                            </PopupState>
                                        </CardActions>
                                    </Card>
                                    {props.posts.length > 4 && (
                                        <Card className="dashboard_cards card_5" elevation={5}>
                                            <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[4].id}`)}>
                                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                    {props.posts[4].lostFname} {props.posts[4].lostLname}
                                                </Typography>
                                                <CardMedia className="dashboard_card_media"
                                                component="img"
                                                image={props.posts[4].image}
                                                alt="lost pet/person image"
                                                />
                                            </CardActionArea>
                                            <CardActions className="home_card_button_div home_card_button_div2">
                                                <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                                PhoneNum: {props.posts[4].phoneNum ? `${props.posts[4].phoneNum}` : "N/A"} <br />
                                                                Email: {props.posts[4].email ? `${props.posts[4].email}` : "N/A"}
                                                            </Typography>
                                                        </Popover>
                                                        </div>
                                                    )}
                                                </PopupState>
                                            </CardActions>
                                        </Card>
                                    )}
                                </div>
                                {props.posts.length > 5 && (
                                    <>
                                    <div className="home_cards_div4">
                                        <Card className="dashboard_cards card_6" elevation={5}>
                                            <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[5].id}`)}>
                                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                    {props.posts[5].lostFname} {props.posts[5].lostLname}
                                                </Typography>
                                                <CardMedia className="dashboard_card_media"
                                                component="img"
                                                image={props.posts[5].image}
                                                alt="lost pet/person image"
                                                />
                                            </CardActionArea>
                                            <CardActions className="home_card_button_div home_card_button_div2">
                                                <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                                PhoneNum: {props.posts[5].phoneNum ? `${props.posts[5].phoneNum}` : "N/A"} <br />
                                                                Email: {props.posts[5].email ? `${props.posts[5].email}` : "N/A"}
                                                            </Typography>
                                                        </Popover>
                                                        </div>
                                                    )}
                                                </PopupState>
                                            </CardActions>
                                        </Card>
                                    </div>
                                    {props.posts.length > 6 && (
                                        <>
                                        <div className="home_cards_div5">
                                            <Card className="dashboard_cards card_7" elevation={5}>
                                                <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[6].id}`)}>
                                                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                        {props.posts[6].lostFname} {props.posts[6].lostLname}
                                                    </Typography>
                                                    <CardMedia className="dashboard_card_media"
                                                    component="img"
                                                    image={props.posts[6].image}
                                                    alt="lost pet/person image"
                                                    />
                                                </CardActionArea>
                                                <CardActions className="home_card_button_div home_card_button_div2">
                                                    <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                                    PhoneNum: {props.posts[6].phoneNum ? `${props.posts[6].phoneNum}` : "N/A"} <br />
                                                                    Email: {props.posts[6].email ? `${props.posts[6].email}` : "N/A"}
                                                                </Typography>
                                                            </Popover>
                                                            </div>
                                                        )}
                                                    </PopupState>
                                                </CardActions>
                                            </Card>
                                            {props.posts.length > 7 && (
                                                <Card className="dashboard_cards card_8" elevation={5}>
                                                    <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[7].id}`)}>
                                                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                            {props.posts[7].lostFname} {props.posts[7].lostLname}
                                                        </Typography>
                                                        <CardMedia className="dashboard_card_media"
                                                        component="img"
                                                        image={props.posts[7].image}
                                                        alt="lost pet/person image"
                                                        />
                                                    </CardActionArea>
                                                    <CardActions className="home_card_button_div home_card_button_div2">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
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
                                                                        PhoneNum: {props.posts[7].phoneNum ? `${props.posts[7].phoneNum}` : "N/A"} <br />
                                                                        Email: {props.posts[7].email ? `${props.posts[7].email}` : "N/A"}
                                                                    </Typography>
                                                                </Popover>
                                                                </div>
                                                            )}
                                                        </PopupState>
                                                    </CardActions>
                                                </Card>
                                            )}
                                        </div>
                                        </>
                                    )}
                                    </>
                                )}
                                </>
                            )}
                            </>
                        )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

