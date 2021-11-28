/*
By Yoonseo @Flaminglets
this page is User page
if user is not logged in, it will tell user to login first
otherwise, it displays user info (image, userid, email), and posts that user created
*/

import React from "react";
import { useSession } from 'next-auth/client';
import Footer from '../../components/footer';
import NotLoggedIn from '../../components/notLoggedIn';
import UserPostCard from '../../components/userCard';
import Divider from '@mui/material/Divider';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

// these are for later use for user edit button
// import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// const FlamingoEditButton = styled(Button)({
//     "&:hover": {
//         backgroundColor: "#B0B7AB"
//     },
// })

// @params: posts that the user created
// @return: NotLoggedIn when no session, User page with UserPostCard function from userCard file, and pass the posts data, and Footer
export default function UserPage(props) {
    const [session] = useSession();
    props = props.props

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
                            {session.image != '' && (
                                <>
                                <img src={session.image.toString()} className="user_image"/>
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
                            {/* function to edit user can be added later */}
                            {/* <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit">
                            Edit
                            </FlamingoEditButton> */}
                        </div>
                    </div>
                    <Divider variant="middle" flexItem className="user_divider" style={{fill: "white"}}/>
                    <div className="user_content">
                        {
                            props.posts.reverse().map(
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

// getting posts of user in session created
// @params: user id
// @ return: list of posts data from user
UserPage.getInitialProps = async (ctx) => {
    const {query} = ctx;

    const response = await fetch(`${process.env.PUBLIC_URL}/api/user/` + query.user);
    const postdata = await response.json()

    const posts = postdata.map(
        (post) => {
            return {
                id: post._id,
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