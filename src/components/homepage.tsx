import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { getAddPosts } from "../../lib/backend/database";

export default function Homepage(props) {
    
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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
                                    Lizard
                                </Typography>
                                <CardMedia className="dashboard_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
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

// export async function getServerSideProps() {
//     const postdata = await getAddPosts();
//     console.log('postdata', postdata);
//     const posts = postdata.map(
//         (post) => {
//             return {
//                 id: post.id.toString(),
//                 type: post.type,
//                 date: post.date,
//                 time: post.time,
//                 location: post.location,
//                 lostFname: post.lostFname,
//                 lostLname: post.lostLname,
//                 gender: post.gender,
//                 otherGender: post.otherGender || null,
//                 age: post.age,
//                 weight: post.weight,
//                 height: post.height,
//                 eyecolor: post.eyecolor,
//                 ethnicity: post.ethnicity,
//                 additional: post.additional,
//                 image: post.image || null,
//                 userFname: post.userFname,
//                 userLname: post.userLname,
//                 phoneNum: post.phoneNum,
//                 email: post.email
//             };
//         }
//     )

//     return {
//         props : {
//             posts
//         }
//     }
// }