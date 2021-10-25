import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const Homepage = () => {
    const [event, setEvent] = useState("");
    return (
        <div className="home_div">
            <div className="home_backcolor"></div>
            <div className="home_main">
                <p className="home_title">Today's latest cases</p>

                <div className="home_dashboard">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti
                    rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore 
                    ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit 
                    fuga dolor id.
                    </p>
                </div>
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
        </div>
    );
};

export default Homepage;