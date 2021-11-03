import AccessDenied from '../components/accessDenied'
import Header from "../components/header";
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useSession} from 'next-auth/client';
import Divider from '@mui/material/Divider';

export default function UserPage(props) {
    const [session, loadingSession] = useSession();

    return (
        <div>
            <Header/>
            {!session && (
                <>
                <h1>when user is not signed in</h1>
                </>
            )}
            {session && (
                <>
                <div className="user_div">
                    <div className="user_backcolor"></div>
                    <div className="user_profile">

                        <div className="user_image_div">
                            {/* <img src={session.image} alt={session.name} /> */}
                            {/* <AccountCircleRoundedIcon className="user_image"/> */}
                        </div>
                        <div className="user_profile_info">
                            <p>User ID: {session.name}</p>
                            <p>Email: {session.email}</p>
                        </div>
                        <div className="user_edit_button">
                            <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                            Edit
                            </Button>
                        </div>
                    </div>
                    <Divider variant="middle" flexItem className="user_divider" style={{fill: "white"}}/>
                    <div className="user_content">
                        {/* {
                            props.posts.map(
                                (post) => {
                                    <Card className="user_cards" elevation={5}>
                                        <CardActionArea>
                                            <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                                {post.title}
                                            </Typography>
                                            <CardMedia className="home_card_media"
                                            component="img"
                                            image={post.image}
                                            alt="missing pet/person image"
                                            />
                                        </CardActionArea>
                                        <CardActions className="user_card_buttons">
                                            <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                                            Edit
                                            </Button>
                                            <Button size="small" variant="contained" className="user_card_button user_card_button_found">
                                            FOUND
                                            </Button>
                                        </CardActions>
                                    </Card>
                                }
                            )
                        } */}
                        <Card className="user_cards" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                    Lizard
                                </Typography>
                                <CardMedia className="home_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                />
                            </CardActionArea>
                            <CardActions className="user_card_buttons">
                                <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                                Edit
                                </Button>
                                <Button size="small" variant="contained" className="user_card_button user_card_button_found">
                                FOUND
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="user_cards" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                    Lizard
                                </Typography>
                                <CardMedia className="home_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                />
                            </CardActionArea>
                            <CardActions className="user_card_buttons">
                                <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                                Edit
                                </Button>
                                <Button size="small" variant="contained" className="user_card_button user_card_button_found">
                                FOUND
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="user_cards" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                    Lizard
                                </Typography>
                                <CardMedia className="home_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                />
                            </CardActionArea>
                            <CardActions className="user_card_buttons">
                                <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                                Edit
                                </Button>
                                <Button size="small" variant="contained" className="user_card_button user_card_button_found">
                                FOUND
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="user_cards" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                    Lizard
                                </Typography>
                                <CardMedia className="home_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                />
                            </CardActionArea>
                            <CardActions className="user_card_buttons">
                                <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                                Edit
                                </Button>
                                <Button size="small" variant="contained" className="user_card_button user_card_button_found">
                                FOUND
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="user_cards" elevation={5}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                                    Lizard
                                </Typography>
                                <CardMedia className="home_card_media"
                                component="img"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                />
                            </CardActionArea>
                            <CardActions className="user_card_buttons">
                                <Button size="small" variant="contained" className="user_card_button user_card_button_edit">
                                Edit
                                </Button>
                                <Button size="small" variant="contained" className="user_card_button user_card_button_found">
                                FOUND
                                </Button>
                            </CardActions>
                        </Card>
                        
                    </div>
                </div>
                </>
            )}
            <Footer/>
        </div>
    )
}

// export async function getServerSideProps() {
//     const postdata = await getPosts();
//     console.log('data', postdata);
//     const posts = postdata.map(
//         (post) => {
//             return {
//                 id: post.id.toString(),
//                 title: post.title
//             };
//         }
//     )
//     console.log('posts', posts)

//     return {
//         props : {
//             posts
//         }
//     }
// }
