import { useState } from "react";
import Header from "../components/header";
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';

export default function Posts(props) {
    return (
        <div>
            <div className="posts_div">
                <h1 onClick={() => console.log(props)}>All / Pets / People</h1>
            </div>
            <div className="home_content">
                <Card className="home_cards" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            Lizard
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                            Location: Vancouver
                            Last seen: October 3, 2021
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Contact
                        </Button>
                    </CardActions>
                </Card>
                <Card className="home_cards" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            Lizard
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                            Location: Vancouver
                            Last seen: October 3, 2021
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Contact
                        </Button>
                    </CardActions>
                </Card>
                <Card className="home_cards" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            Lizard
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                            Location: Vancouver
                            Last seen: October 3, 2021
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Contact
                        </Button>
                    </CardActions>
                </Card>
                <Card className="home_cards" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            Lizard
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                            Location: Vancouver
                            Last seen: October 3, 2021
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Contact
                        </Button>
                    </CardActions>
                </Card>
                <Card className="home_cards" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            Lizard
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                            Location: Vancouver
                            Last seen: October 3, 2021
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Contact
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="home_pagination_div">
                <Pagination count={5} shape="rounded" className="home_pagination"/>
            </div>
            <Footer/>
        </div>
        
    );
};