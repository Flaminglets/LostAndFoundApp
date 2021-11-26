import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

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

export default function DeletePost(props) {
    const [session] = useSession();
    const router = useRouter();
    console.log("88", props.props.id)

    const handleCancelClick = () => {
        router.push(`/user/${session.id}`);
    }

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

        const response = await fetch("http://localhost:3000/api/post", requestOptions);
        router.push(`/user/${session.id}`);
    }

    return (
        <div className="no_session">
            <div className="user_backcolor"></div>
            <h1>Delete Post</h1>
            <p>Are you sure you want to delete the post?</p>
            <CardActions className="user_card_buttons">
                <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit" 
                    onClick={handleCancelClick}>
                    Cancel
                </FlamingoEditButton>
                <FlamingoFoundButton size="small" variant="contained" className="user_card_button user_card_button_found"
                    onClick={handleDeleteClick}>
                    Delete
                </FlamingoFoundButton>
            </CardActions>
        </div>
    )
}

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