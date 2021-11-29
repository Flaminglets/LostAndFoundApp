/* By Yoonseo @Flaminglets
this page is for preventing user from deleting the post accidentally
this page is redirected from userCard, when the 'Found' button is clicked
user can choose to go back to user page or delete the post */

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material';

// for mui style
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});

// button style
const FlamingoEditButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#B0B7AB"
    },
})

const FlamingoFoundButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#455451"
    },
})

// @params: a post id of a post that user selected to delete
// @return: delete page
// deletes post when Delete button is clicked
export default function DeletePost(props) {
    const [session] = useSession();
    const router = useRouter();

    // redirect to user page
    const handleCancelClick = () => {
        router.push("/user");
    }

    // deletes the post and redirect to user page
    const handleDeleteClick = async () => {
        const postID = props.props.id
        const body = postID;

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application"
            },
            body: body
        };

        const response = await fetch("/api/post", requestOptions);
        location.href = "/user";
    }

    return (
        <div className="no_session">
            <div className="user_backcolor"></div>
            <h1>Delete Post</h1>
            <p>Are you sure you want to delete the post?</p>
            <CardActions className="user_card_buttons">
                <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit" 
                    sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", fontSize: "2vw", height: "6vw", width: "15vw"}, 
                    backgroundColor: "#D2D4C8", color:"black", height: "2rem", width: "5rem"}}
                    onClick={handleCancelClick}>
                    Cancel
                </FlamingoEditButton>
                <FlamingoFoundButton size="small" variant="contained" className="user_card_button user_card_button_found"
                    sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", fontSize: "2vw", height: "6vw", width: "15vw"}, 
                    backgroundColor: "#5F7470", color:"white", height: "2rem", width: "5rem"}}
                    onClick={handleDeleteClick}>
                    Delete
                </FlamingoFoundButton>
            </CardActions>
        </div>
    )
}

// getting post id
// @params: post id
// @return: post id
DeletePost.getInitialProps = async (ctx) => {
    // resources: https://www.youtube.com/watch?v=Os3JZc2CtwY
    const {query} = ctx;
    const id = query.deletePost

    return {
        props : {
            id
        }
    }
}