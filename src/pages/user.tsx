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
import { useState } from 'react';
import UserPostCard from '../components/card';

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
    const [postId, setPostId] = useState();

    const handleEditClick = (event) => {
        console.log(event.key)
    }

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
                                        <UserPostCard 
                                            id={post.id}
                                            image={post.image}
                                            lostFname={post.lostFname}
                                            lostLname={post.lostLname}
                                        />  
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
    // console.log('data', postdata);
    const posts = postdata.map(
        (post) => {
            return {
                id: post.id.toString(),
                type: post.type || null,
                date: post.date || null,
                time: post.time || null,
                location: post.location || null,
                lostFname: post.lostFname || null,
                lostLname: post.lostLname || null,
                gender: post.gender || null,
                otherGender: post.otherGender || null,
                age: post.age || null,
                weight: post.weight || null,
                height: post.height || null,
                eyecolor: post.eyecolor || null,
                ethnicity: post.ethnicity || null,
                additional: post.additional || null,
                image: post.image || null,
                userFname: post.userFname || null,
                userLname: post.userLname || null,
                phoneNum: post.phoneNum || null,
                email: post.email || null
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
