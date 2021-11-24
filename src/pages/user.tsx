import React from "react";
import Footer from '../components/footer';
import NotLoggedIn from '../components/notLoggedIn';
import UserPostCard from '../components/userCard';
import { getAddPosts, getUserAddPosts } from '../../lib/backend/database';

import { Button } from '@mui/material';
import {useSession} from 'next-auth/client';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const FlamingoEditButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#B0B7AB'
    },
})

export default function UserPage(props) {
    const [session] = useSession();

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
                            {session.image != null && (
                                <>
                                <img src={session.image} alt={session.name} className="user_image"/>
                                </>
                            )}
                            {session.image == null && (
                                <>
                                <AccountCircleRoundedIcon className="user_image"/>
                                </>
                            )}
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
                                            type={post.type}
                                            date={post.date}
                                            time={post.time}
                                            location={post.location}
                                            lostFname={post.lostFname}
                                            lostLname={post.lostLname}
                                            gender={post.gender}
                                            otherGender={post.otherGender}
                                            age={post.age}
                                            weight={post.weight}
                                            height={post.height}
                                            eyecolor={post.eyecolor}
                                            additional={post.additional}
                                            image={post.image}
                                            userFname={post.userFname}
                                            userLname={post.userLname}
                                            phoneNum={post.phoneNum}
                                            email={post.email}
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

UserPage.getInitialProps = async () => {
    // resources: https://www.youtube.com/watch?v=Os3JZc2CtwY
    // const {query} = ctx;
    const [session] = useSession();
    
    const postdata = await getUserAddPosts(session.userID);
    // const postdata = await getAddPosts(User);
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
                additional: post.additional || null,
                image: post.image || null,
                userFname: post.userFname || null,
                userLname: post.userLname || null,
                phoneNum: post.phoneNum || null,
                email: post.email || null
            };
        }
    )

    return {
        props : {
            posts
        }
    }
}

// export async function getServerSideProps() {
//     const postdata = await getUserAddPosts();
//     // const postdata = await getAddPosts(User);
//     // console.log('data', postdata);
//     const posts = postdata.map(
//         (post) => {
//             return {
//                 id: post.id.toString(),
//                 type: post.type || null,
//                 date: post.date || null,
//                 time: post.time || null,
//                 location: post.location || null,
//                 lostFname: post.lostFname || null,
//                 lostLname: post.lostLname || null,
//                 gender: post.gender || null,
//                 otherGender: post.otherGender || null,
//                 age: post.age || null,
//                 weight: post.weight || null,
//                 height: post.height || null,
//                 eyecolor: post.eyecolor || null,
//                 additional: post.additional || null,
//                 image: post.image || null,
//                 userFname: post.userFname || null,
//                 userLname: post.userLname || null,
//                 phoneNum: post.phoneNum || null,
//                 email: post.email || null
//             };
//         }
//     )

//     return {
//         props : {
//             posts
//         }
//     }
// }
