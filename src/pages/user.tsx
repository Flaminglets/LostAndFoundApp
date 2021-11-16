import NotLoggedIn from '../components/notLoggedIn';
import { getAddPosts } from '../../lib/backend/database';
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useSession} from 'next-auth/client';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'

const FlamingoEditButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#B0B7AB'
    },
})

const FlamingoFoundButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#455451'
    },
})

export default function UserPage(props) {
    const [session, loadingSession] = useSession();
    const router = useRouter();

    return (
        <div>
            {!session && (
                <>
                <NotLoggedIn/>
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
                            <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit">
                            Edit
                            </FlamingoEditButton>
                        </div>
                    </div>
                    <Divider variant="middle" flexItem className="user_divider" style={{fill: "white"}}/>
                    <div className="user_content">
                        {
                            props.posts.map(
                                (post) => {
                                    return (
                                    <div key={post.id}>
                                        <Card className="user_cards" elevation={5}>
                                            <CardActionArea>
                                                <Typography gutterBottom variant="h5" component="div" className="user_card_title">
                                                    {post.lostFname} {post.lostLname}
                                                </Typography>
                                                <CardMedia className="user_card_media"
                                                component="img"
                                                image={post.image}
                                                alt="missing pet/person image"
                                                />
                                            </CardActionArea>
                                            <CardActions className="user_card_buttons">
                                                <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit">
                                                Edit
                                                </FlamingoEditButton>
                                                <FlamingoFoundButton size="small" variant="contained" className="user_card_button user_card_button_found">
                                                FOUND
                                                </FlamingoFoundButton>
                                            </CardActions>
                                        </Card>
                                    </div>
                                    )
                                }
                            )
                        }
                        
                    </div>
                </div>
                </>
            )}
            <Footer/>
        </div>
    )
}

export async function getServerSideProps() {
    const postdata = await getAddPosts();
    console.log('data', postdata);
    const posts = postdata.map(
        (post) => {
            return {
                id: post.id.toString(),
                type: post.type,
                date: post.date,
                time: post.time,
                location: post.location,
                lostFname: post.lostFname,
                lostLname: post.lostLname,
                gender: post.gender,
                otherGender: post.otherGender || null,
                age: post.age,
                weight: post.weight,
                height: post.height,
                eyecolor: post.eyecolor,
                ethnicity: post.ethnicity || null,
                additional: post.additional,
                image: post.image || null,
                userFname: post.userFname,
                userLname: post.userLname,
                phoneNum: post.phoneNum,
                email: post.email
            };
        }
    )
    console.log('posts', posts)

    return {
        props : {
            posts
        }
    }
}
