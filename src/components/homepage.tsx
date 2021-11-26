import React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
                                <CardActionArea onClick={() => router.push(`/detailpage/${props.posts[props.posts.length-1].id}`)}>
                                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
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
                            {props.posts.length > 1 && (
                                <Card className="dashboard_cards card_2" elevation={5}>
                                <CardActionArea>
                                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                        {props.posts[props.posts.length-2].lostFname} {props.posts[props.posts.length-2].lostLname}
                                    </Typography>
                                    <CardMedia className="dashboard_card_media"
                                    component="img"
                                    image={props.posts[props.posts.length-2].image}
                                    alt="lost pet/person image"
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Contact
                                    </Button>
                                </CardActions>
                            </Card>
                            )}
                        </div>
                        {props.posts.length > 2 && (
                            <>
                            <div className="home_cards_div2">
                                <Card className="dashboard_cards card_3" elevation={5}>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                            {props.posts[props.posts.length-3].lostFname} {props.posts[props.posts.length-3].lostLname}
                                        </Typography>
                                        <CardMedia className="dashboard_card_media"
                                        component="img"
                                        image={props.posts[props.posts.length-3].image}
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
                            {props.posts.length > 3 && (
                                <>
                                <div className="home_cards_div3">
                                    <Card className="dashboard_cards card_4" elevation={5}>
                                        <CardActionArea>
                                            <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                {props.posts[props.posts.length-4].lostFname} {props.posts[props.posts.length-4].lostLname}
                                            </Typography>
                                            <CardMedia className="dashboard_card_media"
                                            component="img"
                                            image={props.posts[props.posts.length-4].image}
                                            alt="lost pet/person image"
                                            />
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                            Contact
                                            </Button>
                                        </CardActions>
                                    </Card>
                                    {props.posts.length > 4 && (
                                        <Card className="dashboard_cards card_5" elevation={5}>
                                            <CardActionArea>
                                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                    {props.posts[props.posts.length-5].lostFname} {props.posts[props.posts.length-5].lostLname}
                                                </Typography>
                                                <CardMedia className="dashboard_card_media"
                                                component="img"
                                                image={props.posts[props.posts.length-5].image}
                                                alt="lost pet/person image"
                                                />
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                Contact
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    )}
                                </div>
                                {props.posts.length > 5 && (
                                    <>
                                    <div className="home_cards_div4">
                                        <Card className="dashboard_cards card_6" elevation={5}>
                                            <CardActionArea>
                                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                    {props.posts[props.posts.length-6].lostFname} {props.posts[props.posts.length-6].lostLname}
                                                </Typography>
                                                <CardMedia className="dashboard_card_media"
                                                component="img"
                                                image={props.posts[props.posts.length-6].image}
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
                                    {props.posts.length > 6 && (
                                        <>
                                        <div className="home_cards_div5">
                                            <Card className="dashboard_cards card_7" elevation={5}>
                                                <CardActionArea>
                                                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                        {props.posts[props.posts.length-7].lostFname} {props.posts[props.posts.length-7].lostLname}
                                                    </Typography>
                                                    <CardMedia className="dashboard_card_media"
                                                    component="img"
                                                    image={props.posts[props.posts.length-7].image}
                                                    alt="lost pet/person image"
                                                    />
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Contact
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                            {props.posts.length > 7 && (
                                                <Card className="dashboard_cards card_8" elevation={5}>
                                                    <CardActionArea>
                                                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                            {props.posts[props.posts.length-8].lostFname} {props.posts[props.posts.length-8].lostLname}
                                                        </Typography>
                                                        <CardMedia className="dashboard_card_media"
                                                        component="img"
                                                        image={props.posts[props.posts.length-8].image}
                                                        alt="lost pet/person image"
                                                        />
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button size="small" color="primary">
                                                        Contact
                                                        </Button>
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

