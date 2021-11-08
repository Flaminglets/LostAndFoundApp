import Header from "../components/header";
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';


export default function PetsPosts() {
    return (
        <div>
            {/*page for only pets */}
            <Header/>
            <div className="posts_div">
                <h1>Missing Pets</h1>
            </div>
            <div className="home_content">
                {/* use id pet so all cards with the id pet show up here */}
                <Card className="home_cards" id="pets" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                            {/* will replace kitten with the pets name */}
                            Kitten
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img"
                        
                        /* place holder image card media image not loading  */
                        image="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                        alt="Kitten"
                        />

                        <CardContent>
                            {/* body two makes the text smaller the higher the number the smaller the text */}
                            <Typography variant="body2" color="text.secondary">
                                Location: Richmond 
                               
                            </Typography>
                            {/* add a new typogrpahy to write to the next line */}
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
                <Card className="home_cards" id="pets" elevation={5}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" className="home_card_title" >
                            {/*will replace dog with the dogs name */}
                            Dog
                        </Typography>
                        <CardMedia className="home_card_media"
                        component="img" image="/static/images/cards/contemplative-reptile.jpg"
                        alt="Dog"/>
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