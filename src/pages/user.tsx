import Header from "../components/header";
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function UserPage() {
    return (
        <div>
            <Header/>
            <div className="user_div">
                <div className="user_backcolor"></div>
                <div className="user_profile">
                    <p>User ID: user12345</p>
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
                        Edit
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
                        Edit
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
                        Edit
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
                        Edit
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
                        Edit
                        </Button>
                    </CardActions>
                </Card>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
