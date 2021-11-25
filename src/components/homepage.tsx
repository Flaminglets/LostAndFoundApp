import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Homepage(props) {
    props = props.props
    console.log(props.posts.length)
    return (
        <div className="home_div">
            <div className="home_backcolor"></div>
            <div className="home_main">
                <p className="home_title">Today's latest cases</p>
                <div className="home_dashboard">
                    <div className="home_cards_div1">
                        <Card className="dashboard_cards card_1" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {/* {props.posts[0].lostFname == null (
                                        <>
                                        </>
                                    )} */}
                                    {props.posts[props.posts.length-1].lostFname} {props.posts[props.posts.length-1].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[props.posts.length-1].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="dashboard_cards card_2" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[1].lostFname} {props.posts[1].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[1].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="home_cards_div2">
                        <Card className="dashboard_cards card_3" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[2].lostFname} {props.posts[2].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[2].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="home_cards_div3">
                        <Card className="dashboard_cards card_4" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[3].lostFname} {props.posts[3].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[3].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="dashboard_cards card_5" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[4].lostFname} {props.posts[4].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[4].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="home_cards_div4">
                        <Card className="dashboard_cards card_6" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[5].lostFname} {props.posts[5].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[5].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="home_cards_div5">
                        <Card className="dashboard_cards card_7" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[6].lostFname} {props.posts[6].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[6].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="dashboard_cards card_8" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="dashboard_card_title">
                                    {props.posts[7].lostFname} {props.posts[7].lostLname}
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image={props.posts[7].image}
                                alt="lost pet/person image"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

