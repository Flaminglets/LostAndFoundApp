import Header from "../components/header";
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';


export default function peoplePosts() {
    return (
        <div>
            {/*page for only people */}
            <Header/>
            <div className="posts_div">
                <h1>Missing People</h1>
            </div>
            <div className="home_content">
                {/* use id person so all cards with the id pet show up here */}
                <Card className="home_cards" id="person" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            Liam Cooper
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        
                        /* place holder image card media image not loading  */
                        image="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                        alt="Liam"
                        />

                        <CardContent>
                            {/* body two makes the text smaller the higher the number the smaller the text */}
                            <Typography variant="body2" color="text.secondary">
                                Location: Richmond 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Last Seen: October 13, 2021
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Contact
                        </Button>
                    </CardActions>

                </Card>
                <Card className="home_cards" id="person" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title" >
                            Olivia Rodrigo
                        </Typography>
                        <CardMedia className="home_card_media"
                        //need to create image here as well
                        component="img" image="/static/images/cards/contemplative-reptile.jpg"
                        alt="Olivia"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Location: Vancouver 
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Last Seen: October 23, 2021
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
            <div className="home_paginattion_div">
                <Pagination count={5} shape="rounded" className="home_pagination"/>
            </div>

            <Footer/>
        </div>
    )
}